let tongue = [{x: 0, y:0},{x: -1, y:0},{x: -2, y:0}]
const TONGUE_LENGTH = 3 

export function update(){
    tongue = [{x: 0, y:0},{x: 0, y:0},{x: 0, y:0}]
}

export function draw(gameBoard, head, direction){


    for(let i = 1; i < TONGUE_LENGTH + 1; i++){
        let val1 = head.y + (direction.y * i)
        let val2 = head.x + (direction.x * i)
        const tongueElement = document.createElement("div")
        tongueElement.style.gridRowStart = val1
        tongueElement.style.gridColumnStart = val2
        tongue[i - 1] = {x:val1,y:val2} 
        tongueElement.classList.add("tongue")
        gameBoard.appendChild(tongueElement)
    }
 
}

export function getTongue(){
    return tongue
}

export function resetTongue(){
    tongue = [{x: 0, y:0},{x: 0, y:0},{x: 0, y:0}]
}

export function onTongue(position){

    console.log(tongue[0])
    return tongue.some(segment => {
        return equalPositions(segment,position)
    })
}

function equalPositions(pos1,pos2){
    return pos1.y === pos2.x && pos1.x == pos2.y
}
