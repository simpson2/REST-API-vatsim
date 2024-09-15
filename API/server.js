import express from "express";
import { getData } from "../functions/requestVATSIMData.js";
import { routes } from "./routes.js";

const app = express();

routes(app);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, () => {
    console.log("App running on port " + port);
    console.log('Server address "localhost:'+port+'"');
})

console.log("Fetching API data now");
getData();
const interval = setInterval(() => {
    let date = new Date();
    let zuluTime = date.getUTCHours().toString() + ":" + date.getUTCMinutes().toString() + ":" + date.getUTCSeconds().toString() + "z";

    console.log("Fetching API data at time " + zuluTime);
    getData();
}, 30000);
