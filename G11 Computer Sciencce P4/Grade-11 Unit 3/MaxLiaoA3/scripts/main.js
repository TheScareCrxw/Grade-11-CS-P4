
// Constants used to store html elements
const USERNAME = document.getElementById("username");

const PASSWORD = document.getElementById("password");

// Constants used to store login elements
const LOGIN_USERNAMES = ["guest", "trainer", "professor"];

const LOGIN_PASSWORDS = ["monster", "pass", "4321"];

// Variables to set starting arrays
let monsters = ["stickman1", "stickman2", "stickman3", "stickman4", "stickman5"];

let typeOfMonsters = ["stick", "bigstick", "stick", "stick", "bigstick"];

let healthOfMonsters = ["100", "200", "300", "200", "100"];

// Checks if the user has hit the refresh button in the tab
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    // Removes all items in local storage 
    localStorage.removeItem("monsters");
    localStorage.removeItem("health");
    localStorage.removeItem("type");
    // Redirects user to login page
    location.href = "index.html";
}

// Login button
document.getElementById("loginBtn").onclick = function(){
    loginCheck();
}

// Checks if the user has inputed the correct login information
function loginCheck(){
    // Stores users inputs into variables
    let inputtedUsername = USERNAME.value; 

    let inputtedPassword = PASSWORD.value;

    // Checks if the user has inputted correct login information for any of the profiles
    // Guest login check
    if(inputtedUsername == LOGIN_USERNAMES[0] && inputtedPassword == LOGIN_PASSWORDS[0]){
        location.href = "guest.html";
    }
    // Trainer login check
    else if(inputtedUsername == LOGIN_USERNAMES[1] && inputtedPassword == LOGIN_PASSWORDS[1]){
        location.href = "trainer.html";
    }
    // Professor
    else if(inputtedUsername == LOGIN_USERNAMES[2] && inputtedPassword == LOGIN_PASSWORDS[2]){
        location.href = "professor.html";
    }
     
    // Checks if the items are already in local storage
    if (JSON.parse(localStorage.getItem("monsters")) == null) { 
        // If the item is not in the local storage, put all the arrays into the local storage
        localStorage.setItem("monsters", JSON.stringify(monsters));
        localStorage.setItem("type", JSON.stringify(typeOfMonsters));
        localStorage.setItem("health", JSON.stringify(healthOfMonsters));
    }
}