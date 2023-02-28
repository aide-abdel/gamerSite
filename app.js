class Card{
    constructor(id,imgSrc,flipped){
        this.id = id;
        this.imgSrc = imgSrc;
        this.flipped = flipped;
    }
}
let game = "";
let totalAllowedClicks;
let timeAllowed;
const numMatchesHTML = document.getElementById("numMatches");
const remainingClicks = document.getElementById("remainingClicks");


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const getName = urlParams.get('name')

switch(getName){
    case 'pokEasy':
        game = "Pokemon";
        totalAllowedClicks = 100;
        timeAllowed = 10;
        break;
    case 'YuGiEasy':
        game = "YuGi";
        totalAllowedClicks = 100;
        timeAllowed = 10;
        break; 
    case 'baseballEasy':
        game = "Baseball";
        totalAllowedClicks = 100;
        timeAllowed = 10;
        break;
    case 'pokMedium':
        game = "Pokemon";
        totalAllowedClicks = 60;
        timeAllowed = 5;
        break;
    case 'YuGiMedium':
        game = "YuGi";
        totalAllowedClicks = 60;
        timeAllowed = 5;
        break;
    case 'baseballMedium':
        game = "Baseball";
        totalAllowedClicks = 60;
        timeAllowed = 5;
        break;
        case 'pokMaster':
            game = "Pokemon";
            totalAllowedClicks = 30;
            timeAllowed = 2;
            break;
        case 'YuGiMaster':
            game = "YuGi";
            totalAllowedClicks = 30;
            timeAllowed = 2;
            break;
        case 'baseballMaster':
            game = "Baseball";
            totalAllowedClicks = 30;
            timeAllowed = 2;
            break;
}
numMatchesHTML.innerText = 0;
remainingClicks.innerText = totalAllowedClicks;


const src1 = "images/paras-gg32-gg70.1674069807.jpg";
const src2 = "images/decidueye-gx-12-149.1606469926.jpg";
const src3 = "images/garchomp-v-117-189.1663066612.jpg";
const src4 = "images/gumshoos-gx-110-149.1606470044.jpg";
const src5 = "images/swablu-gg27-gg70.1674070013.jpg";
const src6 = "images/tauros-gx-100-149.1606470381.jpg";
const src7 = "images/umbreon-vmax-095-203.1629403889.jpg";
const src8 = "images/regieleki-v-057-195-preorder-11-11-2022.1668061168.png";
const backImgSrc1 = "images/backPokemonImage.png";

const src11 = "images/Yu-Gi-Oh/130387.jpg";
const src21 = "images/Yu-Gi-Oh/1188788.jpg";
const src31 = "images/Yu-Gi-Oh/1601927.jpg";
const src41 = "images/Yu-Gi-Oh/1602680.jpg";
const src51 = "images/Yu-Gi-Oh/1736355.jpg";
const src61 = "images/Yu-Gi-Oh/1773110.jpg";
const src71 = "images/Yu-Gi-Oh/1773119.jpg";
const src81 = "images/Yu-Gi-Oh/1773124.jpg";
const backImgSrc2 = "images/Yu-Gi-Oh/back.png";

    const src12 = "images/Baseball/5903127f.jpg";
    const src22 = "images/Baseball/5903132f.jpg";
    const src32 = "images/Baseball/5903543f.jpg";
    const src42 = "images/Baseball/5903548f.jpg";
    const src52 = "images/Baseball/5903559f.jpg";
    const src62 = "images/Baseball/5903565f.jpg";
    const src72 = "images/Baseball/5903571f.jpg";
    const src82 = "images/Baseball/6177057f.jpg";
    const backImgSrc3 = "images/Baseball/back.jpg";



let imagesSources = [];
let backImgSrc;
if(game === "Pokemon"){
imagesSources = [src1,src1,src2,src2,src3,src3,src4,src4,src5,src5,src6,src6,src7,src7,src8,src8];
backImgSrc = backImgSrc1;
}else if (game === "YuGi"){
imagesSources = [src11,src11,src21,src21,src31,src31,src41,src41,src51,src51,src61,src61,src71,src71,src81,src81];
backImgSrc = backImgSrc2;
}else if (game === "Baseball"){
    imagesSources = [src12,src12,src22,src22,src32,src32,src42,src42,src52,src52,src62,src62,src72,src72,src82,src82];
    backImgSrc = backImgSrc3;
}

