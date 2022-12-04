// Max Liao ORIGINAL

// Constants for indexs and array lists 
const HUMAN = 0;
const COMPUTER = 1;
const NUMBER_OF_CHARACTERS = 2;

// Constant used to store html elements 

const P_CHARACTER_LIST = document.getElementById("characterList");
const P_CHARACTER_STATS = document.getElementById("statsDisplay");
const IMG_TAG = document.getElementById("characterImg");
const SELECTED_IMG_HUMAN = document.getElementById("selectedCharacterImageHuman");
const SELECTED_IMG_COMPUTER = document.getElementById("selectedCharacterImageComputer");
const SELECTED_CHARACTER_LIST = document.getElementById("selectedCharacterList");
const COMPUTER_CHARACTER_LIST = document.getElementById("computerCharacterList");
const I_INPUT_TEXT = document.getElementById("textbox");
const P_NUMBER = document.getElementById("numberDisplay");

const WORDLIST = ["he", "she","dog","toy","rob","hall","snub","wave","roof","boot","cower","tough","cheat","other","youth","ignore","breast","scrape","desire","polish","patient","equinox","confine","deliver","reactor","marriage","position","research","economist","wisecrack","modernize","psychology"]

// Vaeriables used to store arrays for game

let characters = new Array(NUMBER_OF_CHARACTERS);
let characterImgFileName = new Array(NUMBER_OF_CHARACTERS);
let health = new Array(NUMBER_OF_CHARACTERS);
let normalAttackPower = new Array(NUMBER_OF_CHARACTERS);
let specialAttackPower = new Array(NUMBER_OF_CHARACTERS);
let healPower = new Array(NUMBER_OF_CHARACTERS);

let currentIndex = 0;

let oppositeIndex = 1;

let characterNumber = 1;

let correctWord;
let incorrectWord;
let randomWord;
let randomNumber;
let enableAA = false;

let firstChar;
let x = 0;
let z = false;
let h;


let textBoxValue = I_INPUT_TEXT.value; 

let attack = false;


setInterval(update, 20);

setInterval(autoAttackNormal, 5000);

setInterval(autoAttackSpecial, 15000);

setInterval(autoHeal, 10000);

setInterval(runwheninput, 10);

//setInterval(showRandom, 30000, 0, WORDLIST.length);

start();

function start() {
    createCharacters();
    displayCharacters(currentIndex);
    showCurrentImage();
    selectedElementsHuman(currentIndex);
    selectedElementsComputer(oppositeIndex);
}

function createCharacters() {
    characters[HUMAN] = "Zer";
    characterImgFileName[HUMAN] = "Character2.gif";
    health[HUMAN] = 260 ;
    normalAttackPower[HUMAN] = 6;
    specialAttackPower[HUMAN] = 63;
    healPower[HUMAN] = 34;
    
    characters[COMPUTER] = "Loz";
    characterImgFileName[COMPUTER] = "Character1.gif";
    health[COMPUTER] = 235 ;
    normalAttackPower[COMPUTER] = 8;
    specialAttackPower[COMPUTER] = 70;
    healPower[COMPUTER] = 12;

}

function showCurrentImage() {
    IMG_TAG.src = characterImgFileName[currentIndex];
    IMG_TAG.width = 350;
    IMG_TAG.height = 350;
}

function displayCharacters(index) {
    P_CHARACTER_LIST.innerText = characters[index];
    showCurrentImage();
    P_CHARACTER_STATS.innerText = "Health: " + health[index] + "\n\n" + "Normal Attack Power: " + normalAttackPower[index] + "\n\n" + "Special Attack Power: " + specialAttackPower[index] + "\n\n" + "Heal Power: " +  healPower[index];
}

function nextCharacter() {
    currentIndex += 1;
    if (currentIndex == characters.length) {
        currentIndex = 0;
    }
    displayCharacters(currentIndex);
}

function previousCharacter() {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = 1;
    }
    displayCharacters(currentIndex);
}


function selectedElementsHuman(chosen) {
    SELECTED_IMG_HUMAN.src = characterImgFileName[chosen];
    SELECTED_CHARACTER_LIST.innerText = "Health: " + health[chosen] + "\n\n" + "Normal Attack Power: " + normalAttackPower[chosen] + "\n\n" + "Special Attack Power: " + specialAttackPower[chosen] + "\n\n" + "Heal Power: " +  healPower[chosen];
}

function selectedElementsComputer(chosen) {
    if (currentIndex == 0) {
        chosen = 1
        SELECTED_IMG_COMPUTER.src = characterImgFileName[chosen];
        COMPUTER_CHARACTER_LIST.innerText = "Health : " + health [chosen] + "\n\n" + "Normal Attack Power: " + normalAttackPower[chosen] + "\n\n" + "Special Attack Power: " + specialAttackPower[chosen] + "\n\n" + "Heal Power: " +  healPower[chosen];
        
    }
    else {
        chosen = 0
        SELECTED_IMG_COMPUTER.src = characterImgFileName[chosen];
        COMPUTER_CHARACTER_LIST.innerText = "Health : " + health[chosen] + "\n\n" + "Normal Attack Power: " + normalAttackPower[chosen] + "\n\n" + "Special Attack Power: " + specialAttackPower[chosen] + "\n\n" + "Heal Power: " +  healPower[chosen];
    }
}


