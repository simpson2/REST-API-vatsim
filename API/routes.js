const queries = require("./queries")

var appRoutes = (app) => {
    
    app.get("/", queries.home);

    app.get("/vatsim", queries.getVatsim);
}

module.exports = appRoutes;