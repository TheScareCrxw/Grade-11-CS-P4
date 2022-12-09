// Max Liao ORIGINAL

// constants for the human and computer 
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

// constants for button ids
const NORMAL_ATTACK_BUTTON = document.getElementById("normalAttackBtn");
const SPECIAL_ATTACK_BUTTON = document.getElementById("specialAttackBtn");
const HEAL_BUTTON = document.getElementById("healBtn");

// constants for the type racer function 
const I_INPUT_TEXT = document.getElementById("textbox");
const P_DISPLAYWORD = document.getElementById("numberDisplay");
const CORRECT_DISPLAY = document.getElementById("correct");
const INCORRECT_DISPLAY = document.getElementById("wrong");

// CONSTANTS FOR GAME 
// constant for the word array list 
const WORDLIST = ["he", "she","dog","toy","rob","hall","snub","wave","roof","boot","cower","tough","cheat","other","youth","ignore","breast","scrape","desire","polish","patient","equinox","confine","deliver","reactor","marriage","position","research","economist","wisecrack","moderni2qae","psychology"]

// constants for the actions the player can choose
const ATTACK_NORMAL = 0;
const ATTACK_SPEICAL = 1;
const HEAL = 2;

// VARIABLES
// variables used to store data for the characters in the game
let characters = new Array(NUMBER_OF_CHARACTERS);
let characterImgFileName = new Array(NUMBER_OF_CHARACTERS);
let health = new Array(NUMBER_OF_CHARACTERS);
let normalAttackPower = new Array(NUMBER_OF_CHARACTERS);
let specialAttackPower = new Array(NUMBER_OF_CHARACTERS);
let healPower = new Array(NUMBER_OF_CHARACTERS);

// variables used to store the users index and the computers index 
let currentIndex = 0;
let computerIndex = 1;

// variable to store modified works and correct words
let correctWord;
let randomWord;

// index of the textbox to compare textbox letter with stringfront letter  
let indexOfTextBox = 0;

// word that is chosen and displayed to the user
let wordDisplayed;

// action values to differentiate which action was done 
let normalAttackValue;
let specialAttackValue = false;
let healValue; 

// last character of the string for when the user deletes a letter
let lastCharacter;

// stores the correct amount of letters the user has typed  
let savedCorrectLetters = 0;

// user input textbox value length
let textBoxValueLength = 0;

// find the last occurance of a string for when .replace is used
let lastOccurance;

// correct letters the user has typed into the text box
let correctLetters = 0;

// stores the users input value 
let textBoxValue = I_INPUT_TEXT.value; 

// timer loop for my update function which updates every 20ms
setInterval(update, 20);

// start function for when the game initially starts
start();

// function to display everything that is needed when user runs the code
// displaying characters, creating characters, showing characters ect. 
function start() {
    createCharacters();
    displayCharacters(currentIndex);
    showCurrentImage();
    selectedElementsHuman(currentIndex);
    selectedElementsComputer(computerIndex);
}

// function to set the values for each characters health, normal attack, special attack, and heal power
function createCharacters() {

    // stats and image for character: Zer 
    characters[HUMAN] = "Zer";
    characterImgFileName[HUMAN] = "Character2.gif";
    health[HUMAN] = 260 ;
    normalAttackPower[HUMAN] = 6;
    specialAttackPower[HUMAN] = 63;
    healPower[HUMAN] = 34;
    
    // stats and image for character: Loz 
    characters[COMPUTER] = "Loz";
    characterImgFileName[COMPUTER] = "Character1.gif";
    health[COMPUTER] = 235 ;
    normalAttackPower[COMPUTER] = 8;
    specialAttackPower[COMPUTER] = 70;
    healPower[COMPUTER] = 12;
}

// shows the current image that needs to be dispalyed when traveling through the traversal
function showCurrentImage() {
    IMG_TAG.src = characterImgFileName[currentIndex];
    IMG_TAG.width = 350;
    IMG_TAG.height = 350;
}

// displays the characters stats, image, and name to the user so that the user can choose which character to select 
function displayCharacters(index) {
    P_CHARACTER_LIST.innerText = characters[index];
    showCurrentImage();
    P_CHARACTER_STATS.innerText = "Health: " + health[index] + "\n\n" + "Normal Attack Power: " + normalAttackPower[index] + "\n\n" + "Special Attack Power: " + specialAttackPower[index] + "\n\n" + "Heal Power: " +  healPower[index];
}

