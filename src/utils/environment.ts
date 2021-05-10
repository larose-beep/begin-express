import dotenv from "dotenv";

dotenv.config();

interface IEnvironment {
  PORT: number;
  NODE_ENV: "production" | "development";
}

export const environment: IEnvironment = {
  PORT: 8080,
  NODE_ENV: "development",
  ...(process.env as any),
};
