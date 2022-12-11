// Max Liao ORIGINAL


// CONSTANTS FOR HTML ELEMENTS 
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
const WORDLIST = ["he", "she","dog","toy","rob","hall","snub","wave","roof","boot","cower","tough","cheat","other","youth","ignore","breast","scrape","desire","polish","patient","equinox","confine","deliver","reactor","marriage","position","research","economist","wisecrack","modernize","psychology"]

// constants for the actions the player can choose
const ATTACK_NORMAL = 0;
const ATTACK_SPEICAL = 1;
const HEAL = 2;

// VARIABLES
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

// used to store timer loop to clear interval
let specialBtn;

// used to check if the special attack timer is on
let timer_Started = false;

// used to check if user won or lost at end of game
let win; 

// timer loop for my update function which updates every 20ms
setInterval(update, 20);



// start function for when the game initially starts
start();

// function to display everything that is needed when user runs the code
// displaying characters, creating characters, showing characters ect. 
function start() {
    
    // grabs variables in local storage and stores them into variable
    currentIndex = window.localStorage.getItem("selectedCharacter");
    computerIndex = window.localStorage.getItem("oppositeCharacter");    
    createCharacters();
    selectedElementsHuman(currentIndex);
    selectedElementsComputer(computerIndex);

    // sets timer loops for the computers automated actions 
    // automatic normal attacks  
    setInterval(normalAttack, 5000, currentIndex);

    // automatic special attacks
    setInterval(specialAttack, 15000, currentIndex);

    // automatic heals
    setInterval(heal, 10000, computerIndex);

    SPECIAL_ATTACK_BUTTON.disabled = true;

    timer_Started = true;

    specialBtn = setInterval(enableSpecialAttack,15000)
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

// displays the characters stats, image, and name to the user so that the user can choose which character to select 
function displayCharacters(index) {
    P_CHARACTER_LIST.innerText = characters[index];
    showCurrentImage();
    P_CHARACTER_STATS.innerText = "Health: " + health[index] + "\n\n" + "Normal Attack Power: " + normalAttackPower[index] + "\n\n" + "Special Attack Power: " + specialAttackPower[index] + "\n\n" + "Heal Power: " +  healPower[index];
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

    // checks if either the player or computer is dead
    gameOver();

    // checks if the textbox is empty and if there is a user action active 
    if (textBoxValueLength >= 0 && (normalAttackValue == true || specialAttackValue == true || healValue == true)) {
        
        // stores the textbox length into a variable 
        textBoxValueLength = textBoxValue.length;

        // changes correct letters display to green 
        CORRECT_DISPLAY.style.color = "green";

        // checks if a letter in the text box is equal to the letter in the random word
        // uses index of the text box to check each letter in the textbox
        if (textBoxValue[indexOfTextBox] == getStringFront(randomWord)) {
            
            // saves the amount of correct letters into a variable, used to check when  user backspaces
            savedCorrectLetters = textBoxValue.length;

            // gets the last character of the textbox and stores it 
            lastCharacter = getLastCharacter(textBoxValue);
            
            // changes the random word into the random word with the front letter removed 
            randomWord = getStringBack(randomWord); 
            
            // the correct word is equal to the random word
            correctWord = randomWord;

            // displays the correct word in green to the user 
            CORRECT_DISPLAY.innerText = correctWord;

            // add one to the index of the textbox to check the next letter of the text box
            indexOfTextBox ++;
        }

        // checks if the user has backspaced using the saved correct letters 
        // if the saved correct letters - 1 = textbox length, it indicates that the user has 
        // backspaced one of the correct letters 
        else if (savedCorrectLetters - 1 == textBoxValueLength){
            
            // adds the letter the user has deleted to the correct word
            correctWord = lastCharacter + correctWord;

            // the last character is updated 
            lastCharacter = getLastCharacter(textBoxValue);

            // the correct display is updated (with the letter deleted now)
            CORRECT_DISPLAY.innerText = correctWord;
            
            // the incorrect display is cleared 
            INCORRECT_DISPLAY.innerText = "";

            // saved correct letters is updated 
            savedCorrectLetters = textBoxValue.length;

            // updates the random word 
            randomWord = wordDisplayed.replace(wordDisplayed.replace(correctWord, ""),"");

            // removes one from the textbox index 
            indexOfTextBox --;
        }

        // if the textbox length is equal to 0 resets everything 
        else if (textBoxValueLength == 0){

            // the random word is reset to the word selected/displayed
            randomWord = wordDisplayed

            // saved letters is reset
            savedCorrectLetters = 0
            
            // index of textbox is reset
            indexOfTextBox = 0

            // the incorrect and correct displays are reset
            CORRECT_DISPLAY.innerText = "";
            INCORRECT_DISPLAY.innerText = "";
        }

        // if the user types the correct word 
        else if (textBoxValue == wordDisplayed) {
            
            // when the user uses  a normal attack 
            if (normalAttackValue == true) {

                // does a normal attack to the computer
                normalAttack(computerIndex);

                // resets the normal attack value
                normalAttackValue = false;

                // enables the heal button
                HEAL_BUTTON.disabled = false;

                // enables the special attack button if the user has not used it in 15 seconds
                if (timer_Started == true) {
                    SPECIAL_ATTACK_BUTTON.disabled = true;
                }
                else {
                    SPECIAL_ATTACK_BUTTON.disabled = false;
                }
            }

            // when the user uses heal 
            else if (healValue == true) {

                // casts a heal to the user
                heal(currentIndex);

                // resets the heal value
                healValue = false;

                // enables the normal attack button
                NORMAL_ATTACK_BUTTON.disabled = false;

                // enables the special attack button if the user has not used it in 15 seconds
                if (timer_Started == true) {
                    SPECIAL_ATTACK_BUTTON.disabled = true;
                }
                else {
                    SPECIAL_ATTACK_BUTTON.disabled = false;
                }
            }
            
            // resets the random word 
            randomWord = null;

            // clears the textbox and word displayed
            I_INPUT_TEXT.value = "";
            P_DISPLAYWORD.innerText = "";
        }

        // displays the incorrect word 
        else {

            // find the last occurance if the correct word
            lastOccurance = wordDisplayed.lastIndexOf(correctWord)

            // changes the correct letter display and replaces it with the last occurance 
            correctLetters = wordDisplayed.substring(0, lastOccurance);

            // displays the incorrect letters typed 
            INCORRECT_DISPLAY.style.color = "red";
            INCORRECT_DISPLAY.innerText = textBoxValue.replace(correctLetters, "");
        }

        // disables the buttons depending on what action is done 
        // disables all buttons other than normal attack
        if (normalAttackValue == true){
            SPECIAL_ATTACK_BUTTON.disabled = true;
            HEAL_BUTTON.disabled = true;
        }
        // disables all buttons other than special attack 
        else if (specialAttackValue == true) {
            NORMAL_ATTACK_BUTTON.disabled = true;
            HEAL_BUTTON.disabled = true;
        }
        // disables all buttons other than heal 
        else if (healValue == true){
            NORMAL_ATTACK_BUTTON.disabled = true;
            SPECIAL_ATTACK_BUTTON.disabled = true;
        }

        // checks if the user types an incorrect letter and if special attack is active
        if (INCORRECT_DISPLAY.innerText.length <= 0 && specialAttackValue == true){

            // if the user types the word reqiured to perform speical attack
            if (textBoxValue == wordDisplayed){

                // resets all of the displays 
                CORRECT_DISPLAY.innerText = "";
                INCORRECT_DISPLAY.innerText = "";
                P_DISPLAYWORD.innerText = "";
                I_INPUT_TEXT.value = "";
                
                // does a special attack 
                specialAttack(computerIndex);

                // resets the random word and the special attack value
                randomWord = null;
                specialAttackValue = false;

                // enables all buttons but speical attack
                SPECIAL_ATTACK_BUTTON.disabled = true;
                NORMAL_ATTACK_BUTTON.disabled = false;
                HEAL_BUTTON.disabled = false;

                // sets a timer for 15 seconds to enable the special attack again
                specialBtn = setInterval(enableSpecialAttack,15000)

                // variable that tells if the timer has started 
                timer_Started = true;
            }
        }

        // checks if the special attack is active and if there are any incorrect letters
        // if both of them are true execute code 
        else if(specialAttackValue == true && INCORRECT_DISPLAY.innerText.length > 0){

            // deactivates special attack
            specialAttackValue = false;

            // clears all type racer text elements
            CORRECT_DISPLAY.innerText = "";
            INCORRECT_DISPLAY.innerText = "";
            P_DISPLAYWORD.innerText = "";
            I_INPUT_TEXT.value = "";

            // disables the special attack button and enables the normal and heal button
            SPECIAL_ATTACK_BUTTON.disabled = true;
            NORMAL_ATTACK_BUTTON.disabled = false;
            HEAL_BUTTON.disabled = false;

            // sets a timer for 15 seconds to enable the special attack again
            specialBtn = setInterval(enableSpecialAttack,15000);
            
            // variable that tells if the timer has started 
            timer_Started = true;
        }
    }
}

// function to disable special attack button after 15 seconds 
function enableSpecialAttack() {
    SPECIAL_ATTACK_BUTTON.disabled = false;
    timer_Started = false;
    clearInterval(specialBtn)
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
    
    // resets the displays and textbox value
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
    if (health[computerIndex] <= 0) {
        location.href = "gameOver.html"
        window.localStorage.setItem("win","You win!")
        win = true;
        
    }
    else if (health[currentIndex] <= 0){
        location.href = "gameOver.html"
        window.localStorage.setItem("lose","You lose!")
        win = false;
    }
    window.localStorage.setItem("loseOrWin", win);
}