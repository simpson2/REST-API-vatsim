const getData = require("../functions/requestVATSIMData");
const determineVoiceStatus = require("../functions/determineVoiceStatus");
const remarkSearch = require("../functions/remarkSearch");

const getHome = (req, res) => {
    return res.json({ Info: 'Node.JS, Express', Server: 'Online' });
}

const getVatsim = async (req, res) => {
    const data = await getData();
    return res.json(data);
}

const getOnline = async (req, res) => {
    const data = await getData();

    let output = {};
    try {
        let p = 0;
        for(pilot in data.pilots) {
            p += 1;
        }

        let c = 0
        for(controller in data.controllers) {
            c += 1;
        }

        output["pilots"] = p;
        output["controllers"] = c;
        res.json(output);
    }
    catch(err) {
        console.log(err);
    }
}

const getVoiceStatus = async (req, res) => {
    const data = await getData();
    const pilots = data.pilots;
    let remarks = [];
    
    try{
        for(i = 0; i < pilots.length; i++) {
            remarks[i] = pilots[i].plan.remarks;
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