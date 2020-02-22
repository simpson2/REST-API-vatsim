const getData = require("./requestVATSIMData");

const home = (req, res) => {
    return res.json({ Info: 'Node.JS, Express', Server: 'Online' });
}

const getVatsim = async (req, res) => {
    const data = await getData();
    return res.json(data);
}

module.exports = {
    home,
    getVatsim
}