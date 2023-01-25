
// Button for next monster in the array traversal
document.getElementById("nextMonsterBtn").onclick = function(){
    nextMonster();
}

// Button for previous monster in the array traversal
document.getElementById("previousMonsterBtn").onclick = function(){
    previousMonster();
}

// Button for searching a monsters type
document.getElementById("monsterSearchBtn2").onclick = function() {
    userInput = SEARCH_MONSTER.value;
    monsterSearch(userInput, typeOfMonster);
}

// Button for partial searching a monsters name
document.getElementById("monsterPartialSearchBtn").onclick = function(){
    partialMonsterSearch(userInput);    
}

// Button for lowest health search
document.getElementById("lowestHealth").onclick = function(){
    findLowestHealth();
}

// Function for partial monster search
function partialMonsterSearch(partialMonster){
    // Resets the monster that are displayed
    DISPLAY_MONSTER_DATA.innerText = "";
    // For loop for partial search
    for(i = 0; i < monster.length; i++){
        // If the monster includes the users partial search
        if(monster[i].includes(partialMonster)){
            // Display the new arrays with the partial search monster 
            DISPLAY_MONSTER_DATA.innerText += monster[i] + " | " + typeOfMonster[i] + " | " + healthOfMonster[i] + "\n";
        }
    }
    // If there are no matches for the partial search 
    if (partialMonster == "" || DISPLAY_MONSTER_DATA.innerText == ""){
        // Display no results in html
        DISPLAY_MONSTER_DATA.innerText = "No Results";
    }
}

// Function for finding the lowest health monster
function findLowestHealth(){
    // Sorts the array from lowest to highest
    insertionSortIncrease();
    // Resets the monster that are displayed
    DISPLAY_MONSTER_DATA.innerText = "";

    // Sets the first number in the array as the lowest number
    let lowestNumber = healthOfMonster[0];
    // For loop to check over the whole array 
    for (let i = 0; i < healthOfMonster.length; i++) {
        // If anther number in the array matches with the lowest number, print both
        if(healthOfMonster[i] === lowestNumber) {
            // Display both the numbers to the user
            DISPLAY_MONSTER_DATA.innerText += monster[i] + " | " + typeOfMonster[i] + " | " + healthOfMonster[i] + "\n";
        }
    }
}