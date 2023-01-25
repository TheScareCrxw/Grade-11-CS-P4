// Exercise 5
let original = ["Max", "Kat", "Andy"];

document.getElementById("copyArray").onclick = function(){
    document.getElementById("text").innerText = "";
    arrayCopy(original);
};
function arrayCopy(originalArray){
    let copy = [];
    for (let i = 0; i < originalArray.length; i++){
        copy[i] = original[i];
        document.getElementById("text").innerText += copy[i] + '\n';
    }
}


// Exercise 6 
let l1String = ["apple", "orange", "water mellon", "tomato", 1,5,8]

document.getElementById("linearSearch1").onclick = function(){
    document.getElementById("text").innerText = "";
    linearSearch1(l1String, 'm');
};

function linearSearch1(theArray, stringToFind){
    let found = false;
    for(let i = 0; i < theArray.length; i++){
        theArray[i] = theArray[i].toString();
        if(theArray[i].indexOf(stringToFind) != -1){
            found = true;
        }

    }
    if(found == true){
        return document.getElementById("text").innerText = "M Found";
    }
    else {
        return document.getElementById("text").innerText = "M Not Found";
    }
}


// Exercise 7 
let l2String = ["apple", "orange", "water mellon", "tomato", 1,5,8]

document.getElementById("linearSearch2").onclick = function(){
    document.getElementById("text").innerText = "";
    linearSearch2(l2String, 'tomato');
};

function linearSearch2(theArray, valuetoFind){
    for(let i = 0; i < theArray.length; i++){
        theArray[i] = theArray[i].toString();
        if(theArray[i] == valuetoFind){
            return document.getElementById("text").innerText = i;
        }
    }
}


// Exercise 8 
document.getElementById("arrayResize").onclick = function() {
    document.getElementById("text").innerText = "";
    arrayResize(original)
}
function arrayResize(theArray){
    let newArray = new Array(theArray.length + 1)

    for (counter = 0; counter < newArray.length; counter++){
        newArray[counter] = theArray[counter];
    }
}

// Exercise 9 weird bug

let email = ["uwu","123123","bob"];
let name1 = ["Meow","123","M"];

document.getElementById("parallelSearch1").onclick = function(){
    document.getElementById("text").innerText = "";
    parallelSearch1(email, name1);
};

function parallelSearch1(emails, names){
    let counter = 0;
    let matchingEmails = [];
    // count how many people with the name "M" have been found
    for (let i = 0; i < emails.length; i++){
        if (names[i] == "M"){
            matchingEmails[counter] = emails[i];
            document.getElementById("text").innerText += matchingEmails[counter] + '\n';
            counter++;
        }
    }
}


// Exercise 10

document.getElementById("parallelSearch2").onclick = function(){
    document.getElementById("text").innerText = "";
    parallelSearch2(email, name1)
}

function parallelSearch2(emails, names){
    let counter = 0;
    let matchingEmails = ["test1", "test2", "test3"];
    // count how many people with the name "M" have been found
    for (let i = 0; i < emails.length; i++){
        if (names[i] == "M"){
            matchingEmails[counter] = i;
            document.getElementById("text").innerText += matchingEmails[counter] + '\n';
            counter++;
        }
    }
}


// Exercise 11
let right = ["A","B","C","D","E"]


document.getElementById("arrayRightwardShift").onclick = function(){
    document.getElementById("text").innerText = "";
    shiftRight(right)
}

function shiftRight(theArray){
    for(let i = theArray.length; i >= 1; i--){
        theArray[i-1] = theArray[i-2];
    }
    return document.getElementById("text").innerText = theArray;

}


// Exercise 12

let before = ["A","B","C","D","E"];

document.getElementById("arrayInsertion").onclick = function(){
    document.getElementById("text").innerText = "";
    arrayInsertion(before, 1, 3);
}

function arrayInsertion(theArray, newData, indexOfData){
    let after = new Array(theArray.length + 1);
    for (let i = 0; i < theArray.length; i++){
        after[i] = theArray[i]
    }

    for (let i = after.length; i >= indexOfData + 1; i--){
        after[i - 1] = theArray[i - 2];
    }
    after[indexOfData] = newData;
    return document.getElementById("text").innerText = after
} 

let numbs = [1,5,7,9,7,6,4,5,76,88,6,4,3,35,65,7,7,5,32]

start();

function start(){
    selectionSort(numbs);
    sortNumbers(numbs)
}

// BUBBLE SORT ALGORITHM
function selectionSort(anArray){
    for (let i = 0; i < anArray.length; i++){
        for (let j = i + 1; j < anArray.length; j++){
            if (anArray[i] > anArray[j]) {
                let temp = anArray[i];
                anArray[i] = anArray[j];
                anArray[j] = temp;
            }
        }
    }
    return console.log(anArray)
}

// LARGEST TO SMALLEST  ///////////////////////////////////////////////////////////////////////////////////////

function sortNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return console.log(numbers);
}

// INSERTIONSORT ALGORITHM  ////////////////////////////////////////////////////////////////////////////////////////





// SMALLEST TO LARGEST 
function insertionSortIncrease(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        let key = numbers[i],
            j = i - 1;
        while (j >= 0 && numbers[j] > key) {
            numbers[j + 1] = numbers[j];
            j = j - 1;
        }
        numbers[j + 1] = key;
    }
    return numbers;
}


// LARGEST TO SMALLEST 
let numbers = [5, 2, 9, 1, 3, 4, 8, 6, 7];
console.log(insertionSortIncrease(numbers));

function insertionSortDescrease(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        let key = numbers[i],
            j = i - 1;
        while (j >= 0 && numbers[j] < key) {
            numbers[j + 1] = numbers[j];
            j = j - 1;
        }
        numbers[j + 1] = key;
    }
    return numbers;
}

let numbers1 = [5, 2, 9, 1, 3, 4, 8, 6, 7];
console.log(insertionSortDescrease(numbers1));






// HEAPSORT ALGORITHM ////////////////////////////////////////////////////////////////////////////////////////

function heapsort(arr) {
    // Build a max heap out of the array
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, arr.length, i);
    }

    // Move the max element of the heap to the end of the array and 
    // heapify the remaining elements
    for (let i = arr.length - 1; i >= 0; i--) {
        // Move the current root to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }

    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

let arr = [3, 2, 5, 6, 1, 9];
console.log(heapsort(arr));

// SMALLEST TO LARGEST 

function heapSort1(arr) {
    // Build min heap
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify1(arr, arr.length, i);
    }
    // Extract elements from heap
    for (let i = arr.length - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // Call min heapify on the reduced heap
        heapify1(arr, i, 0);
    }
    return arr;
}

function heapify1(arr, n, i) {
    let smallest = i; // Initialize smallest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2

    // If left child is smaller than root
    if (l < n && arr[l] < arr[smallest]) {
        smallest = l;
    }

    // If right child is smaller than smallest so far
    if (r < n && arr[r] < arr[smallest]) {
        smallest = r;
    }

    // If smallest is not root
    if (smallest !== i) {
        // swap
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        // Recursively heapify the affected sub-tree
        heapify1(arr, n, smallest);
    }
}

let testArr = [3, 1, 5, 6, 2, 9, 4, 8, 7];
console.log(heapSort1(testArr)); // this should print [9, 8, 7, 6, 5, 4, 3, 2, 1]