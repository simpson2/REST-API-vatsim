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
describe("GET", () => {
    it("/vatsim", (done) => {
        chai.request(app)
        .get("/vatsim")
        .end((err, res) => {
            expect(res.body).to.be.an("object");
            done();
        });
    });
    it("/vatsim/online", (done) => {
        chai.request(app)
        .get("/vatsim/online")
        .end((err, res) => {
            expect(res.body).to.be.an("object");
            done();
        });
    });
    it("/vatsim/voicestatus", (done) => {
        chai.request(app)
        .get("/vatsim/voicestatus")
        .end((err, res) => {
            expect(res.body).to.be.an("object");
            done();
        });
    });
    it("/vatsim/pilots/", (done) => {
        chai.request(app)
        .get("/vatsim/pilots/")
        .end((err, res) => {
            expect(res.body).to.be.an("object");
            done();
        });
    });
});