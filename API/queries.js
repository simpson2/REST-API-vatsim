const getData = require("../functions/requestVATSIMData");
const determineVoiceStatus = require("../functions/determineVoiceStatus");
const remarkSearch = require("../functions/remarkSearch");

const getHome = (req, res) => {
    let date = new Date();
    let zuluTime = date.getUTCHours().toString() + ":" + date.getUTCMinutes().toString() + ":" + date.getUTCSeconds().toString() + "z";
    return res.json({ Info: 'Node.JS, Express', Server: 'Online', Time: zuluTime });
}

const getVatsim = async (req, res) => {
    const data = await getData();
    return res.json(data);
}

const getOnline = async (req, res) => {
    const data = await getData();

    let output = {};
    try {

        let numPilots = data.pilots.length;
        let numControllers = data.controllers.length;
        let uniqueUsers = numPilots + numControllers;

        output["pilots"] = numPilots;
        output["controllers"] = numControllers;
        output["unique users"] = uniqueUsers;

        res.json(output);
    }
    catch(err) {
        console.log(err);
    }
}

const getVoiceStatus = async (req, res) => {
    const data = await getData();
    const clients = data.clients;
    let remarks = [];

    try{
        for(i = 0; i < clients.length; i++) {
            let client = clients[i];

            if(client.clienttype === "PILOT"){
                remarks[i] = client.planned_remarks;
            }
        }

        const output = determineVoiceStatus(remarks)
        res.json(output);
    }
    catch(err) {
        console.log(err);
    }
}

const getPilotsByRemarks = async (req, res) => {
    const remarkParam = req.params.remarks;
    const data = await getData();
    const clients = data.clients;

    try{
        const output = remarkSearch(clients, remarkParam);
        res.json(output);
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = {
    getHome,
    getVatsim,
    getOnline,
    getVoiceStatus,
    getPilotsByRemarks
}