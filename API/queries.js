import { determineVoiceStatus } from "../functions/determineVoiceStatus.js";
import { remarkSearch } from "../functions/remarkSearch.js";
import { data } from "../functions/requestVATSIMData.js";

const getHome = (req, res) => {

    let date = new Date();
    let zuluTime = date.getUTCHours().toString() + ":" + date.getUTCMinutes().toString() + ":" + date.getUTCSeconds().toString() + "z";
    return res.json({ Info: 'Node.JS, Express', Server: 'Online', Time: zuluTime });
};

const getVatsim = async (req, res) => {

    return res.json(await data);
};

const getOnline = async (req, res) => {

    let output = {};
    try {

        output["pilots"] = await data.pilots.length;
        output["controllers"] = await data.controllers.length;
        output["unique users"] = await data.pilots.length + data.controllers.length;

        res.json(output);
    }
    catch(err) {
        console.log(err);
    }
};

const getVoiceStatus = async (req, res) => {

    const pilots = await data.pilots;

    try{

        const output = determineVoiceStatus(pilots);
        res.json(output);
    }
    catch(err) {
        console.log(err);
    }
};

const getPilotsByRemarks = async (req, res) => {

    const pilots = await data.pilots;
    const remarkParam = req.params.remarks;

    try{
        const output = remarkSearch(pilots, remarkParam);
        res.json(output);
    }
    catch(err) {
        console.log(err);
    }
};

export {
    getHome, getOnline, getPilotsByRemarks, getVatsim, getVoiceStatus
};
