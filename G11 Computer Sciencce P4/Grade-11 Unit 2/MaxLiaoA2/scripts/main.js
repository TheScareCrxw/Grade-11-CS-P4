// Max Liao ORIGINAL




// Constants for indexs and array lists 
const HUMAN = 0;
const COMPUTER = 1;
const NUMBER_OF_CHARACTERS = 2;

// Constant used to store html elements 

const P_CHARACTER_LIST = document.getElementById("characterList");
const P_CHARACTER_STATS = document.getElementById("statsDisplay");
const IMG_TAG = document.getElementById("characterImg");
const SELECTED_IMG = document.getElementById("selectedCharacterImage");
const SELECTED_CHARACTER_LIST = document.getElementById("selectedCharacterList");

const WORDLIST = ["He", ""]

// Vaeriables used to store arrays for game

let characters = new Array(NUMBER_OF_CHARACTERS);
let characterImgFileName = new Array(NUMBER_OF_CHARACTERS);
let characterImgAlt = new Array(NUMBER_OF_CHARACTERS);
let maximunHealth = new Array(NUMBER_OF_CHARACTERS);
let normalAttackPower = new Array(NUMBER_OF_CHARACTERS);
let specialAttackPower = new Array(NUMBER_OF_CHARACTERS);



let currentIndex = 0;

let characterNumber = 1;

let selectedCharacter = 0;

start();

function start() {
    createCharacters();
    printCharacters();
    showCurrentImage();
    selectedElements();
}

function createCharacters() {

    characters[HUMAN] = "Zer";
    characterImgFileName[HUMAN] = "Character2.gif";
    characterImgAlt[HUMAN] = "Zer Character";
    maximunHealth[HUMAN] = 260 ;
    normalAttackPower[HUMAN] = 6;
    specialAttackPower[HUMAN] = 63;
    
    
    characters[COMPUTER] = "Loz";
    characterImgFileName[COMPUTER] = "Character1.gif";
    characterImgAlt[COMPUTER] = "Loz Character";
    maximunHealth[COMPUTER] = 235 ;
    normalAttackPower[COMPUTER] = 8;
    specialAttackPower[COMPUTER] = 70;
}

function showCurrentImage() {

    IMG_TAG.src = characterImgFileName[currentIndex];
    IMG_TAG.width = 350;
    IMG_TAG.height = 350;
}

function printCharacters() {
    P_CHARACTER_LIST.innerText = characters[currentIndex];
    showCurrentImage();
    P_CHARACTER_STATS.innerText = "Health: " + maximunHealth[currentIndex] + "\n\n" + "Normal Attack Power: " + normalAttackPower[currentIndex] + "\n\n" + "Special Attack Power: " + specialAttackPower[currentIndex];
    
}

function nextCharacter() {
    currentIndex += 1;
    if (currentIndex == characters.length) {
        currentIndex = 0;
    }
    printCharacters();
    selectedElements();

}

function previousCharacter() {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = 1;
    }
    printCharacters();
    selectedElements();

}

function selectedElements() {
    SELECTED_IMG.src = characterImgFileName[currentIndex];
    SELECTED_CHARACTER_LIST.innerText = "Health: " + maximunHealth[currentIndex] + "\n\n" + "Normal Attack Power: " + normalAttackPower[currentIndex] + "\n\n" + "Special Attack Power: " + specialAttackPower[currentIndex];

}

function selectCharacter() {
    selectedCharacter = currentIndex;
    document.getElementById("Page1").hidden = true;
    document.getElementById("Page2").hidden = false;

    showCurrentImage();
    printCharacters();
}











// CODE FOR SECOND PAGE WHERE PLAYER ACTUALLY PLAYS THE GAME
