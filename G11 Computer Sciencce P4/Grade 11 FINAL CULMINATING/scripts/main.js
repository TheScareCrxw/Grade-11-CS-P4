// CONSTANTS
// constant for my canvas element 
const CANVAS = document.getElementById("game");

// constant for my counter text  
const COUNTER = document.getElementById("scoreCounter");

// constant for my highscore text 
const HIGHSCORE = document.getElementById("highscore");

// constant for my navigation function 
const NAVIGATION = performance.getEntriesByType("navigation");

// constant for my canvas context 
const CANVAS_CONTEXT = CANVAS.getContext("2d");

// constant to set every square equal to 16 pixels 
const GRID = 16;

// constant for my snake starting point 
const snake = {

    // starting x and y positions 
    x: 160,
    y: 160,

    // snakes movement, it moves one square everytime in the x or y direction 
    dx: GRID,
    dy: 0,

    // keeps track of all of the snakes body squares 
    snakeBody: [],

    // the amount of cells the snake starts with 
    maxSquares: 4,
};

// constant for my apple starting square 
const apple = {
    x: 320,
    y: 320,
};

// variable to keep track of the users score 
let scoreCount = 0;

// veriable to later set as a loop
let gameLoop;

// calls my start function 
start();

// start function to display everything when user loads the page  
function start() {
    // if the local storage "highscore" is not set or is undefined/null 
    if (localStorage.getItem("highscore") == null || localStorage.getItem("highscore") == "undefined") {
        // display no highscore 
        HIGHSCORE.innerText = "No High Score";
    } else {
        // if highscore is definded display the highscore 
        HIGHSCORE.innerText = "Highscore:" + localStorage.getItem("highscore");
    }

    // if the user refreshes the tab 
    if (NAVIGATION.length > 0 && NAVIGATION[0].type === "reload") {

        //remove everything from the local storage 
        localStorage.removeItem("scoreboard");
        localStorage.removeItem("leaderboard");
        localStorage.removeItem("highscore");

        // redirects the user to the login page 
        location.href = "login.html";
    }
}
// event listener for when the user clicks anywhere 
document.addEventListener("click", startgame);

// starts the actual game snake 
function startgame() {
    // sets the game loop which runs every 70 milliseconds 
    gameLoop = setInterval(runGame, 70);

    // clears the start text 
    document.getElementById("startText").innerText = "";
}

// get random whole numbers in a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// game loop
function runGame() {
    
    CANVAS_CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);

    // moves the snake by one square
    snake.x += snake.dx;
    snake.y += snake.dy;

    // stop the game if the snake hits the wall
    if (
        snake.x < 0 ||
        snake.x >= CANVAS.width ||
        snake.y < 0 ||
        snake.y >= CANVAS.height
    ) {
        gameEnd();
    }

    // keep track of where snake has been where the front of the array is always the head
    snake.snakeBody.unshift({ x: snake.x, y: snake.y });

    // remove cells as the snake moves away from them 
    if (snake.snakeBody.length > snake.maxSquares) {
        // removes last square in the array/snake body 
        removeLast(snake.snakeBody)
    }

    // draws an apple that is red and ocupies 1 square 
    CANVAS_CONTEXT.fillStyle = "red";
    CANVAS_CONTEXT.fillRect(apple.x, apple.y, GRID - 1, GRID - 1);

    // draw snake one cell at a time
    CANVAS_CONTEXT.fillStyle = "green";
    snake.snakeBody.forEach(function (cell, index) {
        // drawing 1 px smaller than the grid to create the single cell appearance 
        CANVAS_CONTEXT.fillRect(cell.x, cell.y, GRID - 1, GRID - 1);

        // if the snake's coordinates are the same as the apple 
        if (cell.x === apple.x && cell.y === apple.y) {

            //adds 1 to the snakes body 
            snake.maxSquares++;

            // creates the next apple which is a random number in the canvas area 
            apple.x = getRandomInt(0, 25) * GRID;
            apple.y = getRandomInt(0, 25) * GRID;

            // adds one to the score 
            scoreCount++;

            // dispalys the score 
            COUNTER.innerText = "Score: " + scoreCount;
        }

        // checks the collision with all squares after this one 
        for (let i = index + 1; i < snake.snakeBody.length; i++) {
            // if snake occupies same space as a body part
            if (cell.x === snake.snakeBody[i].x && cell.y === snake.snakeBody[i].y) {
                // end the game if the snake hits itself 
                gameEnd();
            }
        }
    });
}

// checks if the user pesses down 
document.addEventListener("keydown", function (event) {
    // left arrow key pressed 
    if ((event.code === "ArrowLeft" || event.code === "KeyA") && snake.dx === 0) {
        // changes the snakes direction so that the snake goes left 
        snake.dx = -GRID;
        snake.dy = 0;
    }
    // up arrow key pressed
    else if ((event.code === "ArrowUp" || event.code === "KeyW") && snake.dy === 0) {
        // changes the snakes direction so that the snake goes up
        snake.dy = -GRID;
        snake.dx = 0;
    }
    // right arrow key pressed
    else if ((event.code === "ArrowRight" || event.code === "KeyD") && snake.dx === 0) {
        // changes the snakes direction so that the snake goes right
        snake.dx = GRID;
        snake.dy = 0;
    }
    // down arrow key pressed
    else if ((event.code === "ArrowDown" || event.code === "KeyS") && snake.dy === 0) {
        // changes the snakes direction so that the snake goes down
        snake.dy = GRID;
        snake.dx = 0;
    }
});

// ends the game 
function gameEnd() {
    // sets the score and puts it into local storage 
    localStorage.setItem("score", scoreCount);
    
    // stops the game loop
    clearInterval(gameLoop);

    // redirects to leaderobard page 
    location.href = "leaderboard.html";
}

// function to remove the last index of an array 
function removeLast(array) {
    // sets a variable equal to the last item in the array 
    let lastIndex = array[array.length - 1];

    // take away the last index in the array lengh  
    array.length = array.length - 1;

    // returns the last index 
    return lastIndex;
}