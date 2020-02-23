const voiceRegex = /^.*\/(v|V)\/.*$/;
const receiveRegex = /^.*\/(r|R)\/.*$/;
const textRegex = /^.*\/(t|T)\/.*$/;

function determineVoiceStatus(remarks) {

    let v = 0;
    let r = 0;
    let t = 0;
    let u = 0;
    let output = {};
    
    for(i = 0; i < remarks.length; i++) {
        if(voiceRegex.test(remarks[i])) v += 1;
        else if(receiveRegex.test(remarks[i])) r += 1;
        else if(textRegex.test(remarks[i])) t += 1;
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