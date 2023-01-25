// Constant to store html element 
const MONSTER_DATA = document.getElementById("monsterInfo");

// Call start function
start();

// This is the start function which runs when user loads up the page
function start(){
    // Displays monster traversal
    displayMonsterData(imgCounter);
}

function displayMonsterData(i){
    document.getElementById("monsterInfo").innerText = monster[i] + " | " + typeOfMonster[i] + " | " + healthOfMonster[i]; 
}

// Button for next monster
document.getElementById("nextMonsterBtn").onclick = function(){
    nextMonster();
}

// Button for previous monster
document.getElementById("previousMonsterBtn").onclick = function(){
    previousMonster();
}