function save(){
    text = document.getElementById("userName");
    name = text.value;
    text.value = " "

    text = document.getElementById("userAge");
    age = text.value;
    text.value = " "
}


function load(){
    paragraph = document.getElementById("name");
    paragraph.innerText = "Name: " + name;

    paragraph = document.getElementById("age");
    paragraph.innerText = "Age: " + age;

    
}
