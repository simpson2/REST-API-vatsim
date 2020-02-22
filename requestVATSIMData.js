const fetch = require("node-fetch");
const vatsim = "http://eu.data.vatsim.net/vatsim-data.json";

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