// used to go to the next character in the traversal 
function nextCharacter() {
    currentIndex += 1;
    if (currentIndex == characters.length) {
        currentIndex = 0;
    }
    displayCharacters(currentIndex);
}

// used to go to the previous character in the traversal
function previousCharacter() {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = 1;
    }
    displayCharacters(currentIndex);
}

// used to display the character the player/human chooses 
function selectedElementsHuman(chosen) {
    SELECTED_IMG_HUMAN.src = characterImgFileName[chosen];
    SELECTED_CHARACTER_LIST.innerText = "Health: " + health[chosen] + "\n\n" + "Normal Attack Power: " + normalAttackPower[chosen] + "\n\n" + "Special Attack Power: " + specialAttackPower[chosen] + "\n\n" + "Heal Power: " +  healPower[chosen];
}

// used to dispaly the character that the computer has to take 
// if the player/human chooses one option the computer takes the other option
function selectedElementsComputer(chosen) {
    if (currentIndex == 0) {
        // if user chooses Zer, computer chooses Loz
        chosen = 1
        SELECTED_IMG_COMPUTER.src = characterImgFileName[chosen];
        COMPUTER_CHARACTER_LIST.innerText = "Health : " + health [chosen] + "\n\n" + "Normal Attack Power: " + normalAttackPower[chosen] + "\n\n" + "Special Attack Power: " + specialAttackPower[chosen] + "\n\n" + "Heal Power: " +  healPower[chosen];
        
    }
    else {
        // if user chooses Loz, computer chooses Zer
        chosen = 0
        SELECTED_IMG_COMPUTER.src = characterImgFileName[chosen];
        COMPUTER_CHARACTER_LIST.innerText = "Health : " + health[chosen] + "\n\n" + "Normal Attack Power: " + normalAttackPower[chosen] + "\n\n" + "Special Attack Power: " + specialAttackPower[chosen] + "\n\n" + "Heal Power: " +  healPower[chosen];
    }
}

// used to display character's stats in the game phase
// player is the index of the character 
function displayCharacter(player) {
    if (player == computerIndex) {
        COMPUTER_CHARACTER_LIST.innerText = "Health : " + health[player] + "\n\n" + "Normal Attack Power: " + normalAttackPower[player] + "\n\n" + "Special Attack Power: " + specialAttackPower[player] + "\n\n" + "Heal Power: " +  healPower[player];
    } 
    else {
        SELECTED_CHARACTER_LIST.innerText = "Health: " + health[player] + "\n\n" + "Normal Attack Power: " + normalAttackPower[player] + "\n\n" + "Special Attack Power: " + specialAttackPower[player] + "\n\n" + "Heal Power: " +  healPower[player];
    }
}



// function for when the user selects a character to play

function selectCharacter() {
    // hids elements in page 1 and reveals elements in page 2 
    document.getElementById("Page1").hidden = true;
    document.getElementById("Page2").hidden = false;

    // used to determine what index the computer will play as 
    if (currentIndex == 0) {
        computerIndex = 1
    }
    else {
        computerIndex = 0
    }
    // displays the characthers for the user and the computer 
    selectedElementsHuman(currentIndex);
    selectedElementsComputer(computerIndex);
    
    // sets timer loops for the computers automated actions 
    // automatic normal attacks  
    setInterval(normalAttack, 5000, currentIndex);

    // automatic special attacks
    setInterval(specialAttack, 15000, currentIndex);
    
    // automatic heals
    setInterval(heal, 10000, computerIndex);
}

