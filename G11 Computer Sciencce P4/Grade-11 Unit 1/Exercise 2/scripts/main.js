// All of my variables needed for my inputs

let firstName;
let lastName;
let age;
let adress;
let phoneNumber;
let email;
let nickname;
let notes;



// Function saves all of my inputs into my variables at removes the text in the input textbox
function save(){
    firstName = document.getElementById("userFirstName").value;
    document.getElementById("userFirstName").value = "";


    lastName = document.getElementById("userLastName").value;
    document.getElementById("userLastName").value = "";


    age = document.getElementById("userAge").value;
    document.getElementById("userAge").value = "";

    
    adress = document.getElementById("userAdress").value;
    document.getElementById("userAdress").value = "";

    
    phoneNumber = document.getElementById("userPhoneNumber").value;
    document.getElementById("userPhoneNumber").value = "";

    
    email = document.getElementById("userEmail").value;
    document.getElementById("userEmail").value = "";

    
    nickname = document.getElementById("userNickname").value;
    document.getElementById("userNickname").value = "";

    
    notes = document.getElementById("userNotes").value;
    document.getElementById("userNotes").value = "";

}

//Function uses my variables to make the text appear back into the input textboxes 

function load(){
    document.getElementById("userFirstName").value = firstName;
    document.getElementById("userLastName").value = lastName;
    document.getElementById("userAge").value = age;
    document.getElementById("userAdress").value = adress;
    document.getElementById("userPhoneNumber").value = phoneNumber;
    document.getElementById("userEmail").value = email;
    document.getElementById("userNickname").value = nickname;
    document.getElementById("userNotes").value = notes;
}