let totalMoney = 0;

let bodyPartPicker = Math.floor(Math.random()*3);

let muscularFingerCount = 0;
let muscularFingerCost = 100;

let franchiseCost = 5000;
let franchiseCount = 0;

let attractiveAssistantCost = 200;
let attractiveAssistantCount = 0;

let ambidextrousCost = 2500;
let ambidextrousValue = false;
let ambidextrousDisplay = "False";

let crimRobPercent = 0.5;
let crimeChance = 25;

let securityCount = 0;

let relocateCount = 0;

let initialPublicOffering = false;

const SECURITY_COST = 5;

const RELOCATE_COST = 10000;

const B_UPPER_BACK = 0;
const B_MIDDLE_BACK = 1;
const B_LOWER_BACK = 2;

const TEN_PERCENT = 1.10;

const FIFTEEN_PERCENT = 1.15;

const MUSCULAR_MULTIPLIER = 5;

setInterval(RNG, 10000);

setInterval(update, 10);

setInterval(passiveMoney, 1000);

setInterval(crime, 300000);

setInterval(IPOTimer, 10000);


function RNG() {
    bodyPartPicker = Math.floor(Math.random()*3);
}

function displayInstructions() {
    if (bodyPartPicker == B_UPPER_BACK ){
        document.getElementById("instructions").innerText = "My Upper Back Is Sore, Please Massage It!";
    }
    else if (bodyPartPicker == B_MIDDLE_BACK) {
        document.getElementById("instructions").innerText = "My Middle Back Is Killing Me, Please Releive My Pain!";
    }
    else {
        document.getElementById("instructions").innerText = "My Lower Back Is In Pain, Please Make It Stop!";
    }
}

function upperBack() {
    if (bodyPartPicker == B_UPPER_BACK) {
        moneyEarned();
        document.getElementById("wrongBack").innerText = "";
    }
    else {
        document.getElementById("wrongBack").innerText = "Not There!";
    }
}

function middleBack() {
    if (bodyPartPicker == B_MIDDLE_BACK) {
        moneyEarned();
        document.getElementById("wrongBack").innerText = "";
    }
    else {
        document.getElementById("wrongBack").innerText = "Wrong Back!";
    }
}

function lowerBack() {
    if (bodyPartPicker == B_LOWER_BACK) {
        moneyEarned();
        document.getElementById("wrongBack").innerText = "";
    }
    else {
        document.getElementById("wrongBack").innerText = "You are terrible at this!";
    }
}

function buyMuscularFingers() {
    if (totalMoney >= muscularFingerCost &&  muscularFingerCount < 10) {
        totalMoney -= muscularFingerCost;
        muscularFingerCount += 1;
        muscularFingerCost *= TEN_PERCENT;
    }
}

function passiveMoney() {
    totalMoney += (200 * (1-Math.pow(0.95,franchiseCount)) /(1 - 0.95));
    totalMoney += attractiveAssistantCount;
    totalMoney -= securityCount * SECURITY_COST;
}


