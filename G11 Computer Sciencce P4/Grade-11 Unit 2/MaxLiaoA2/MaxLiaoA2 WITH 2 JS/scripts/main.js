// Max Liao ORIGINAL

const HUMAN = 0;
const COMPUTER = 1;

// constant for number of characters
const NUMBER_OF_CHARACTERS = 2;

// CONSTANTS FOR HTML ELEMENTS 
// constants for the selection page 
const P_CHARACTER_LIST = document.getElementById("characterList");
const P_CHARACTER_STATS = document.getElementById("statsDisplay");
const IMG_TAG = document.getElementById("characterImg");

// constants to display stats and pictures in game 
const SELECTED_IMG_HUMAN = document.getElementById("selectedCharacterImageHuman");
const SELECTED_IMG_COMPUTER = document.getElementById("selectedCharacterImageComputer");
const SELECTED_CHARACTER_LIST = document.getElementById("selectedCharacterList");
const COMPUTER_CHARACTER_LIST = document.getElementById("computerCharacterList");

// VARIABLES
// variables used to store data for the characters in the game
let characters = new Array(NUMBER_OF_CHARACTERS);
let characterImgFileName = new Array(NUMBER_OF_CHARACTERS);
let health = new Array(NUMBER_OF_CHARACTERS);
let normalAttackPower = new Array(NUMBER_OF_CHARACTERS);
let specialAttackPower = new Array(NUMBER_OF_CHARACTERS);
let healPower = new Array(NUMBER_OF_CHARACTERS);

// variable for the human index and the computer index 
let currentIndex = 0;
let computerIndex;

// variable used to run automatic actions computer does, chances when select character is called
let gameStart = false;

// start function to display everything 
start();

function start() {

    // gets the file name and compares it with index.html, if it is equal, run this start function 
    // window.location grabs the file name. This prevents it from running in game.html
    if (window.location.href.split(/(\\|\/)/g).pop() == "index.html"){
        createCharacters();
        displayCharacter(currentIndex);
        showCurrentImage();
    }
}

// creates the characters the user can choose as well as setting the name and stats
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

// shows the current image in the traversal
function showCurrentImage() {
    IMG_TAG.src = characterImgFileName[currentIndex];
    IMG_TAG.width = 350;
    IMG_TAG.height = 350;
}

// displays the stats for the character 
function displayCharacter(index) {
    P_CHARACTER_LIST.innerText = characters[index];
    showCurrentImage();
    P_CHARACTER_STATS.innerText = "Health: " + health[index] + "\n\n" + "Normal Attack Power: " + normalAttackPower[index] + "\n\n" + "Special Attack Power: " + specialAttackPower[index] + "\n\n" + "Heal Power: " +  healPower[index];
}

// function allows the user to travel to the next character in the traversal 
function nextCharacter() {
    currentIndex += 1;
    if (currentIndex == characters.length) {
        currentIndex = 0;
    }
    displayCharacter(currentIndex);
}

// function allows the user to travel to the previous character in the traversal 
function previousCharacter() {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = 1;
    }
    displayCharacter(currentIndex);
}

// selects the character the user wants to play as well as setting the computer character
function selectCharacter() {
    if (currentIndex == 0) {
        computerIndex = 1
    }
    else {
        computerIndex = 0
    }

    // links them to game.html 
    location.href="game.html";

    // stores variables in local storage so that other files may access the variables
    window.localStorage.setItem('oppositeCharacter', computerIndex);
    window.localStorage.setItem('selectedCharacter', currentIndex);
}

