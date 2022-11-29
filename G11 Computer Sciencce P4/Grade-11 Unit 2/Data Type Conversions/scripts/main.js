

function calculatePerimeter() {
    // Stores users inputs into variables for computer to compute
    let num1 = document.getElementById('textbox1').value;
    let num2 = document.getElementById('textbox2').value;

    // Checks if user inputs is a number 
    

    // Checks if the user inputs a number that is lower or equal to 0 (removes negative numbers and 0 values)
    // Also checks if the user inputs a string or a number
    if (num1 > 0 && num2 > 0 && isNaN(num1) == false && isNaN(num2) ==false) {

        num1 = Number(document.getElementById('textbox1').value);
        num2 = Number(document.getElementById('textbox2').value);
        // Gets the perimeter of the 2 inputs 
        sum = num1 * 2 + num2 * 2;

        // Alerts user with the value of the perimeter of the 2 inputs
        alert(sum.toFixed(3))
    }
    else {

        // If user inputs an invalid input (input does not meet requirements)
        alert('Invalid')
    }
}

function calculateHypotenuse() {



    // Stores users inputs into variables for computer to compute
    let num1 = document.getElementById('textbox1').value;
    let num2 = document.getElementById('textbox2').value;

    // Checks if the user inputs a number that is lower or equal to 0 (removes negative numbers and 0 values)
    // Also checks if the user inputs a string or a number
    if (num1 > 0 && num2 > 0 && IsNaN(num1) == false && isNaN(num2) == false) {

        num1 = Number(document.getElementById('textbox1').value);
        num2 = Number(document.getElementById('textbox2').value);

        // Squares the numbers the user inputs 
        hypotenuse = Math.pow(num1,2) + Math.pow(num2,2);

        // Square roots the sum of the 2 squared numbers
        hypotenuse = Math.sqrt(hypotenuse);

        // Alerts the user and shows hypotenuse
        alert(hypotenuse.toFlixed(3))
    }
    else {

        // If user inputs an invalid input (input does not meet requirements)
        alert('Invalid')
    }
}