// function to normal attack a character 
function normalAttack(playerIndex) {
    // if the parameter is equal to the current/human index it will do the computers damage 
    if (playerIndex == currentIndex) {

        // the computer will deal damage which is a random number between the base normal attack computer and 
        // the base normal attack computer * (random number between 0 and array length + 2) / 2 * 2 
        // * 2 because the computer attacks twice every 5 seconds
        health[playerIndex] -= showRandom(normalAttackPower[computerIndex], normalAttackPower[computerIndex] * (showRandom(0, WORDLIST.length) + 2) / 2) * 2;
    }

    // if the parameters is equal to the computers index it will do the players damage 
    else {

        // the human will deal damage which is a random number between the base normal attack selected and 
        // the base normal attack selected * (the index of word + 2) / 2
        health[playerIndex] -= showRandom(normalAttackPower[currentIndex], normalAttackPower[currentIndex] * (WORDLIST.indexOf(wordDisplayed) + 2) / 2);
    }

}

// function to speicla attack a character 
function specialAttack(playerIndex) {
    // if the parameter is equal to the current/human index it will do the computers damage 
    if (playerIndex == currentIndex) {

        // the computer will deal damage which is a random number between the base speical attack computer and 
        // the base special attack computer * (random number between 0 and word array length + 2) / 2 
        health[playerIndex] -= showRandom(specialAttackPower[computerIndex], specialAttackPower[computerIndex] * (showRandom(0, WORDLIST.length) + 2) / 2);
    }

    // if the parameters is equal to the computers index it will do the players damage 
    else {

        // the human will deal special attack from the base special attack to 
        // the special attack * the index of word + 2 / 2
        health[playerIndex] -= showRandom(specialAttackPower[currentIndex], specialAttackPower[currentIndex] * (WORDLIST.indexOf(wordDisplayed) + 2) / 2);
        SPECIAL_ATTACK_BUTTON.disabled = true;
    }

}

// function to heal a character 
function heal(playerIndex) {
    // if the parameter is equal to the current/human index it will heal the humans heal power 
    if (playerIndex == currentIndex) {
        // the human will gain health which is a random number from the base heal power selected to 
        // the heal power * the index of word + 2 / 2
        health[playerIndex] += showRandom(healPower[currentIndex], healPower[currentIndex] * (WORDLIST.indexOf(wordDisplayed) + 2) / 2);
    }

    // if the parameter is equal to the computer index it will heal the computers heal power 
    else {
        // the computer will gain health based on a random number between the computers heal power 
        // and the computers heal power * (random number from 0 and word array length + 2) / 2
        health[playerIndex] += showRandom(healPower[computerIndex], healPower[computerIndex] * (showRandom(0, WORDLIST.length) + 2) / 2);
    }
}

