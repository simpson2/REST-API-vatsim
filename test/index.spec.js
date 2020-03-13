const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../API/server");

chai.use(chaiHttp);

describe("Server online", () => {
    it("responds with code 200", (done) => {
        chai.request(app)
        .get("/")
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    });
});