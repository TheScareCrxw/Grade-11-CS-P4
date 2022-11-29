
let randomNumberOneToFive1 = Math.floor(Math.random()*5+1);
let randomNumberOneToFive2 = Math.floor(Math.random()*5+1);
let randomNumberOneToFive3 = Math.floor(Math.random()*5+1);

let counter = 0;

let player1Wealth = 100;
let player2Wealth = 100;
let player3Wealth = 100;
let player4Wealth = 100;

let player1Talent = Math.floor(Math.random() * 10 + 1);
let player2Talent = Math.floor(Math.random() * 10 + 1);
let player3Talent = Math.floor(Math.random() * 10 + 1);
let player4Talent = 0;

let player1Effort = Math.floor(Math.random() * 10 + 1);
let player2Effort = Math.floor(Math.random() * 10 + 1);
let player3Effort = Math.floor(Math.random() * 10 + 1);
let player4Effort = 0;

let player1Luck =  Math.floor(Math.random() * 20) - 10;
let player2Luck =  Math.floor(Math.random() * 20) - 10;
let player3Luck =  Math.floor(Math.random() * 20) - 10;
let player4Luck =  0;
let player4Name = "";

const NUMBER_OF_PEOPLE = 4;

const DISPLAY_PEOPLE = document.getElementById("display"); 

let people = new Array(NUMBER_OF_PEOPLE);

let luck = new Array(NUMBER_OF_PEOPLE); 

let wealth = new Array(NUMBER_OF_PEOPLE); 

let talent = new Array(NUMBER_OF_PEOPLE);

let effort = new Array(NUMBER_OF_PEOPLE);

let TIMER = 0;

function start() {
    TIMER = setInterval(calculateWealth, 1500);
}


setInterval(update, 10);

function update(){
    createLife();
    displayPeople();
    if (counter >= 50) {
        clearInterval(TIMER);
    }
}

function calculateWealth(){
    player1Wealth = player1Wealth + randomNumberOneToFive1 * player1Luck + randomNumberOneToFive2 * player1Talent + randomNumberOneToFive3 * player1Effort;

    randomNumberOneToFive1 = Math.floor(Math.random()*5+1);
    randomNumberOneToFive2 = Math.floor(Math.random()*5+1);
    randomNumberOneToFive3 = Math.floor(Math.random()*5+1);

    player2Wealth = player2Wealth + randomNumberOneToFive1 * player2Luck + randomNumberOneToFive2 * player2Talent + randomNumberOneToFive3 * player2Effort;

    randomNumberOneToFive1 = Math.floor(Math.random()*5+1);
    randomNumberOneToFive2 = Math.floor(Math.random()*5+1);
    randomNumberOneToFive3 = Math.floor(Math.random()*5+1);

    player3Wealth = player3Wealth + randomNumberOneToFive1 * player3Luck + randomNumberOneToFive2 * player3Talent + randomNumberOneToFive3 * player3Effort;
    
    randomNumberOneToFive1 = Math.floor(Math.random()*5+1);
    randomNumberOneToFive2 = Math.floor(Math.random()*5+1);
    randomNumberOneToFive3 = Math.floor(Math.random()*5+1);

    player4Wealth = player4Wealth + randomNumberOneToFive1 * player4Luck + randomNumberOneToFive2 * player4Talent + randomNumberOneToFive3 * player4Effort;
    counter += 1;

}
//Wealth = wealth + random number between (0 and 5) * luck + new random number between (0 and 5) * talent + 
//another random number between (0 and 5) * effort

function createLife() {
    people[0] = "Max";
    luck[0] = player1Luck;
    wealth[0] = player1Wealth;
    talent[0] = player1Talent;
    effort[0] = player1Effort;

    people[1] = "Carson";
    luck[1] = player2Luck;
    wealth[1] = player2Wealth;
    talent[1] = player2Talent;
    effort[1] = player2Effort;

    people[2] = "Kathrine";
    luck[2] = player3Luck;
    wealth[2] = player3Wealth;
    talent[2] = player3Talent;
    effort[2] = player3Effort;

    player4Name = document.getElementById("username").value;
    player4Luck = document.getElementById("userLuck").value;
    player4Talent = document.getElementById("userTalent").value;
    player4Effort = document.getElementById("userEffort").value;
    
    if (isNaN(player4Name) == true && player4Luck <= 10 && player4Luck >=-10 && player4Talent >=1 && player4Talent <=10 && player4Effort >=1 && player4Effort <=10 ) {
        people[3] = player4Name;
        luck[3] = player4Luck;
        wealth[3] = player4Wealth;
        talent[3] = player4Talent;
        effort[3] = player4Effort;
    }


}

function displayPeople() {
    DISPLAY_PEOPLE.innerText =
    "1 " + people[0] + " -  Luck: " + luck[0] + "  Wealth: " + wealth[0] + "  Talant: " + talent[0] + "  Effort: " + effort[0] +"\n \n" +
    "2 " + people[1] + " -  Luck: " + luck[1] + "  Wealth: " + wealth[1] + "  Talant: " + talent[1] + "  Effort: " + effort[1] +"\n \n" +
    "3 " + people[2] + " -  Luck: " + luck[2] + "  Wealth: " + wealth[2] + "  Talant: " + talent[2] + "  Effort: " + effort[2] +"\n \n" +
    "4 " + people[3] + " -  Luck: " + luck[3] + "  Wealth: " + wealth[3] + "  Talant: " + talent[3] + "  Effort: " + effort[3];

}