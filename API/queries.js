const getData = require("./requestVATSIMData");

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

module.exports = {
    getHome,
    getVatsim,
    getOnline
}