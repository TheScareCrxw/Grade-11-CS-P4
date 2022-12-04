


const r = ["h", "123", "boo", "hello","bob", "diediedie"]

let randomNumber;

let result;
let random;

let t=false;

const I_INPUT_TEXT = document.getElementById("textbox");
const P_THING = document.getElementById("display");
const P_NUMBER = document.getElementById("numberDisplay");

let textboxvalue = I_INPUT_TEXT.value; 
let textboxvaluelength = I_INPUT_TEXT.length;
let textboxv = I_INPUT_TEXT.length;

setInterval(update, 20);

setInterval(RNG,30000,0,r.length);

RNG(0,r.length);



function update() {
    textboxvalue = I_INPUT_TEXT.value;
    result = textboxvalue.slice(0,textboxvalue.length);
    random = r[randomNumber].slice(0,textboxvalue.length);

    textChecker();
}

function showWord() {
    RNG(0,r.length);
    P_NUMBER.innerText = r[randomNumber];
}

function RNG(min, max){
    randomNumber = Math.floor(Math.random()*max-min);
}

function textChecker() {
    if (result == random && textboxvalue != "") {
        document.getElementById("correct").innerText = result
    }
    else if (textboxvalue.slice(0,textboxvalue.length - 1) == r[randomNumber].slice(0,textboxvalue.length - 1)){
        // document.getElementById("correct").innerText = "sooyees a bitch"

    }
    else if (textboxvalue == 0) {
        document.getElementById("correct").innerText = "";
    }
}




