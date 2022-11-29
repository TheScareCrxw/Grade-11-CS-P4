// Creator: MAX L

// variable to keep track of total money
let moneyCount = 0;

// variables for muscular finger function
let muscularCount = 0;
let muscularFingerCost = 100;

// variables for attractive assistant function
let attractiveAssistantCount = 0;
let attractiveAssistantCost = 400;

// variable for ambidextrous function
let ambidextrousValue = false;
let ambidextrousDisplay = "False";

// variables for franchise function
let franchiseCost = 5000;
let franchiseCount = 0;

// variable for initial public offering function
let initialPublicOfferingValue = true;
let corporatePowerStruggleValue = 30;
let accept = false;
let decline = false;

// variables for crime function
let crimeRate = 25;
let moneyPercentRobbed = 0.5;

// variable for relocate function
let relocateCount = 0;

// variable for security function
let securityCount = 0;

// variable for pick body part
let randomNumber = Math.floor(Math.random() * 3) + 1;

// clear interval search on google
// only for franchise revolt

// constants used for my timers
const UPDATE_TIMER = 10;
const RNG_TIMER = 10000;
const PICK_BODY_PART_TIMER = 10000;
const CRIME_TIMER = 300000;
const AUTO_MONEY_TIMER = 1000;
const INITIAL_PUBLIC_OFFERING_TIMER = 600000;
const SECURITY_COST_TIMER = 1000;
const MUSCULAR_FINGER_MULIPLIER = 5;

// constants used for my pick body part function
const UPPER_BACK = 1;
const MIDDLE_BACK = 2;
const LOWER_BACK = 3;

// constants used for my costs for upgrades
const AMBIDEXTROUS_COST = 2500;
const RELOCATE_COST = 10000;
const SECURITY_COST = 5;

// timers used to run functions that update at certian time period
setInterval(update, UPDATE_TIMER);

setInterval(randomNumberGen, RNG_TIMER);

setInterval(pickBodyPart, PICK_BODY_PART_TIMER);

setInterval(crime, CRIME_TIMER);

setInterval(passiveIncome, AUTO_MONEY_TIMER);

setInterval(initialPublicOffering, INITIAL_PUBLIC_OFFERING_TIMER);

setInterval(resetCrimeAlert, 10);

setInterval(corporatePowerStruggle, 1000);

// called to let user know where to click when they are loaded into the game
pickBodyPart();

// function used to grab random number for my pick body part function
function randomNumberGen() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
}

// function for picking top, middle, or bottom part of back
function pickBodyPart() {
  if (randomNumber == UPPER_BACK) {
    document.getElementById("instructions").innerText =
      "My upperback is sore, please massage it";
  } else if (randomNumber == MIDDLE_BACK) {
    document.getElementById("instructions").innerText =
      "My middleback is sore, please massage it";
  } else {
    document.getElementById("instructions").innerText =
      "My lowerback is sore, please massage it";
  }
}

// function for when upper back is needed to be massaged
function upperBack() {
  if (randomNumber == UPPER_BACK) {
    moneyEarned();
    document.getElementById("wrongBack").innerText = "";
  } else {
    document.getElementById("wrongBack").innerText = "Ouch, wrong back!";
  }
}

// function for when middle back is needed to be massaged
function middleBack() {
  if (randomNumber == MIDDLE_BACK) {
    moneyEarned();
    document.getElementById("wrongBack").innerText = "";
  } else {
    document.getElementById("wrongBack").innerText = "Ouch, wrong back!";
  }
}

// function for when lower back is needed to be massaged
function lowerBack() {
  if (randomNumber == LOWER_BACK) {
    moneyEarned();
    document.getElementById("wrongBack").innerText = "";
  } else {
    document.getElementById("wrongBack").innerText = "Ouch, wrong back!";
  }
}

