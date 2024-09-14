const getData = require("../functions/requestVATSIMData");
const determineVoiceStatus = require("../functions/determineVoiceStatus");
const remarkSearch = require("../functions/remarkSearch");

const getHome = (req, res) => {
    let date = new Date();
    let zuluTime = date.getUTCHours().toString() + ":" + date.getUTCMinutes().toString() + ":" + date.getUTCSeconds().toString() + "z";
    return res.json({ Info: 'Node.JS, Express', Server: 'Online', Time: zuluTime });
}

const getVatsim = async (req, res) => {
    return res.json((await getData()));
}

const getOnline = async (req, res) => {
    const data = await getData();

    let output = {};
    try {

        output["pilots"] = data.pilots.length;
        output["controllers"] = data.controllers.length;
        output["unique users"] = data.pilots.length + data.controllers.length;

        res.json(output);
    }
    catch(err) {
        console.log(err);
    }
}

const getVoiceStatus = async (req, res) => {
    const data = await getData();
    const pilots = data.pilots;

    try{

        const output = determineVoiceStatus(pilots);
        res.json(output);
    }
    catch(err) {
        console.log(err);
    }
}

const getPilotsByRemarks = async (req, res) => {
    const remarkParam = req.params.remarks;
    const data = await getData();
    const pilots = data.pilots;

    try{
        const output = remarkSearch(pilots, remarkParam);
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