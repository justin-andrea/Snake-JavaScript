import { onSnake, expandSnake } from "./snake.js"
import {randomGridPosition} from "./grid.js"
import {updateScore} from "./game.js"
import {onTongue} from "./tongue.js"

let food = getRandomFoodPosition()
const EXPANSION_RATE = 2

export function update(){
        
    if(onTongue(food)){
        console.log("eat!!")
    }
    if (onSnake(food) || onTongue(food) ){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
        updateScore()
    }
}

export function draw(gameBoard){
    const foodElement = document.createElement("div")
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food")
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

export function getFoodPosition(){
    return food
}