// function to update the game, ie. money, error messages, notifications
function update() {
  if (moneyCount >= muscularFingerCost && muscularCount <= 9) {
    document.getElementById("muscularFingers").disabled = false;
  } else if (moneyCount < muscularFingerCost || muscularCount >= 10) {
    document.getElementById("muscularFingers").disabled = true;
  }

  if (moneyCount >= AMBIDEXTROUS_COST && ambidextrousValue == false) {
    document.getElementById("ambidextrous").disabled = false;
  } else if (moneyCount < AMBIDEXTROUS_COST || ambidextrousValue == true) {
    document.getElementById("ambidextrous").disabled = true;
  }

  if (moneyCount >= attractiveAssistantCost) {
    document.getElementById("attrativeAssistants").disabled = false;
  } else if (moneyCount < attractiveAssistantCost) {
    document.getElementById("attrativeAssistants").disabled = true;
  }

  if (moneyCount >= franchiseCost) {
    document.getElementById("franchise").disabled = false;
  } else {
    document.getElementById("franchise").disabled = true;
  }

  if (moneyCount >= RELOCATE_COST) {
    document.getElementById("relocate").disabled = false;
  } else {
    document.getElementById("relocate").disabled = true;
  }

  if (initialPublicOfferingValue == true) {
    document.getElementById("initialPublicOfferingYes").disabled = true;
    document.getElementById("initialPublicOfferingNo").disabled = true;
    document.getElementById("initialPublicOfferingYes").hidden = true;
    document.getElementById("initialPublicOfferingNo").hidden = true;
  } else if (
    initialPublicOfferingValue == false &&
    accept == false &&
    decline == false
  ) {
    document.getElementById("initialPublicOfferingYes").disabled = false;
    document.getElementById("initialPublicOfferingNo").disabled = false;
    document.getElementById("initialPublicOfferingYes").hidden = false;
    document.getElementById("initialPublicOfferingNo").hidden = false;
  }
  document.getElementById("numberOfMuscularFingers").innerText =
    "Musclar Finger: " + muscularCount;
  if (muscularCount == 10) {
    document.getElementById("muscularFingers").innerText = "Maxed Out";
  } else {
    document.getElementById("muscularFingers").innerText =
      "Buy Muscular Fingers: $" + muscularFingerCost.toFixed(2);
  }

  document.getElementById("numberOfAttractiveAssistant").innerText =
    "Attractive Assistant: " + attractiveAssistantCount;
  document.getElementById("attrativeAssistants").innerText =
    "Buy Attractive Assistant: $" + attractiveAssistantCost.toFixed(2);

  document.getElementById("ambidextrousDisplay").innerText =
    "Ambidextrous: " + ambidextrousDisplay;
  if (ambidextrousValue == true) {
    document.getElementById("ambidextrous").innerText = "Maxed Out";
  } else {
    document.getElementById("ambidextrous").innerText =
      "Buy Ambidextrous: $" + AMBIDEXTROUS_COST;
  }

  document.getElementById("numberOfFranchise").innerText =
    "Franchises: " + franchiseCount;
  document.getElementById("franchise").innerText =
    "Buy Franchise: $" + franchiseCost.toFixed(2);

  document.getElementById("numberOfRelocations").innerText =
    "Relocations: " + relocateCount;
  document.getElementById("relocate").innerText =
    "Buy Relocation: $" + RELOCATE_COST;

  document.getElementById("numberOfSecurity").innerText =
    "Security: " + securityCount;
  document.getElementById("security").innerText = "Buy Secutriy: $5 / sec";

  document.getElementById("count").innerText =
    "Money: $" + moneyCount.toFixed(2);
}

// function to buy muscular fingers upgrade
function buyMuscularFingers() {
  if (moneyCount >= muscularFingerCost) {
    muscularCount += 1;
    moneyCount -= muscularFingerCost;
    muscularFingerCost += 0.1 * muscularFingerCost;
  }
}

// function for when the user injurys the customer which causes them to lose money
function breakFinger() {
  if (muscularCount >= 5) {
    moneyCount -= 100;
    document.getElementById("brokenBack").innerText = "You broke my back!";
  }
}

// function to buy attractive assistant upgrade
function buyAttractiveAssistant() {
  if (moneyCount >= attractiveAssistantCost) {
    attractiveAssistantCount += 1;
    moneyCount -= attractiveAssistantCost;
    attractiveAssistantCost += 0.15 * attractiveAssistantCost;
  }
}

// function to buy ambidextrous upgrade
function buyAmbidextrous() {
  if (moneyCount >= AMBIDEXTROUS_COST) {
    moneyCount -= AMBIDEXTROUS_COST;
    ambidextrousValue = true;
    ambidextrousDisplay = "True";
  }
}

