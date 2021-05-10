import supertest from "supertest";
import { app } from "../../..";

describe("Testing Dogs...", () => {
  it("GET /api/dogs", (done) => {
    supertest(app)
      .get("/api/dogs")
      .expect(200, () => done());
  });

  it("GET /api/dogs/feeding", (done) => {
    supertest(app)
      .get("/api/dogs/feeding")
      .expect(200, () => done());
  });
});
