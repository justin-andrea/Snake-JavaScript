import {SNAKE_SPEED,update as updateSnake, draw as drawSnake,getSnakeHead,snakeIntersection} from "./snake.js"
import {update as updateFood, draw as drawFood} from "./food.js"
import {outsideGrid} from "./grid.js"
import {update as updateTongue} from "./tongue.js"

let lastRenderTime = 0
const gameBoard = document.getElementById("game-board")
let gameOver = false  
let score = 0

function main(currentTime){
    if(gameOver){
        if(confirm("Your score is " + score + ". Press OK to restart.")){
            window.location = "/"
        }
        score = 0
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED){
        return
    }
    
    lastRenderTime = currentTime
    //console.log("render")
    //updates logic of the game, did we lose?, count food, etc
    update()
    //draws all the elements of the game
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    updateTongue()
    checkDeath()
}


function draw(){
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

export function updateScore(){
    score += 1
}

