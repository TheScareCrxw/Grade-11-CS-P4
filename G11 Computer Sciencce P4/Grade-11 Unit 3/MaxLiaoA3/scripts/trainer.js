// Constants used to store html elements 
const ADD_MONSTER_NAME = document.getElementById("addName");

const ADD_MONSTER_TYPE = document.getElementById("addType");

const ADD_MONSTER_HEALTH = document.getElementById("addHealth");

const SEARCH_MONSTER = document.getElementById("monsterSearch");

// Variable to store user input 
let userInput;

// Call start function
start();

// Start function 
function start(){
    displayData(monster, typeOfMonster, healthOfMonster);
}

// Displays data using 3 array parameters 
function displayData(array1, array2, array3 ){
    // Rests the inner text of the arrays shown
    DISPLAY_MONSTER_DATA.innerText = "";
    // Displays all data in the arrays
    for (counter = 0; counter < array1.length; counter++){
        DISPLAY_MONSTER_DATA.innerText += array1[counter] + " | " + array2[counter] + " | " + array3[counter] + "\n"; 
    }
}

// Button for my add monster function 
document.getElementById("addMonsterBtn").onclick = function(){      
    insertNewMonster(ADD_MONSTER_NAME.value, ADD_MONSTER_TYPE.value, ADD_MONSTER_HEALTH.value);
    exportModifiedArrays();
}

// Function to insert new monster, taking 3 parameters, the new name, the new type and the new health
function insertNewMonster(monsterName, monsterType, monsterHealth){
    // Checks if all requirements are met to add this monster
    if (isNaN(monsterHealth) == false && (monsterName != "" || monsterType != "" || monsterHealth != "")){
        // Resets the arrays shown
        DISPLAY_MONSTER_DATA.innerText = "";

        // Stores the new arrays including the new monster data 
        let newMonsterName = dataInsertion(monster, monsterName);
        let newMonsterType = dataInsertion(typeOfMonster, monsterType);
        let newMonsterHealth = dataInsertion(healthOfMonster, monsterHealth);

        // Sets the old monster array to the new monster array
        monster = newMonsterName;
        typeOfMonster = newMonsterType;
        healthOfMonster = newMonsterHealth;

        // displays the data 
        return displayData(newMonsterName, newMonsterType, newMonsterHealth);
    }
    // If the requirements are not met 
    else {
        // Displays invalid input 
        DISPLAY_MONSTER_DATA.innerText = "Invalid input!";
    }
}

// Inserts new data into an array 
function dataInsertion(array, newData){
    // Makes an array that is 1 size larger than the inputted array
    let copiedArray = new Array(array.length + 1);

    // Copies everythig from original array into copied array
    for (let i = 0; i < array.length; i++){
        copiedArray[i] = array[i];
    }
    
    // Goes backwards from array and makes a space for new data
    for (let i = copiedArray.length; i >= 1; i--){
        copiedArray[i - 1] = array[i - 2];
    }
    // Inserts new data into coppied array
    copiedArray[0] = newData;
    // Returns the copied array 
    return copiedArray;
}

// Button for my monster search name
document.getElementById("monsterSearchBtn").onclick = function(){
    userInput = SEARCH_MONSTER.value;
    monsterSearch(userInput, monster);
}

// Searched the monsters name in an array
function monsterSearch(monsterName, array){
    // Resets the arrays shown
    DISPLAY_MONSTER_DATA.innerText = "";

    // For loop to search the whole array
    for(let i = 0; i < array.length; i++){
        // If a name in the array matches with the searched name
        if(array[i] == monsterName){
            // Display monster data 
            DISPLAY_MONSTER_DATA.innerText += monster[i] + " | " + typeOfMonster[i] + " | " + healthOfMonster[i] + "\n";
        }
    }
    // If the user does not input a name or if there are no monsters with the users input
    if (monsterName == "" || DISPLAY_MONSTER_DATA.innerText == ""){
        // Display no results 
        DISPLAY_MONSTER_DATA.innerText = "No Results";
    }
}

// Button for my monser sorting from low to high
document.getElementById("monterSortLowToHighBtn").onclick = function(){
    insertionSortIncrease();
    exportModifiedArrays();
}

// Algorithm that sorts from lowest to highest
function insertionSortIncrease() {
    // Go thorugh the array starting at the second number
    for (let i = 1; i < healthOfMonster.length; i++) {
        
        // Store the current element in a temp variable
        let temp1 = healthOfMonster[i];
        let temp2 = monster[i];
        let temp3 = typeOfMonster[i];

        // Store the previous numbers index into a variable
        j = i - 1;

        // Goes through backwards through the sorted part of the array
        while (j >= 0 && Number(healthOfMonster[j]) > Number(temp1)) {
            // Shift the lager number to the right along with the rest of the arrays
            healthOfMonster[j + 1] = healthOfMonster[j];
            monster[j + 1] = monster[j];
            typeOfMonster[j + 1] = typeOfMonster[j];
            j--;
        }
        // Add the current number into the correct position along with the other arrays
        healthOfMonster[j + 1] = temp1;
        monster[j + 1] = temp2;
        typeOfMonster[j + 1] = temp3;
    }
    // Displays new arrays
    displayData(monster, typeOfMonster, healthOfMonster);
}

// Button for sorting from high to low
document.getElementById("monterSortHighToLowBtn").onclick = function(){
    insertionSortDecrease();
    exportModifiedArrays();
}

// Algorithm that sorts from highest to lowest
function insertionSortDecrease() {
    // Go thorugh the array starting at the second number
    for (let i = 1; i < healthOfMonster.length; i++) {
        // Store the current element in a temp variable
        let temp1 = healthOfMonster[i];
        let temp2 = monster[i];
        let temp3 = typeOfMonster[i];
        // Store the previous numbers index into a variable
        j = i - 1;
        // Goes through backwards through the sorted part of the array
        while (j >= 0 && Number(healthOfMonster[j]) < Number(temp1)) {
            // Shift the lower number to the right along with the rest of the arrays
            healthOfMonster[j + 1] = healthOfMonster[j];
            monster[j + 1] = monster[j];
            typeOfMonster[j + 1] = typeOfMonster[j];
            j--;
        }
        // Add the current number into the correct position along with the other arrays
        healthOfMonster[j + 1] = temp1;
        monster[j + 1] = temp2;
        typeOfMonster[j + 1] = temp3;
    }
    // Displays new arrays
    displayData(monster, typeOfMonster, healthOfMonster);
    
}

// Updates the old items in local storage 
function exportModifiedArrays(){
    localStorage.setItem("monsters", JSON.stringify(monster));
    localStorage.setItem("type", JSON.stringify(typeOfMonster));
    localStorage.setItem("health", JSON.stringify(healthOfMonster));
}