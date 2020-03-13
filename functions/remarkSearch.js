function remarkSearch(pilots, remarkParam) {
    
    const pattern = new RegExp("^.*" + remarkParam + ".*$", "i");
    const pilotAndRemarks = {};

    for(i = 0; i < pilots.length; i++) {
        if(pattern.test([pilots[i].plan.remarks])) {

            pilotAndRemarks["Pilot Name "+i] = pilots[i].member.name;
            pilotAndRemarks["Pilot CID "+i] = pilots[i].member.cid;
            pilotAndRemarks["Remarks "+i] = pilots[i].plan.remarks;
        }
    }

    return pilotAndRemarks;
}

module.exports = remarkSearch;