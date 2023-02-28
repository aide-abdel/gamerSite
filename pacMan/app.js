const canvas = document.getElementById("playBoard");

console.log(canvas.width)
console.log(canvas.height)
const contexte = canvas.getContext("2d");

// setting the style of the rectangle
// contexte.strokeStyle = "#1167e7";
contexte.strokeStyle = "green"
contexte.lineWidth = "3"
function drawLines(){
// drawing the rectangle in the middle
contexte.beginPath();
contexte.rect(120,50,60,40);
contexte.stroke()

//drawing the half up rectangle using lines
contexte.beginPath();
contexte.moveTo(120,0)
contexte.lineTo(120,5);
contexte.lineTo(180,5);
contexte.lineTo(180,0);
contexte.stroke()

// drawing the line between top half rectangle and middle rectangle
contexte.beginPath()
contexte.moveTo(120,25)
contexte.lineTo(180,25)
contexte.stroke()

// draw the shape on left top corner
contexte.beginPath()
contexte.moveTo(90,0)
contexte.lineTo(90,5)
contexte.lineTo(5,5)
contexte.lineTo(5,50)
contexte.lineTo(0,50)
contexte.stroke()

// draw the shape on right top corner
contexte.beginPath()
contexte.moveTo(210,0)
contexte.lineTo(210,5)
contexte.lineTo(295,5)
contexte.lineTo(295,50)
contexte.lineTo(300,50)
contexte.stroke()

// draw the shape on bottom right corner
contexte.beginPath()
contexte.moveTo(300,90)
contexte.lineTo(295,90)
contexte.lineTo(295,145)
contexte.lineTo(210,145)
contexte.lineTo(210,150)
contexte.stroke()

// draw the shape on bottom left corner
contexte.beginPath()
contexte.moveTo(90,150)
contexte.lineTo(90,145)
contexte.lineTo(5,145)
contexte.lineTo(5,90)
contexte.lineTo(0,90)
contexte.stroke()

// drawing the line between bottom half rectangle and middle rectangle
contexte.beginPath()
contexte.moveTo(120,115)
contexte.lineTo(180,115)
contexte.stroke()


// drawing L-shape in right side
contexte.beginPath()
contexte.moveTo(230,25)
contexte.lineTo(210,25)
contexte.lineTo(210,90)
contexte.stroke()

// drawing L-shape in left side
contexte.beginPath()
contexte.moveTo(90,50)
contexte.lineTo(90,115)
contexte.lineTo(65,115)
contexte.stroke()
}



// Drawing points on path
function drawpoint(x,y){
    contexte.fillStyle = "blue";
    contexte.fillRect(x,y,5,5);
}
const point = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
}
let pointsArray = []


// filling the array pointArray with points coordinates
for(let i=10;i<145;i+=15){
    let point = {};
    point.x = 103;
    point.y = i;
    point.width = 5;
    point.height = 5;
    pointsArray.push(point);
}

for(let i=10;i<290;i+=15){
    let point = {};
    point.x = i;
    point.y = 130;
    point.width = 5;
    point.height = 5;
    pointsArray.push(point);
}

function drawPoints(pointsArray){
    //console.log(pointsArray)
    pointsArray.forEach(arr => {
        // drawpoint(arr.x,arr.y);
        contexte.fillStyle = "blue";
        contexte.fillRect(arr.x,arr.y,5,5);
        });
}
// Drawing pac-man
// contexte.beginPath();
// contexte.arc(100, 100, 10, 0.25 * Math.PI, 1.25 * Math.PI, false);
// contexte.fillStyle = "rgb(255, 255, 0)";
// contexte.fill();
// contexte.beginPath();
// contexte.arc(100, 100, 10, 0.75 * Math.PI, 1.75 * Math.PI, false);
// contexte.fill();
// contexte.beginPath();

window.addEventListener("keydown",moveSomething,false);

