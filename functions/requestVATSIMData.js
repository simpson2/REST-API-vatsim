import fetch from "node-fetch";
const vatsim = "https://data.vatsim.net/v3/vatsim-data.json";

let data;
let res;

async function getData() {

    try {
        res = await fetch(vatsim);
        data = await res.json();

    }
    catch(err) {
        data = JSON.stringify({ERROR: err});
    }
};

export { data, getData };
