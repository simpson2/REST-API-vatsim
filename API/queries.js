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

const getOnline = async (req, res) => { //TODO number of controllers
    const data = await getData();

    let output = {};
    try {

        let p = 0;
        let numClients = data.clients.length;

        for(i = 0; i < numClients; i++) {
            let client = data.clients[i];
            
            if(client.clienttype === "PILOT") {
                p += 1;
            }
        }

        output["pilots"] = p;
        output["total clients"] = numClients;

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