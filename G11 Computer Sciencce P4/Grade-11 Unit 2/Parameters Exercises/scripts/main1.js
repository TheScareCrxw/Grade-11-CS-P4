

function calculateTax(price) {
    document.getElementById("display").innerText = "Grand Total: $" + (price * 1.13).toFixed(2);
}

function buyBubbleTea() {
    calculateTax(7)
}

function buyWaffles() {
    calculateTax(5)
}

function buyCombo() {
    calculateTax(11)
}