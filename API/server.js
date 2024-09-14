const express = require("express");
const routes = require("./routes");
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

module.exports = app;