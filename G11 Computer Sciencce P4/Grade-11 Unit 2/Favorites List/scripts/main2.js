

let numberOfVanillaSold = 0;
let numberOfBlueberrySold = 0;
let numberOfChocolateSold = 0;

const NUMBER_OF_ICE_CREAMS = 3;

let iceCreams = new Array(NUMBER_OF_ICE_CREAMS);

let cost = new Array(NUMBER_OF_ICE_CREAMS);

let sold = new Array(NUMBER_OF_ICE_CREAMS);


const P_PRICE_OF_VANILLA = 4;
const P_PRICE_OF_BLUEBERRY = 2.50;
const P_PRICE_OF_CHOCOLATE = 3;

const ICE_CREAM_LIST= document.getElementById("iceCreamShop");

setInterval(start, 10);

function start(){
    createiceCreams();
    displayiceCreams();
    totalProfit();
}

function buyVanillaIceCream() {
    numberOfVanillaSold += 1;
}

function buyBlueberryIceCream() {
    numberOfBlueberrySold += 1;
}

function buyChocolateIceCream() {
    numberOfChocolateSold +=1;
}

function totalProfit() {
    let sum = 0;

    sum = numberOfBlueberrySold * P_PRICE_OF_BLUEBERRY + numberOfChocolateSold * P_PRICE_OF_CHOCOLATE + numberOfVanillaSold * P_PRICE_OF_VANILLA;
    document.getElementById("profit").innerText = "Total Profit: $" + sum;

}


function createiceCreams() {
    iceCreams[0] = "Vanilla";
    cost[0] = P_PRICE_OF_VANILLA;
    sold[0] = numberOfVanillaSold;


    iceCreams[1] = "Blueberry";
    cost[1] = P_PRICE_OF_BLUEBERRY;
    sold[1] = numberOfBlueberrySold;


    iceCreams[2] = "Chocolate";
    cost[2] = P_PRICE_OF_CHOCOLATE;
    sold[2] = numberOfChocolateSold;
}

function displayiceCreams() {
    ICE_CREAM_LIST.innerText =
        "1 " + iceCreams[0] + " Price: $" + cost[0] + " Number Sold: " + sold[0] +"\n" +
        "2 " + iceCreams[1] + " Price: $" + cost[1] + " Number Sold: " + sold[1] +"\n" +
        "3 " + iceCreams[2] + " Price: $" + cost[2] + " Number Sold: " + sold[2];

}