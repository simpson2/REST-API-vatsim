function remarkSearch(pilots, remarkParam) {

    let id = 0;
    const pattern = new RegExp("^.*" + remarkParam + ".*$", "i");
    const output = {};

    output["total"] = id;
    output["matches"] = {};

    for(let i = 0; i < pilots.length; i++) {

        let pilot = pilots[i];

        if(pilot.flight_plan !== null && pattern.test([pilot.flight_plan.remarks])) {

            id++;

            output["total"] = id;

            output["matches"][`Pilot Name ${id}`] = pilot.name;
            output["matches"][`Pilot CID ${id}`] = pilot.cid;
            output["matches"][`Remarks ${id}`] = pilot.flight_plan.remarks;
        };
    };

    return output;
}

export { remarkSearch };
