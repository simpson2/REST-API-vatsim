function remarkSearch(clients, remarkParam) {
    
    const pattern = new RegExp("^.*" + remarkParam + ".*$", "i");
    const pilotAndRemarks = {};
    let id = 0;

    for(i = 0; i < clients.length; i++) {
        let client = clients[i];

        if(pattern.test([client.planned_remarks])) {
            id++;

            pilotAndRemarks["Pilot Name "+id] = client.realname;
            pilotAndRemarks["Pilot CID "+id] = client.cid;
            pilotAndRemarks["Remarks "+id] = client.planned_remarks;
        }
    }

    return pilotAndRemarks;
}

module.exports = remarkSearch;