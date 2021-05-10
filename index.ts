import { environment } from "./src/utils";
import express from "express";
import http from "http";
import helmet from "helmet";
import cors from "cors";
import { AddressInfo } from "net";
import morgan from "morgan";
import { errorHandler } from "./src/middlewares";
import { router as routes } from "./src/routes";

const { PORT, NODE_ENV } = environment;

const app = express();

app.use(helmet());

app.use(cors());

app.use(morgan(NODE_ENV === "development" ? "dev" : "tiny"));

app.use(routes);

app.use(errorHandler);

const server = http.createServer(app);

server.on("listening", () => {
  const address = server.address() as AddressInfo;
  console.log(`* Running on http://localhost:${address.port}`);
});

server.listen(PORT);
