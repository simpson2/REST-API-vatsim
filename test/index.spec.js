const expect = require("chai").expect;
const server = require("../API/server");

describe("test", () => {
    it("should return JSON response indicating server is online", () => {
        expect({"Info":"Node.JS, Express","Server":"Online"})
        .to.eql({"Info":"Node.JS, Express","Server":"Online"});
    });
});