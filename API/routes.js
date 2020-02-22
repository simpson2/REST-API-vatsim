const queries = require("./queries")

var appRoutes = (app) => {
    
    app.get("/", queries.getHome);
    app.get("/vatsim", queries.getVatsim);
    app.get("/vatsim/online", queries.getOnline);
    //app.get("/vatsim/voice", queries.byVoice);
    //app.get("/vatsim/receive", queries.byReceive);
    //app.get("/vatsim/text", queries.byText);
}

module.exports = appRoutes;