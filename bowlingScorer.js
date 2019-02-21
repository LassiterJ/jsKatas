// Each game, or “line” of bowling, includes ten turns, or “frames” for the bowler.
// In each frame, the bowler gets up to two tries to knock down all the pins.

let arr1 = ["5/", "5/", "5/", "5/", "5/", "5/", "5/", "5/", "5/", "5/", "5"];
let arr2 = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]
let arr3 = ["33", "72", "44", "12", "2-", "9-", "--", "33", "72", "44"]  
let arr4 = ["X", "X", "X", "--", "--", "--", "--", "--", "--", "X", "5/"]
class Frame {
    constructor(throw1, throw2) {
        this.throw1 = throw1;
        this.throw2 = throw2;
    }
}
function calculateTotal(framesArray) {
    // frameArray has this format [ Frame { throw1: 10, throw2: null },

    let score = 0;
    for(i = 0; i < 10; i++){
       let frame = framesArray[i];
        if (isStrike(frame)) {
            score = score + handleStrike(framesArray, i);
        } else if (isSpare(frame)) {
            score = score + handleSpare(framesArray, i);
        } else {
            score = score + frame.throw1 + frame.throw2;
        }
    }
    
    return score
}

console.log(calculateTotal(convertStringArrayToFrames(arr4)));

function isStrike(frame) {
    if (frame.throw1 === 10) {
        return true;
    }
    return false;
}

function handleStrike(frames, i) {
    var a = 1;
    frameScore = 10;
    if (frames[i + 1].throw1 === frameScore) {
        while (a < 3) {
            frameScore += frames[i + a].throw1;
            a++;
        }
    } else {
        frameScore += frames[i + 1].throw1 + frames[i + 1].throw2
    }
    console.log("frameScore" + i + ":", frameScore);
    return frameScore;
};

function isSpare(frame) {
    if (frame.throw2 + frame.throw1 === 10) {
        return true;
    }
    return false;
};

function handleSpare(frames, i) {
    return 10 + frames[i + 1].throw1;
};


function convertStringArrayToFrames(strArray) {
    let framesArray = [];
    strArray.forEach(function (frameStr) {
        let frame = convertStringToFrame(frameStr);
        framesArray.push(frame);
    });
    return framesArray
}
// console.log(convertStringArrayToFrames(arr2));


// 55
// ["5", "5"]
function convertStringToFrame(frameStr) {
    let throwStringList = frameStr.split('');
    let throw1 = throwStringList[0];
    let throw2 = throwStringList[1];
    let throws = convertThrowSymbolsToThrowNumbers(throw1, throw2);
    return new Frame(throws.throw1, throws.throw2);
}
// console.log(convertStringToFrame("-9"));

function convertThrowSymbolsToThrowNumbers(throw1, throw2) {
    if (throw1 === "X") {
        throw1 = 10;
        throw2 = null;
    } else if (throw1 === "-") {
        throw1 = 0;
    } else {
        throw1 = Number(throw1);
    }

    if (throw2 === "/") {
        throw2 = (10 - throw1)
    } else if (throw2 === "-") {
        throw2 = 0;
    } else if (throw2 === null) {
        throw2 = null;
    } else {
        throw2 = Number(throw2);
    }
    return {
        throw1: throw1,
        throw2: throw2,
    };
}






