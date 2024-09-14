const voiceRegex = /\/(v|V)\//;
const receiveRegex = /\/(r|R)\//;
const textRegex = /\/(t|T)\//;

function determineVoiceStatus(pilots) {

    let v = 0;
    let r = 0;
    let t = 0;
    let u = 0;
    let output = {};

    for(i = 0; i < pilots.length; i++) {

        if(pilots[i].flight_plan !== null && voiceRegex.test(pilots[i].flight_plan.remarks)) v += 1;
        else if(pilots[i].flight_plan !== null && receiveRegex.test(pilots[i].flight_plan.remarks)) r += 1;
        else if(pilots[i].flight_plan !== null && textRegex.test(pilots[i].flight_plan.remarks)) t += 1;
        else u += 1;
    }

    output["voice"] = v;
    output["receive"] = r;
    output["text"] = t;
    output["unknown"] = u;
    output["total"] = v+r+t+u;

    return output;
}

module.exports = determineVoiceStatus;