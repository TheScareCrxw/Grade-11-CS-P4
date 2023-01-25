const CANVAS = document.getElementById("game");
const COUNTER = document.getElementById("scoreCounter");
const CANVAS_CONTEXT = CANVAS.getContext("2d");
const HIGHSCORE = document.getElementById("highscore");

const NAVIGATION = performance.getEntriesByType("navigation");


const GRID = 16;

const snake = {
    x: 160,
    y: 160,

    // snake velocity. moves one grid length every frame in either the x or y direction
    dx: GRID,
    dy: 0,

    // keep track of all grids the snake body occupies
    snakeBody: [],

    // length of the snake. grows when eating an apple
    maxCells: 4,
};

const apple = {
    x: 320,
    y: 320,
};

let count = 0;
let scoreCount = 0;
let gameLoop;



start();

function start() {
    if (localStorage.getItem("highscore") == null || localStorage.getItem("highscore") == "undefined") {
        HIGHSCORE.innerText = "No High Score";
    } else {
        HIGHSCORE.innerText = "Highscore:" + localStorage.getItem("highscore");
    }
    if (NAVIGATION.length > 0 && NAVIGATION[0].type === "reload") {
        localStorage.removeItem("scoreboard");
        localStorage.removeItem("leaderboard");
        localStorage.removeItem("highscore");
        location.href = "snakeGame.html";
    }
}

document.addEventListener("click", myFunction);

function myFunction() {
    gameLoop = setInterval(runGame, 70);
    document.getElementById("startText").innerText = "";
}

// get random whole numbers in a specific range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// game loop
function runGame() {
    count = 0;
    CANVAS_CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);

    // move snake by it's velocity
    snake.x += snake.dx;
    snake.y += snake.dy;

    // Stop the game if the snake hits the wall
    if (
        snake.x < 0 ||
        snake.x >= CANVAS.width ||
        snake.y < 0 ||
        snake.y >= CANVAS.height
    ) {
        gameEnd();
    }

    // keep track of where snake has been. front of the array is always the head
    snake.snakeBody.unshift({ x: snake.x, y: snake.y });

    // remove cells as we move away from them
    if (snake.snakeBody.length > snake.maxCells) {
        removeLast(snake.snakeBody)
    }

    // draw apple
    CANVAS_CONTEXT.fillStyle = "red";
    CANVAS_CONTEXT.fillRect(apple.x, apple.y, GRID - 1, GRID - 1);

    // draw snake one cell at a time
    CANVAS_CONTEXT.fillStyle = "green";
    snake.snakeBody.forEach(function (cell, index) {
        // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
        CANVAS_CONTEXT.fillRect(cell.x, cell.y, GRID - 1, GRID - 1);

        // snake ate apple
        if (cell.x === apple.x && cell.y === apple.y) {
            snake.maxCells++;

            // canvas is 400x400 which is 25x25 grids
            apple.x = getRandomInt(0, 25) * GRID;
            apple.y = getRandomInt(0, 25) * GRID;
            scoreCount++;
            COUNTER.innerText = "Score: " + scoreCount;
        }

        // check collision with all cells after this one (modified bubble sort)
        for (let i = index + 1; i < snake.snakeBody.length; i++) {
            // snake occupies same space as a body part. reset game
            if (cell.x === snake.snakeBody[i].x && cell.y === snake.snakeBody[i].y) {
                gameEnd();
            }
        }
    });
}

// listen to keyboard events to move the snake
document.addEventListener("keydown", function (event) {
    // left arrow key
    if ((event.code === "ArrowLeft" || event.code === "KeyA") && snake.dx === 0) {
        snake.dx = -GRID;
        snake.dy = 0;
    }
    // up arrow key
    else if ((event.code === "ArrowUp" || event.code === "KeyW") && snake.dy === 0) {
        snake.dy = -GRID;
        snake.dx = 0;
    }
    // right arrow key
    else if ((event.code === "ArrowRight" || event.code === "KeyD") && snake.dx === 0) {
        snake.dx = GRID;
        snake.dy = 0;
    }
    // down arrow key
    else if ((event.code === "ArrowDown" || event.code === "KeyS") && snake.dy === 0) {
        snake.dy = GRID;
        snake.dx = 0;
    }
});

function gameEnd() {
    localStorage.setItem("score", scoreCount);
    clearInterval(gameLoop);
    location.href = "leaderboard.html";
}

function removeLast(array) {
    let lastIndex = array[array.length - 1];
    array.length = array.length - 1;
    return lastIndex;
}