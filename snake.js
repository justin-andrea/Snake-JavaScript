import { getInputDirection,isTongueOut,setTongueOut } from "./input.js"
import {draw as drawTongue, resetTongue, getTongue} from "./tongue.js"

//how many times snake moves per second
export const SNAKE_SPEED = 5
const snakeBody = [{x:11, y:11}]
let newSegments = 0

export function update(){
    const inputDirection = getInputDirection()
    addSegments()

    //start from the second to last position of the body and go towards head
    for(let i = snakeBody.length -2; i >=0; i--){
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        snakeBody[i+ 1] = {...snakeBody[i]}
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add("snake")
        gameBoard.appendChild(snakeElement)
    })
    if(isTongueOut()){
        drawTongue(gameBoard,getSnakeHead(),getInputDirection())
        
        setTongueOut(false)
        //resetTongue()
    }
}

export function expandSnake(amount){
    newSegments += amount
}

export function onSnake(position, {ignoreHead = false} = {}){
    return snakeBody.some((segment,index) => {
        if(ignoreHead && index === 0){
            return false
        }
        return equalPositions(segment,position)
    })
}


function equalPositions(pos1,pos2){
    return pos1.x === pos2.x && pos1.y == pos2.y
}

function addSegments(){
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }

    newSegments = 0
}

export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0],{ignoreHead: true})
}