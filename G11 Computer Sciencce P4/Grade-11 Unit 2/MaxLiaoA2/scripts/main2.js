/*
// Constants for indexs and array lists 
const HUMAN = 0;
const COMPUTER = 1;


// Constant used to store html elements 

const P_CHARACTER_LIST = document.getElementById("characterList");
const P_CHARACTER_STATS = document.getElementById("statsDisplay");
const IMG_TAG = document.getElementById("characterImg");
const SELECTED_IMG_HUMAN = document.getElementById("selectedCharacterImageHuman");
const SELECTED_IMG_COMPUTER = document.getElementById("selectedCharacterImageComputer");
const SELECTED_CHARACTER_LIST = document.getElementById("selectedCharacterList");
const COMPUTER_CHARACTER_LIST = document.getElementById("computerCharacterList");

const WORDLIST = ["He", ""]

let characters = new Array(NUMBER_OF_CHARACTERS);
let characterImgFileName = new Array(NUMBER_OF_CHARACTERS);
let maximunHealth = new Array(NUMBER_OF_CHARACTERS);
let normalAttackPower = new Array(NUMBER_OF_CHARACTERS);
let specialAttackPower = new Array(NUMBER_OF_CHARACTERS);

*/

let selectedCharacter = window.localStorage.getItem("selectedCharacter")



start();

function start() {
    createCharacters();
    selectedElementsHuman(selectedCharacter);
    selectedElementsComputer();
}

function hideElements() {
    
}

function createCharacters() {

    characters[HUMAN] = "Zer";
    characterImgFileName[HUMAN] = "Character2.gif";
    maximunHealth[HUMAN] = 260 ;
    normalAttackPower[HUMAN] = 6;
    specialAttackPower[HUMAN] = 63;
    
    characters[COMPUTER] = "Loz";
    characterImgFileName[COMPUTER] = "Character1.gif";
    maximunHealth[COMPUTER] = 235 ;
    normalAttackPower[COMPUTER] = 8;
    specialAttackPower[COMPUTER] = 70;
}

function selectedElementsComputer() {
    if (selectedCharacter == 0) {
        SELECTED_IMG_COMPUTER.src = characterImgFileName[1];
        COMPUTER_CHARACTER_LIST.innerText = "Health: " + maximunHealth[1] + "\n\n" + "Normal Attack Power: " + normalAttackPower[1] + "\n\n" + "Special Attack Power: " + specialAttackPower[1];

    }
    else {
        SELECTED_IMG_COMPUTER.src = characterImgFileName[0];
        COMPUTER_CHARACTER_LIST.innerText = "Health: " + maximunHealth[0] + "\n\n" + "Normal Attack Power: " + normalAttackPower[0] + "\n\n" + "Special Attack Power: " + specialAttackPower[0];
    }
}

function selectedElementsHuman(chosen) {
    SELECTED_IMG_HUMAN.src = characterImgFileName[chosen];
    SELECTED_CHARACTER_LIST.innerText = "Health: " + maximunHealth[chosen] + "\n\n" + "Normal Attack Power: " + normalAttackPower[chosen] + "\n\n" + "Special Attack Power: " + specialAttackPower[chosen];
    selectedElementsComputer();
}