let deltaX = 0
let deltaY = 0
let j =0;
function moveSomething(e){
    switch(e.keyCode){
        case 37:
            //left
            deltaX--;
            break;
        case 38:
            //up
            deltaY--;
            break;
        case 39:
            //right
            deltaX++;
            break;
        case 40:
            //down
            deltaY++;
            break;
    }
    pacMan = drawPacman();
    // drawghost(trajOne[j].x,trajOne[j].y)
    // if (j< trajOne.length )
    //          j++; 
    // else j= 0;
    // drawOneGhost();
    pointsArray = detectCollision(pointsArray,pacMan);
    // drawLines();
    // drawPoints(pointsArray)
}

function drawPacman(){
   
    // contexte.clearRect(0, 0, canvas.width, canvas.height);
    let pacMan = {
        x:100+deltaX,
        y:100+deltaY,
        height : 15,
        width: 15
    }
    // contexte.beginPath();
    // contexte.arc(100+deltaX, 100+deltaY, 10, 0.25 * Math.PI, 1.25 * Math.PI, false);
    // contexte.fillStyle = "rgb(255, 255, 0)";
    // contexte.fill();
    // contexte.beginPath();
    // contexte.arc(100+deltaX, 100+deltaY, 10, 0.75 * Math.PI, 1.75 * Math.PI, false);
    // contexte.fill();
    // contexte.beginPath();
    contexte.fillStyle = "yellow"
    contexte.fillRect(100+deltaX,100+deltaY,15,15);
    return pacMan;
}
function rectIntersection(a,b){
     // Check for horizontal overlap
     let xOverlap = (a.x + a.width >= b.x) && (b.x + b.width >= a.x);
     // Check for vertical overlap
     let yOverlap = (a.y + a.height >= b.y) && (b.y + b.height >= a.y);
    return  xOverlap && yOverlap
         // Return true if there is both horizontal and vertical overlap
       
}
function detectCollision(pointsArray,pacMan){
   
   pointsArray = pointsArray.filter(point => !rectIntersection(point,pacMan));
   return pointsArray;
}

// buidling the ghost; the ghost will have a predefined trajectory:
// let dx = dy = 0;
function drawghost(dx,dy){
   
    let ghost = {
        x:dx,
        y:dy,
        height : 10,
        width: 10
    }
 
    contexte.fillStyle = "red"
    contexte.fillRect(dx,dy,10,10);
    return ghost;
}

function drawOneGhost() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (dx<285 & dx > 0){
    ghost = drawghost(dx,dy);
    dx += 2;
    dy = 10;
}else if(dy<140 & dy > 0){
    ghost = drawghost(285,dy);
    dy+=2;
}

}

// setInterval(drawOneGhost, 10);

let trajOne = [];
let trajOneFinish = false;
let pnts = {
    x:0,
    y:0
}
for (let i =10;i<=285;i+=2){
    let pnt = {};
    pnt.x = i;
    pnt.y = 10;
    trajOne.push(pnt)
}
for(let i=10;i<135;i+=2){
    let pnt = {};
    pnt.x = 285;
    pnt.y = i;
    trajOne.push(pnt)
}
for(let i=285;i>=10;i-=2){
    let pnt = {};
    pnt.x = i;
    pnt.y = 135;
    trajOne.push(pnt)
}
for(let i=135;i>10;i-=2){
    let pnt = {};
    pnt.x = 10;
    pnt.y = i;
    trajOne.push(pnt)
}
trajOneFinish = true;


// function clearScreen(){
//     contexte.clearRect(0, 0, canvas.width, canvas.height);
// }
// setInterval(clearScreen,70)


document.onload =  loadingFunc();
   
function loadingFunc(){
    drawLines();
    drawPoints(pointsArray);
}
let k =0;
function gameRoutine(){
    contexte.clearRect(0, 0, canvas.width, canvas.height);
    drawLines();
    drawPoints(pointsArray);
    drawghost(trajOne[k].x,trajOne[k].y)
    if (k< trajOne.length )
             k++; 
    else k= 0;
    pacM = drawPacman();
    contexte.rect(pacM.x,pacM.y,15,15)
    
}
setInterval(gameRoutine,100);
