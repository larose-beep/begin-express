import supertest from "supertest";
import { app } from "../../..";

describe("Testing Cats...", () => {
  it("GET /api/cats", (done) => {
    supertest(app)
      .get("/api/cats")
      .expect(200, () => done());
  });

  it("GET /api/cats/feeding", (done) => {
    supertest(app)
      .get("/api/cats/feeding")
      .expect(200, () => done());
  });
});
