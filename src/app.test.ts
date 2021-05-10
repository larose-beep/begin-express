import supertest from "supertest";
import { app } from "..";

describe("GET /api/cats", () => {
  it("respoen with cats", (done) => {
    supertest(app)
      .get("/api/cats")
      .expect(200, () => done());
  });
});
