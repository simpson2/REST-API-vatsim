import * as Queries from "./queries.js";

var routes = (app) => {

    app.get("/", Queries.getHome);
    app.get("/vatsim", Queries.getVatsim);
    app.get("/vatsim/online", Queries.getOnline);
    app.get("/vatsim/voicestatus", Queries.getVoiceStatus);
    app.get("/vatsim/pilots/:remarks", Queries.getPilotsByRemarks);
    //app.get("/vatsim/receive", queries.byReceive);
    //app.get("/vatsim/text", queries.byText);
}

export { routes };
