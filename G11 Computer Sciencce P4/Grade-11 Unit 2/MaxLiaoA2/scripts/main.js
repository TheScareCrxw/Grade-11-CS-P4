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

const WORDLIST = ["He", ""]

// Vaeriables used to store arrays for game

let characters = new Array(NUMBER_OF_CHARACTERS);
let characterImgFileName = new Array(NUMBER_OF_CHARACTERS);
let health = new Array(NUMBER_OF_CHARACTERS);
let normalAttackPower = new Array(NUMBER_OF_CHARACTERS);
let specialAttackPower = new Array(NUMBER_OF_CHARACTERS);
let healPower = new Array(NUMBER_OF_CHARACTERS);


let currentIndex = 0;

let oppositeIndex;

let characterNumber = 1;


start();

function start() {
    createCharacters();
    displayCharacter(currentIndex);
    showCurrentImage();
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

function displayCharacter(index) {
    P_CHARACTER_LIST.innerText = characters[index];
    showCurrentImage();
    P_CHARACTER_STATS.innerText = "Health: " + health[index] + "\n\n" + "Normal Attack Power: " + normalAttackPower[index] + "\n\n" + "Special Attack Power: " + specialAttackPower[index] + "\n\n" + "Heal Power: " +  healPower[index];
}

function nextCharacter() {
    currentIndex += 1;
    if (currentIndex == characters.length) {
        currentIndex = 0;
    }
    displayCharacter(currentIndex);
}

function previousCharacter() {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = 1;
    }
    displayCharacter(currentIndex);
}

function selectCharacter() {
    location.href="game.html";
    if (currentIndex == 0) {
        oppositeIndex = 1
    }
    else {
        oppositeIndex = 0
    }
    window.localStorage.setItem('oppositeCharacter', oppositeIndex);
    window.localStorage.setItem('selectedCharacter', currentIndex);
}

