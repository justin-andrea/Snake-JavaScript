let inputDirection = {x: 0, y:0}
let lastInputDirection = {x: 0, y:0}
let tongueOut = false

window.addEventListener('keydown',e => {
    // if statements make sure you can't do the reverse of the last input.  i.e that you can't go back on your tail
    if(e.keyCode === 84){
        tongueOut = true
    }
    switch(e.key){
        case "ArrowUp":
            if(lastInputDirection.y === 0){
                inputDirection = {x: 0, y: -1}
            }
            break
        case "ArrowDown":
            if(lastInputDirection.y === 0){
                inputDirection = {x: 0, y: 1}
            }
            break
        case "ArrowLeft":
            if(lastInputDirection.x === 0){
                inputDirection = {x: -1, y: 0}
            }
            break
        case "ArrowRight":
            if(lastInputDirection.x === 0){
                inputDirection = {x: 1, y: 0}
            }
            break
    }
})
export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}

export function isTongueOut(){
    return tongueOut
}

export function setTongueOut(val){
    tongueOut = val
}