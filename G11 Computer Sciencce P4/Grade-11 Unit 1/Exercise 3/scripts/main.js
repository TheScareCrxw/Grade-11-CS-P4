// Variables for getting the users input and storing it 

let firstName;
let secret;
let favorite;

// This function saves all the inputs that the user makes and puts it into the variables

function load(){
    firstName = document.getElementById("getFirstName").value;
    document.getElementById("getFirstName").value = "";
    
    secret = document.getElementById("getSecret").value;
    document.getElementById("getSecret").value = "";

    favorite = document.getElementById("getFavorite").value;
    document.getElementById("getFavorite").value = "";

}

// This function loads all of the users inputs into the string to create a story
// It also puts everything into an output variable which HTML prints into the web page

function generate(){
    load()
    paragraph = document.getElementById('output');
    paragraph.innerText = firstName + " walked into a store. " + firstName + " was looking to buy a " + favorite + " as a present for their secret crush. But before buying anything, " + firstName + " started to shiver. What if " + firstName + "'s secret crush discovered their deepest, darkest secret? " + secret + ".";
}