function update() {

    // stores the users input into a variable which updates every 20ms
    textBoxValue = I_INPUT_TEXT.value;

    // updates the displays for both characters every 20ms
    displayCharacter(currentIndex);
    displayCharacter(computerIndex);

    if (textBoxValueLength >= 0 && (normalAttackValue == true || specialAttackValue == true || healValue == true)) {
        textBoxValueLength = textBoxValue.length;
        CORRECT_DISPLAY.style.color = "green";

        if (textBoxValue[indexOfTextBox] == getStringFront(randomWord)) {
            savedCorrectLetters = textBoxValue.length;
            lastCharacter = getLastCharacter(textBoxValue);
            randomWord = getStringBack(randomWord); 
            correctWord = randomWord;
            CORRECT_DISPLAY.innerText = correctWord;
            indexOfTextBox ++;
        }
        else if (savedCorrectLetters - 1 == textBoxValueLength){
            correctWord = lastCharacter + correctWord
            lastCharacter = getLastCharacter(textBoxValue)
            CORRECT_DISPLAY.innerText = correctWord;
            INCORRECT_DISPLAY.innerText = "";
            savedCorrectLetters = textBoxValue.length;
            getStringFront(correctWord)
            randomWord = wordDisplayed.replace(correctWord, "")
            randomWord = wordDisplayed.replace(randomWord,"")
            indexOfTextBox -- 
        }
        else if (textBoxValueLength == 0){
            randomWord = wordDisplayed
            savedCorrectLetters = 0
            indexOfTextBox = 0
            CORRECT_DISPLAY.innerText = "";
            INCORRECT_DISPLAY.innerText = "";
        }
        else if (textBoxValue == wordDisplayed) {
            if (normalAttackValue == true) {
                normalAttack(computerIndex);
                normalAttackValue = false;
                HEAL_BUTTON.disabled = false;
                SPECIAL_ATTACK_BUTTON.disabled = false;
            }
            else if (healValue == true) {
                heal(currentIndex);
                healValue = false;
                NORMAL_ATTACK_BUTTON.disabled = false;
                SPECIAL_ATTACK_BUTTON.disabled = false;
            }
            randomWord = null;
            I_INPUT_TEXT.value = "";
            P_DISPLAYWORD.innerText = "";
        }
        else {
            lastOccurance = wordDisplayed.lastIndexOf(correctWord)
            correctLetters = wordDisplayed.substring(0, lastOccurance);
            INCORRECT_DISPLAY.style.color = "red";
            INCORRECT_DISPLAY.innerText = textBoxValue.replace(correctLetters, "");
        }



        if (normalAttackValue == true){
            SPECIAL_ATTACK_BUTTON.disabled = true;
            HEAL_BUTTON.disabled = true;
        }
        else if (specialAttackValue == true) {
            NORMAL_ATTACK_BUTTON.disabled = true;
            HEAL_BUTTON.disabled = true;
        }
        else if (healValue == true){
            NORMAL_ATTACK_BUTTON.disabled = true;
            SPECIAL_ATTACK_BUTTON.disabled = true;
        }


        
        if (INCORRECT_DISPLAY.innerText.length <= 0 && specialAttackValue == true){
            if (textBoxValue == wordDisplayed){
                CORRECT_DISPLAY.innerText = "";
                INCORRECT_DISPLAY.innerText = "";
                P_DISPLAYWORD.innerText = "";
                I_INPUT_TEXT.value = "";

                specialAttack(computerIndex);
                randomWord = null;
                specialAttackValue = false;

                SPECIAL_ATTACK_BUTTON.disabled = true;
                NORMAL_ATTACK_BUTTON.disabled = false;
                HEAL_BUTTON.disabled = false;

                setInterval(enableSpecialAttack,15000)
            }
        }
        else if(specialAttackValue == true && INCORRECT_DISPLAY.innerText.length > 0){
            specialAttackValue = false;
            CORRECT_DISPLAY.innerText = "";
            INCORRECT_DISPLAY.innerText = "";
            P_DISPLAYWORD.innerText = "";
            I_INPUT_TEXT.value = "";
            SPECIAL_ATTACK_BUTTON.disabled = true;
            NORMAL_ATTACK_BUTTON.disabled = false;
            HEAL_BUTTON.disabled = false;
        }
        gameOver();
    }
}

// function to disable special attack button after 15 seconds 
function enableSpecialAttack() {
    SPECIAL_ATTACK_BUTTON.disabled = false;
}

// shows the word that the user has to type 
function showWord(action) {
    // used to deterimine which action the user has pressed 
    if (action == ATTACK_NORMAL){
        normalAttackValue = true;
    }
    else if (action == ATTACK_SPEICAL) {
        specialAttackValue = true;
    }
    else if (action == HEAL){
        healValue = true;
    }
    // displays a random word in the array, will be modified 
    randomWord = WORDLIST[showRandom(0, WORDLIST.length - 1)];

    // the word that will be displayed 
    wordDisplayed = randomWord
    P_DISPLAYWORD.innerText = wordDisplayed;

    // resets the index of the text box 
    indexOfTextBox = 0;
    
    // resets the displays and z
    INCORRECT_DISPLAY.innerText = "";
    CORRECT_DISPLAY.innerText = "";
    I_INPUT_TEXT.value = "";

}

// function that calculates and returns a random number within a certain range
function showRandom(min, max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

// function that returns the first letter of a string removing the rest of the letters
function getStringFront(word) {
    return word.substring(0, 1);
}

// function that returns a string with the first letter removed 
function getStringBack(word) {
    return word.substring(1);
}

// function that returns the last letter of a string  
function getLastCharacter(word) {
    return word[word.length - 1];
}

// function that checks if either the computer or player has less than 0 health
// if it is, the game is over and it will open gameOver page
function gameOver() {
    if (health[computerIndex] <= 0 || health[currentIndex] <= 0){
        //location.href = "gameOver.html"
    }
}

// this function lets the user restart the game and redirects the user to the index.html 
// when redirected, the html page will load up everything again and the game will run
function restart(){
    //location.href = "index.html"
}