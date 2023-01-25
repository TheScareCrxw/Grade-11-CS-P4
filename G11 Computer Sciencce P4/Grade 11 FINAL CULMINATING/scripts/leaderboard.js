const LEADERBOARD_DISPLAY = document.getElementById("leaderboard");

const LEADERBOARD_DIV = document.getElementById("leaderboardInfo");

const INPUT_INITIALS = document.getElementById("userInput");

const USER_SEARCH = document.getElementById("partialSearch");

const NAVIGATION = performance.getEntriesByType("navigation");

const USER_SCORE = document.getElementById("userScore");

let scoreCount = Number(localStorage.getItem("score"));
let leaderboard = [];
let scoreboard = [];

start();

function start(){
    LEADERBOARD_DIV.hidden = true;
    USER_SCORE.innerText = "Your Score: " + scoreCount;
    if (NAVIGATION.length > 0 && NAVIGATION[0].type === "reload") {
        removeLocalStorage();
        location.href = "snakeGame.html";

    }
    if (JSON.parse(localStorage.getItem("leaderboard")) != null){
        leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
        scoreboard = JSON.parse(localStorage.getItem("scoreboard"));
    }
}

document.getElementById("initialsBtn").onclick = function() {
    storeArrays();
}

function storeArrays() {
    let input = document.getElementById("initials").value;
    if (isNaN(input)){
        scoreboard[leaderboard.length] = scoreCount;
        leaderboard[leaderboard.length] = input;
        LEADERBOARD_DIV.hidden = false;
        INPUT_INITIALS.hidden = true;
        insertionSortDecrease()
    }
    else {
        document.getElementById("wrongText").innerText = "Please Type an Initial"
    }
}

function displayLeaderboard(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        LEADERBOARD_DISPLAY.innerText += "Name: " + array1[i] + " | " + "Score: " + array2[i] + "\n"
    }
}

// Algorithm that sorts from highest to lowest
function insertionSortDecrease() {
    // Go thorugh the array starting at the second number
    for (let i = 1; i < scoreboard.length; i++) {
        // Store the current element in a temp variable
        let temp1 = scoreboard[i];
        let temp2 = leaderboard[i];
        // Store the previous numbers index into a variable
        j = i - 1;
        // Goes through backwards through the sorted part of the array
        while (j >= 0 && Number(scoreboard[j]) < Number(temp1)) {
            // Shift the lower number to the right along with the rest of the arrays
            scoreboard[j + 1] = scoreboard[j];
            leaderboard[j + 1] = leaderboard[j];
            j--;
        }
        // Add the current number into the correct position along with the other arrays
        scoreboard[j + 1] = temp1;
        leaderboard[j + 1] = temp2;   
    }
    // Displays new arrays
    displayLeaderboard(leaderboard, scoreboard);    
}

function exportModifiedArrays(){
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    localStorage.setItem("highscore", scoreboard[0]);
}

document.getElementById("resetGame").onclick = function(){
    exportModifiedArrays()
    location.href = "snakeGame.html";
}

function removeLocalStorage(){
    localStorage.removeItem("scoreboard");
    localStorage.removeItem("leaderboard");
    localStorage.removeItem("highscore");
}

document.getElementById("resetLeaderboard").onclick = function(){
    resetLeaderboard();
}

function resetLeaderboard(){
    removeLocalStorage();
    LEADERBOARD_DISPLAY.innerHTML = "";
    leaderboard = [];
    scoreboard = [];
}

document.getElementById("partialSearchBtn").onclick = function(){
    let searchString = USER_SEARCH.value;
    partialSearch(searchString);

}

function partialSearch(string){
    let newArray = [];
    let newArray2 = []
    // Resets the monster that are displayed
    LEADERBOARD_DISPLAY.innerText = "";
    // For loop for partial search
    for(i = 0; i < leaderboard.length; i++){
        // If the monster includes the users partial search
        if(leaderboard[i].includes(string)){
            newArray.push(leaderboard[i]); 
            newArray2.push(scoreboard[i]);
            // Display the new arrays with the partial search monster 
            displayLeaderboard(newArray, newArray2);
        }
    }
    // If there are no matches for the partial search 
    if (string == "" || LEADERBOARD_DISPLAY.innerText == ""){
        // Display no results in html
        LEADERBOARD_DISPLAY.innerText = "";
        displayLeaderboard(leaderboard, scoreboard)
    }
}