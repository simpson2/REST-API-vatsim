const fetch = require("node-fetch");
const vatsim = "https://data.vatsim.net/v3/vatsim-data.json";

async function getData() {
    try {
        const res = await fetch(vatsim);
        const data = await res.json();
        //console.log(res);


        return data;
    }
    catch(err) {
        return JSON.stringify({ERROR: err});
    }
}

module.exports = getData;