function update() {
    displayInstructions();
    document.getElementById("moneyDisplay").innerText ="$" + totalMoney.toFixed(2);

    document.getElementById("muscularFingerDisplay").innerText = "Muscular Fingers: " + muscularFingerCount;
    document.getElementById("btnMuscularFinger").innerText = "Buy Muscular Fingers: $" + muscularFingerCost.toFixed(2);  

    document.getElementById("franchiseDisplay").innerText = "Franchises: " + franchiseCount;
    document.getElementById("btnFranchise").innerText = "Buy Franchises: $" + franchiseCost.toFixed(2); 

    document.getElementById("attractiveAssistantDisplay").innerText = "Attractive Assistant: " + attractiveAssistantCount;
    document.getElementById("btnAttractiveAssistant").innerText = "Buy Attractive Assistant: $" + attractiveAssistantCost.toFixed(2);

    document.getElementById("ambidextrousDisplay").innerText = "Ambidextrous: " + ambidextrousDisplay;
    document.getElementById("btnAmbidextrous").innerText = "Buy Ambidextrous: $" + ambidextrousCost;

    document.getElementById("securityDisplay").innerText = "Security: " + securityCount;
    document.getElementById("btnSecurity").innerText = "Buy Security: $5/s";

    document.getElementById("relocateDisplay").innerText = "Relocations: " + relocateCount;
    document.getElementById("btnRelocate").innerText = "Buy Relocate: $" + RELOCATE_COST;

    document.getElementById("btnIPO").innerText = "Inital Public Offering";
    


    if (totalMoney >= muscularFingerCost && muscularFingerCount < 10) {
        document.getElementById("btnMuscularFinger").disabled = false;
    } 
    else if (muscularFingerCount == 10){
        document.getElementById("btnMuscularFinger").innerText = "Maxed Out";
        document.getElementById("btnMuscularFinger").disabled = true;
    }
    else {
        document.getElementById("btnMuscularFinger").disabled = true;
    }

    if (totalMoney >= franchiseCost) {
        document.getElementById("btnFranchise").disabled = false;
    }
    else {
        document.getElementById("btnFranchise").disabled = true;
    }
    if (totalMoney >= attractiveAssistantCost) {
        document.getElementById("btnAttractiveAssistant").disabled = false;
    }
    else {
        document.getElementById("btnAttractiveAssistant").disabled = true;
    }
    if (totalMoney >= ambidextrousCost && ambidextrousValue == false) {
        document.getElementById("btnAmbidextrous").disabled = false;
        document.getElementById("ambidextrousDisplay").innerText ="Ambidextrous: " + ambidextrousDisplay;
    }
    else {
        document.getElementById("btnAmbidextrous").disabled = true;
    }

    if (totalMoney >= RELOCATE_COST) {
        document.getElementById("btnRelocate").disabled = false;
    }
    else {
        document.getElementById("btnRelocate").disabled = true;
    }

    if (initialPublicOffering == true) {
        document.getElementById("btnIPO").disabled = false;
    }
    else {
        document.getElementById("btnIPO").disabled = true;
    }
}

function buyAttractiveAssistant(){
    if (totalMoney >= attractiveAssistantCost) {
        totalMoney -= attractiveAssistantCost;
        attractiveAssistantCount += 1;
        attractiveAssistantCost *= FIFTEEN_PERCENT;
    }
}

function buyFranchise() {
    if (totalMoney >= franchiseCost) {
        totalMoney -= franchiseCost;
        franchiseCount += 1;
        franchiseCost *= TEN_PERCENT;
    }
}

function buyAmbidextrous() {
    if (totalMoney >= ambidextrousCost) {
        totalMoney -= ambidextrousCost;
        ambidextrousValue = true;
        ambidextrousDisplay = "True";
    }
}

function clearCrimeAlert() {
    document.getElementById("robbedDisplay").innerText = "";
}

function crime() {
    chance = Math.floor(Math.random()*100 + 1);
    if ( chance <= crimeChance && totalMoney > 0) {
        totalMoney -= totalMoney * crimRobPercent;
        document.getElementById("robbedDisplay").innerText = "You Have Been Robbed!";
        setInterval(clearCrimeAlert, 10000);
    }
}

function buySecurity() {
    securityCount += 1;
    crimRobPercent *= 0.5;
}

function buyRelocate() {
    if (totalMoney >= RELOCATE_COST) {
        totalMoney -= RELOCATE_COST;
        relocateCount += 1;
        crimeChance *= 0.8;
    }
}

function IPOTimer() {
    initialPublicOffering = true;
    document.getElementById("IPODisplay").innerText = "Initial Public Offering Has Appeared!";
    document.getElementById("IPODisplay2").innerText = "Initial Public Offering Has Appeared!";
    
}

function IPO() {
    totalMoney += 50000;
    document.getElementById("btnIPO").hidden = true;
    document.getElementById("IPODisplay").hidden = true;
    document.getElementById("IPODisplay2").hidden = true;
}

function moneyEarned() {
    breakFingerChance = Math.floor(Math.random()*10);
    if (breakFingerChance == 0 && muscularFingerCount > 5) {
        totalMoney -=100;
        document.getElementById("brokenBack").innerText = "MY BACK IS BROKEN!!";
    }
    else {
        if (ambidextrousValue = true) {
            totalMoney += muscularFingerCount * MUSCULAR_MULTIPLIER + 1;
        }
        totalMoney += muscularFingerCount * MUSCULAR_MULTIPLIER + 1;
        document.getElementById("brokenBack").innerText = "";
    }
}