//user information
let firstName;
let lastName;
let hairColour;
let eyeColour;
let age;
let description;
let profileImageSrc;
let imaageBoarder;


// assign starting tweet information
function profileOne(){
    firstName = 'Katherine';
    lastName = 'Ma';
    hairColour = 'Hair Colour: Dark Brown';
    eyeColour = 'Eye Colour: Brown';
    age = 'Age: 16';
    description = ' Description: 5\'3 asian, plays league player/valorant player. Majoring in Computer Science';
    profileImageSrc = 'https://cdn.vox-cdn.com/thumbor/erBglLkGU0eWF6c2PsEWHT2_TE0=/12x0:4907x3263/1400x1400/filters:focal(12x0:4907x3263):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49388585/16071828377_85109fdee4_o.0.0.jpg';
    imaageBoarder = false;

    update();
}


function profileTwo() {
    firstName = 'Jacob';
    lastName = 'Hodges';
    hairColour = 'Hair Colour: Dirty Blonde';
    eyeColour = 'Eye Colour: Blue';
    age = 'Age: 17';
    description = 'Descrpition: 6\' british insane coding programmer, plays games occasionally. Majoring in Engineering';
    profileImageSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/220px-RedCat_8727.jpg';
    imaageBoarder = false;
    
    update();
}


function profileThree(){
    firstName = 'Max';
    lastName = 'Liao';
    hairColour = 'Hair Colour: Black';
    eyeColour = 'Eye Colour: Brown';
    age = 'Age: 16';
    description = 'Description: 5\'9 Asian, plays league valorant, Majoring in Computer Science';
    profileImageSrc = 'https://m.media-amazon.com/images/I/51tgLI11-IL._AC_SX679_.jpg';
    imaageBoarder = false;
    
    update();
}



function logout(){
    firstName = '';
    lastName = '';
    hairColour = '';
    eyeColour = '';
    age = '';
    description = '';
    profileImageSrc = ' ';
    imaageBoarder = true;

    update();
}


function update(){

    let paragraph = document.getElementById('name');

    paragraph.innerText = firstName +' '+ lastName

    paragraph = document.getElementById('hair');
    paragraph.innerText = hairColour;

    paragraph = document.getElementById('eye');
    paragraph.innerText = eyeColour;

    paragraph = document.getElementById('age');
    paragraph.innerText = age;

    paragraph = document.getElementById('description');
    paragraph.innerText = description;

    paragraph = document.getElementById('image');
    paragraph.src = profileImageSrc;
    paragraph.hidden = imaageBoarder;
}