function displayCharacter(player) {
    if (player == oppositeIndex) {
        COMPUTER_CHARACTER_LIST.innerText = "Health : " + health[player] + "\n\n" + "Normal Attack Power: " + normalAttackPower[player] + "\n\n" + "Special Attack Power: " + specialAttackPower[player] + "\n\n" + "Heal Power: " +  healPower[player];
    } 
    else {
        SELECTED_CHARACTER_LIST.innerText = "Health: " + health[player] + "\n\n" + "Normal Attack Power: " + normalAttackPower[player] + "\n\n" + "Special Attack Power: " + specialAttackPower[player] + "\n\n" + "Heal Power: " +  healPower[player];
    }
}

function autoAttackNormal() {
    if (enableAA == true) {
        normalAttack(currentIndex);
        displayCharacter(currentIndex);
    }
}

function autoAttackSpecial() {
    if (enableAA == true) {
        specialAttack(currentIndex);
        displayCharacter(currentIndex);
    }
}
 
function autoHeal() {
    if (enableAA == true) {
        heal(oppositeIndex);
        displayCharacter(oppositeIndex);
    }
}

function selectCharacter() {
    document.getElementById("Page1").hidden = true;
    document.getElementById("Page2").hidden = false;
    if (currentIndex == 0) {
        oppositeIndex = 1
    }
    else {
        oppositeIndex = 0
    }
    selectedElementsHuman(currentIndex);
    selectedElementsComputer(oppositeIndex);
    enableAA = true;
}

function normalAttack(playerIndex) {
    if (playerIndex == currentIndex) {
        health[playerIndex] -= normalAttackPower[oppositeIndex];
        

    }
    else {
        health[playerIndex] -= normalAttackPower[currentIndex];
        showWord();

    }
    displayCharacter(playerIndex);
}

function specialAttack(playerIndex) {
    if (playerIndex == currentIndex) {
        health[playerIndex] -= specialAttackPower[oppositeIndex];

    }
    else {
        health[playerIndex] -= normalAttackPower[currentIndex];
        showWord();        
    }
    displayCharacter(playerIndex);
}

function heal(playerIndex) {
    if (playerIndex == currentIndex) {
        health[playerIndex] += healPower[currentIndex];
        showWord();

    }
    else {
        health[playerIndex] += healPower[oppositeIndex];

    }
    displayCharacter(playerIndex);
}



function update() {
    textBoxValue = I_INPUT_TEXT.value;

    if (textBoxValue > 0 ){
        textChecker()
    }
    
    
        
    //wordSelected = WORDLIST[randomNumber].slice(0, textBoxValue.length);
    //incorrectWord = textBoxValue.replace(document.getElementById("correct").value,"d");
    //incorrectWord = incorrectWord.replace(document.getElementById("correct"), "");
    //incorrectWord = WORDLIST[randomNumber].replace(0, toString(correctWord));
}

function showWord() {
    randomWord = WORDLIST[showRandom(0, WORDLIST.length)];
    P_NUMBER.innerText = randomWord;
    x = 0;
    h = randomWord

    // attack = true;
}

function showRandom(min, max){
    randomNumber = Math.floor(Math.random() * max-min);
    return randomNumber;
}

function getStringFront(word) {
    firstChar = word.substring(0,1);
    return firstChar;
}

function getStringBack(userInput) {

}


function runwheninput() {
    if (z == true) {
        textChecker();
    }
}

function input() {
    z = true;
}


function textChecker() {

    // document.getElementById("firstChara").innerText = getStringFront(randomWord);
    if (textBoxValue[x] == getStringFront(randomWord)) {
        
        randomWord = randomWord.slice(1);
        correctWord = randomWord;
        document.getElementById("correct").style.color = "green";
        document.getElementById("correct").innerText = randomWord;
        
        
        x ++
        
    }
    else if (textBoxValue == h) {
        I_INPUT_TEXT.value = "";
        P_NUMBER.innerText = "";
        normalAttack(oppositeIndex);
    }

    /*
    if (correctWord == wordSelected && textBoxValue.length != 0 && attack == true) {
        document.getElementById("correct").style.color = "green";
        document.getElementById("correct").innerText = correctWord;
        document.getElementById("wrong").innerText = "";

        if (correctWord == WORDLIST[randomNumber] && attack == true){ 
            normalAttack(oppositeIndex);
            document.getElementById("numberDisplay").innerText = "";
            document.getElementById("textbox").value = "";
            attack = false;
        }
    }

    else if (textBoxValue.slice(0,textBoxValue.length - 1) == WORDLIST[randomNumber].slice(0,textBoxValue.length - 1)){

    }
    else if (textBoxValue == 0) {
        document.getElementById("correct").innerText = "";
        document.getElementById("wrong").innerText = "";

    }
*/
}
 

// CODE FOR SECOND PAGE WHERE PLAYER ACTUALLY PLAYS THE GAME
