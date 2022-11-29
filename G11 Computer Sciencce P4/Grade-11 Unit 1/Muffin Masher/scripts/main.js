//// Need a global variable so that the count is stored permanently
// track how many muffins the user has accumulated
let muffinCount = 0;

// store the number of upgrades purchased
let siblings = 0;
let bakers = 0;

// store the cost of each upgrade
let siblingCost = 10;
let bakerCost = 100;


//// This timer calls the update function every 20ms
setInterval(update, 20);

//// This timer calls the autoClicker once every second
setInterval(autoClicker, 1000);


function autoClicker() {
    // add the number of muffins mashed by siblings
    muffinCount = muffinCount + siblings;

    // add the number of muffins mashed by bakers
    muffinCount = muffinCount + 20 * bakers;
}


function buySibling() {
    // if user has enough muffins, increase sibling count
    if (muffinCount >= siblingCost) {
        // increase siblings
        siblings = siblings + 1;
        // each sibling has a muffin cost
        muffinCount = muffinCount - siblingCost;

        // increase the cost of a sibling by 20 each time
        siblingCost = siblingCost + 20;
    }
}

function updateUpgrades() {
    document.getElementById('upgrades').innerText = "Siblings: " + siblings;
}


function update() {
    // enable the Buy Sibling when the user has enough muffins
    if (muffinCount >= siblingCost) {
        document.getElementById('siblingButton').disabled = false;
    }
    // disable the Buy Sibling button when the user does not have enough
    else {
        document.getElementById('siblingButton').disabled = true;
    }

    // enables the Buy Baker button if user has enough muffins
    if (muffinCount >= 100) {
        document.getElementById('bakerButton').disabled = false;
    }
    //// Alternative/Advanced way to do the if statement
    // document.getElementById('bakerButton').disabled = (muffinCount < bakerCost);


    // update to the user interface
    updateUpgrades();
    //// get the h1 element to show the new muffin count
    document.getElementById('count').innerText = muffinCount;
}

function buyBaker(){
    if (muffinCount >= baZDkerCost) {
        bakers = bakers +1
        muffinCount = muffinCount - bakerCost;
    
        bakerCost = bakerCost + 200;
    }
   
}

function muffinClicked() {
    // increase the muffin count
    muffinCount = muffinCount + 1;
}