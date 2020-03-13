function remarkSearch(pilots, remarkParam) {
    
    const pattern = new RegExp("^.*" + remarkParam + ".*$", "i");
    const pilotAndRemarks = {};
    let id = 0;

    for(i = 0; i < pilots.length; i++) {
        if(pattern.test([pilots[i].plan.remarks])) {
            id++;

            pilotAndRemarks["Pilot Name "+id] = pilots[i].member.name;
            pilotAndRemarks["Pilot CID "+id] = pilots[i].member.cid;
            pilotAndRemarks["Remarks "+id] = pilots[i].plan.remarks;
        }
    }

    return pilotAndRemarks;
}

module.exports = remarkSearch;