// function to add the passive income the user gains with upgrades
function passiveIncome() {
  moneyCount += 1 * attractiveAssistantCount;
  moneyCount += (200 * (1 - Math.pow(0.95, franchiseCount))) / (1 - 0.95);
  moneyCount -= 5 * securityCount;
}

// function to buy relocate upgrade
function buyRelocate() {
  if (moneyCount >= RELOCATE_COST) {
    moneyCount -= RELOCATE_COST;
    crimeRate *= 0.8;
    relocateCount += 1;
  }
}

// function to buy franchise upgrade
function buyFranchise() {
  if (moneyCount >= franchiseCost) {
    franchiseCount += 1;
    moneyCount -= franchiseCost;
    franchiseCost = franchiseCost + 0.1 * franchiseCost;
  }
}

// function to cause initial public offering to pop up
function initialPublicOffering() {
  if (initialPublicOfferingValue == true) {
    document.getElementById("initialPublicOfferingYes").disabled = false;
    document.getElementById("initialPublicOfferingNo").disabled = false;
    document.getElementById("initialPublicOfferingYes").hidden = false;
    document.getElementById("initialPublicOfferingNo").hidden = false;
    document.getElementById("initialPublicOfferingAlert").innerText =
      "The public is offering you money. Click Accept or Decline.";ialPublicOfferingValue = false;
  }
}

// function to accept public offering
function acceptInitialPublicOffering() {
  moneyCount += 50000;
  document.getElementById("initialPublicOfferingYes").disabled = true;
  document.getElementById("initialPublicOfferingNo").disabled = true;
  document.getElementById("initialPublicOfferingYes").hidden = true;
  document.getElementById("initialPublicOfferingNo").hidden = true;
  document.getElementById("initialPublicOfferingAlert").innerText = "";
  document.getElementById("acceptInitialPublicOffering").innerText =
    "You have accepted the Initial Public Offering";

  initialPublicOfferingValue = false;
  accept = true;
}

// function to decline public offering
function declineInitialPublicOffering() {
  document.getElementById("initialPublicOfferingNo").disabled = true;
  document.getElementById("initialPublicOfferingYes").disabled = true;
  document.getElementById("initialPublicOfferingYes").hidden = true;
  document.getElementById("initialPublicOfferingNo").hidden = true;
  document.getElementById("initialPublicOfferingAlert").innerText = "";
  decline = true;
  initialPublicOfferingValue = false;
}

// function for when the user gets robbed
function crime() {
  let crimeChance = Math.floor(Math.random() * 100) + 1;
  if (crimeChance <= crimeRate && moneyCount > 0) {
    moneyCount *= moneyPercentRobbed;
    document.getElementById("crimeAlert").innerText = "You got robbed!";
  } else {
    document.getElementById('crimeAlert').innerText = "";
  }
}

function buySecurity() {
  moneyPercentRobbed *= 1.5;
  securityCount += 1;
}

function buyRelocate() {
  if (moneyCount >= RELOCATE_COST) {
    moneyCount -= RELOCATE_COST;
    crimeRate *= 0.8;
    relocateCount += 1;
  }
}

// function to reset the crime alert message
function resetCrimeAlert() {
  document.getElementById("crimeAlert").innerText = " ";
}

// function for when the user is booted from the game by elon musk
function corporatePowerStruggle() {
  corporatePowerStruggleValue -= 1;
  if (corporatePowerStruggleValue == 0 && accept == true) {
    location.href = "elon.html";
  }
}

// function that resets the corporate power struggle timer
function resetCorporatePowerStruggle() {
  corporatePowerStruggleValue = 30;
}

// function for when the user clicks and earns money through clicks
function moneyEarned() {
  chance = Math.floor(Math.random() * 10) + 1;
  if (chance == 1 && muscularCount >= 5) {
    totalMoney -= 100;
  } else {
    document.getElementById("brokenBack").innerText = "";
    moneyCount += muscularCount * MUSCULAR_FINGER_MULIPLIER + 1;
    if (ambidextrousValue == true) {
      moneyCount += muscularCount * MUSCULAR_FINGER_MULIPLIER + 1;
    }
  }
}

// function to by security members


// function to pay security members and makes user lose 5$ per sec


// function to allow user to go back to help page
function backToHelp() {
  location.href = "help.html";
}