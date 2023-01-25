// Stores the html element into a constant that is used by all html and javascript files
const DISPLAY_MONSTER_DATA = document.getElementById("monsterInformation");

// Stores all the local storage arrays into a variable to be used by all html and javascript files
let monster = JSON.parse(localStorage.getItem("monsters"));

let typeOfMonster = JSON.parse(localStorage.getItem("type"));

let healthOfMonster = JSON.parse(localStorage.getItem("health"));

// Variable used to keep count of the array traversal index to display 
let imgCounter = 0;

// This function displays the monster data with the parameter i which is a number
function displayMonsterData(i){
    document.getElementById("monsterInformation").innerText = monster[i] + " | " + typeOfMonster[i] + " | " + healthOfMonster[i]; 
}

// This function goes to the next monster in the array traversal
function nextMonster(){
    imgCounter++;
    if (imgCounter == monster.length){
        // Resets the counter when the user reaches the end of the traversal
        imgCounter = 0;
    }
    // Display updated traversal
    displayMonsterData(imgCounter);
}

// This function goes to the previous monster in the array traversal
function previousMonster(){
    imgCounter--;
    if (imgCounter < 0) {
        // Resets the counter when the user reaches the end of the traversal
        imgCounter = monster.length - 1;
    }
    // Display updated traversal
    displayMonsterData(imgCounter );
}

// Checks if the user has hit the refresh button in the tab
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    // Removes all items in local storage 
    localStorage.removeItem("monsters");
    localStorage.removeItem("health");
    localStorage.removeItem("type");
    // Redirects user to login page
    location.href = "index.html";
}

// Button to redirect user to login page while in another page
document.getElementById("logOutBtn").onclick = function() {
    location.href = "index.html";
}