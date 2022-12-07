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
const CORRECT_DISPLAY = document.getElementById("correct");
const INCORRECT_DISPLAY = document.getElementById("wrong");

const WORDLIST = ["he", "she","dog","toy","rob","hall","snub","wave","roof","boot","cower","tough","cheat","other","youth","ignore","breast","scrape","desire","polish","patient","equinox","confine","deliver","reactor","marriage","position","research","economist","wisecrack","modernize","psychology"]

const ATTACK_NORMAL = 0;
const ATTACK_SPEICAL = 1;

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
//let enableAA = false;

let firstChar;
let indexOfTextBox = 0;
let z = false;
let wordDisplayed;
let normalAttackValue;
let specialAttackValue;
let healValue; 
let attackValue;


let textBoxValue = I_INPUT_TEXT.value; 

let attack = false;


setInterval(update, 20);



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
    //if (enableAA == true) {
    normalAttack(currentIndex);
    normalAttack(currentIndex);
    displayCharacter(currentIndex);
    //}
}

function autoAttackSpecial() {
    //if (enableAA == true) {
    specialAttack(currentIndex);
    displayCharacter(currentIndex);
    //}
}
 
function autoHeal() {
    //if (enableAA == true) {
    heal(oppositeIndex);
    displayCharacter(oppositeIndex);
    //}
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
    //enableAA = true;
    
    setInterval(autoAttackNormal, 5000);

    setInterval(autoAttackSpecial, 15000);

    setInterval(autoHeal, 10000);
}

function normalAttack(playerIndex) {
    if (playerIndex == currentIndex) {
        health[playerIndex] -= showRandom(normalAttackPower[oppositeIndex], normalAttackPower[oppositeIndex] * (WORDLIST.indexOf(wordDisplayed) + 2) / 2);
    }
    else {
        health[playerIndex] -= showRandom(normalAttackPower[currentIndex], normalAttackPower[currentIndex] * (showRandom(0, WORDLIST.length) + 2) / 2);
    }
    displayCharacter(playerIndex);
}

function specialAttack(playerIndex) {
    if (playerIndex == currentIndex) {
        health[playerIndex] -= showRandom(specialAttackPower[oppositeIndex], specialAttackPower[oppositeIndex] * (WORDLIST.indexOf(wordDisplayed) + 2) / 2);
    }
    else {
        health[playerIndex] -= showRandom(specialAttackPower[currentIndex], specialAttackPower[currentIndex] * (showRandom(0, WORDLIST.length) + 2) / 2);  
    }
    displayCharacter(playerIndex);
}

function heal(playerIndex) {
    if (playerIndex == currentIndex) {
        health[playerIndex] += showRandom(healPower[currentIndex], healPower[currentIndex] * (WORDLIST.indexOf(wordDisplayed) + 2) / 2);
    }
    else {
        health[playerIndex] += showRandom(healPower[oppositeIndex], healPower[oppositeIndex] * (showRandom(0, WORDLIST.length) + 2) / 2);
    }
    displayCharacter(playerIndex);
}

function update() {
    textBoxValue = I_INPUT_TEXT.value;
    if (textBoxValue.length > 0 && (normalAttackValue == true || specialAttackValue == true || healValue == true)) {
        textChecker();
    }
    if (textBoxValue.length == 0) {
        CORRECT_DISPLAY.innerText = "";
        INCORRECT_DISPLAY.innerText = "";
    }
    gameOver();
}

function showWord(action) {
    randomWord = WORDLIST[showRandom(0, WORDLIST.length - 1)];
    wordDisplayed = randomWord
    P_NUMBER.innerText = wordDisplayed;
    indexOfTextBox = 0;
    INCORRECT_DISPLAY.innerText = "";
    CORRECT_DISPLAY.innerText = "";
    I_INPUT_TEXT.value = "";
    if (action == ATTACK_NORMAL){
        normalAttackValue = true;
    }
    else if (action == ATTACK_SPEICAL) {
        specialAttackValue = true;
    }
    else {
        healValue = true;
    }
}

function showRandom(min, max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

function getStringFront(word) {
    return word.substring(0,1);
}

function getStringBack(word) {
    return word.substring(1);
}

function getLastCharacter(word) {
    return word[word.length - 1];
}





let x;

let a = 0;
let b = 0;
let lastIndex;
let replace;
function textChecker() {
    b = textBoxValue.length
    if (textBoxValue[indexOfTextBox] == getStringFront(randomWord)) {
        a = textBoxValue.length;
        x = getLastCharacter(textBoxValue)
        randomWord = getStringBack(randomWord); 
        correctWord = randomWord;
        CORRECT_DISPLAY.style.color = "green";
        CORRECT_DISPLAY.innerText = correctWord;
        
        indexOfTextBox ++
    }
    else if (a - 1 == b){
        correctWord = x + correctWord
        x = getLastCharacter(textBoxValue)
        CORRECT_DISPLAY.style.color = "green";
        CORRECT_DISPLAY.innerText = correctWord;
        INCORRECT_DISPLAY.innerText = "";
        a = textBoxValue.length;
        getStringFront(correctWord)
        randomWord = wordDisplayed.replace(correctWord, "")
        randomWord = wordDisplayed.replace(randomWord,"")
        indexOfTextBox -- 
    }
    else if (textBoxValue == wordDisplayed) {
        I_INPUT_TEXT.value = "";
        P_NUMBER.innerText = "";
        if (normalAttackValue == true) {
            normalAttack(oppositeIndex);
            randomWord = null;
            normalAttackValue = false;
        }
        else if (specialAttackValue == true){
            specialAttack(oppositeIndex);
            randomWord = null;
            specialAttackValue = false;
        }
        else if (healValue == true) {
            heal(currentIndex);
            randomWord = null;
            healValue = false;
        }
        
    }

    else if (textBoxValue[textBoxValue.length - 1] != getStringBack(textBoxValue)){
        lastIndex = wordDisplayed.lastIndexOf(correctWord)
        replace = wordDisplayed.substring(0, lastIndex);
        INCORRECT_DISPLAY.style.color = "red";
        INCORRECT_DISPLAY.innerText = textBoxValue.replace(replace, "");

    }
}



function gameOver() {
    if (health[oppositeIndex] <= 0 || health[currentIndex] <= 0){
        //location.href = "gameOver.html"
       
    }
}

function restart(){
    window.location.reload();
}