imagesSources = shuffle(imagesSources);

const mainContainer = document.querySelector(".mainContainter");

let cards = [];

for(let i=0;i<imagesSources.length;i++){
let card = new Card;
card.flipped = false;
let cardDiv = document.createElement("div");
cardDiv.setAttribute("class","card");
cardDiv.setAttribute("id","card"+i);

mainContainer.appendChild(cardDiv);

let divFront = document.createElement("div");
divFront.setAttribute("class","front");
cardDiv.appendChild(divFront);

let imgFront = document.createElement("img");
imgFront.setAttribute("class","frontImg");
imgFront.setAttribute("src",backImgSrc);
divFront.appendChild(imgFront)

let divBack = document.createElement("div");
divBack.setAttribute("class","back");
cardDiv.appendChild(divBack);

let imgBack = document.createElement("img");
imgBack.setAttribute("class","backImg");
imgBack.setAttribute("src",imagesSources[i]);
divBack.appendChild(imgBack);

card.imgSrc = imagesSources[i];
card.id = document.getElementById("card"+i);
cards.push(card);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

let flippedCards = [];
let numberMatches = 0;
let cardClicked = 0;


cards.forEach(element => {
   element.id.addEventListener('click',()=>{
    console.log(numberMatches);
    totalAllowedClicks--;
    if(totalAllowedClicks===0){
        lostGame();
    }
    numMatchesHTML.innerText = numberMatches;
    remainingClicks.innerText = totalAllowedClicks;
    if(element.flipped === false){
        element.id.classList.toggle("flipCard");
        element.flipped= true;
        if(flippedCards.length === 0){
            flippedCards.push(element);
        }else{ // if the array of flipped cards is not empty, i.e. if there is a flipped card already
            if(flippedCards[0].imgSrc === element.imgSrc){ // if the new flipped card matches the previously flipped card
                numberMatches++;
                numMatchesHTML.innerText = numberMatches;
                if(numberMatches===8){ // if you won game
                    winGame();

                }
                flippedCards = [];
            }else{ // if the new flipped card doesn't match the previsouly flipped card then flip them back
                setTimeout(function(){
                    flippedCards[0].id.classList.toggle("flipCard");
                    element.id.classList.toggle("flipCard");
                    flippedCards[0].flipped = false;
                    element.flipped = false;
                    flippedCards = [];
                },1000);

            }
            
        }
        
    }

   }) 
});



// set Timer

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer === 0) {
            lostGame();

        }
    }, 1000);

}
var audio = new Audio("audio/Wallpaper.mp3");
window.onload = function () {
    let totalTime = 60 * timeAllowed,
        display = document.querySelector('#time');
    startTimer(totalTime, display);


};

function lostGame(){
    const gameHolder = document.getElementById("gameHolder");
    gameHolder.classList.toggle("lostGame")
}

function winGame(){
    const gameHolder = document.getElementById("gameHolder");
    gameHolder.classList.toggle("winGame");
}

function playMusic(){
    audio.play();
}
function pauseMusic(){
    audio.pause();
}

//color templates

const bodybg = document.querySelector(".bodybg")

const colorOne = document.getElementById("colorOne");
colorOne.addEventListener('click',()=>{
    bodybg.style.backgroundColor = "aqua";
});

const colorTwo = document.getElementById("colorTwo");
colorTwo.addEventListener('click',()=>{
    bodybg.style.backgroundColor = "chartreuse";
});

const colorThree = document.getElementById("colorThree");
colorThree.addEventListener('click',()=>{
    bodybg.style.backgroundColor = "chocolate";
});

const colorFour = document.getElementById("colorFour");
colorFour.addEventListener('click',()=>{
    bodybg.style.backgroundColor = "crimson";
});

const colorFive = document.getElementById("colorFive");
colorFive.addEventListener('click',()=>{
    bodybg.style.backgroundColor = "darkorchid";
});