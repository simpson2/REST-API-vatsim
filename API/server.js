const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json()); // JSON support
app.use(                    // URL support
    bodyParser.urlencoded({
        extended: true,
    })
);

routes(app);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, () => {
    console.log("App running on port " + port);
    console.log('Server address "localhost:'+port+'"');
})