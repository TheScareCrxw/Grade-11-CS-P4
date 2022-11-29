
function calculateAll() {
    let n = document.getElementById("textbox").value;
    calcualteCircumference(n);
    calculateAera(n);
    calculateDiameter(n);
    calculateSurfaceArea(n);
    calculateVolume(n);
}

function calculateDiameter(radius) {
    diameter = 2 * radius;
    document.getElementById("diameterDisplay").innerText = "The diameter of a circle with a radius of " + radius + " is " + diameter.toFixed(3);
}

function calculateAera(radius) {
    area = Math.pow(radius, 2) * 3.1415;
    document.getElementById("areaDisplay").innerText = "The area of a circle with a radius of " + radius + " is " + area.toFixed(3);
}

function calcualteCircumference(radius) {
    circumference = 2 * 3.1415 * radius;
    document.getElementById("circumfrenceDisplay").innerText = "The circumference of a circle with a radius of " + radius + " is " + circumference.toFixed(3);
}

function calculateSurfaceArea(radius) {
    surfaceArea = 4 * 3.1415 * Math.pow(radius, 2);
    document.getElementById("surfaceAeraDisplay").innerText = "The surface area of a sphere with a radius of " + radius + " is " + surfaceArea.toFixed(3);
}

function calculateVolume(radius) {
    volume = 3/4 * 3.1415 * Math.pow(radius, 3);
    document.getElementById("volumeDisplay").innerText = "The volume of a sphere with a radius of " + radius + " is " + volume.toFixed(3);
}