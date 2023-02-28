class SpaceShip{
    image = "";
    constructor(hull,firepower,accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(openent){
        openent.hull -= (this.firepower * this.accuracy)/10;
        moveLeft = setInterval(move,30);
        return openent;
    }
    setImage(imageLink){
        this.image = imageLink;
    }
}

function randomGivenInterval(min,max){
    return Math.floor(Math.random() * (max-min + 1) + min)
}

const mySpaceShip = new SpaceShip(20,5,7);

const openent1 = new SpaceShip(randomGivenInterval(3,6),randomGivenInterval(2,4),randomGivenInterval(6,8));
openent1.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAwQ2yWS6F_eopSnuRnV4-w-r-fMZ0kXbcmq0eM5G7K_aRbTdLXzEcNPwaE0XHfbcwmA&usqp=CAU");
const openent2 = new SpaceShip(randomGivenInterval(3,6),randomGivenInterval(2,4),randomGivenInterval(6,8));
openent2.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVDhDt2XWi8fjnTNZE5vydnOeQzjZK1s51bsj7y2Uc_jHJxKNNbIFJXfhDoTzq465P6Ho&usqp=CAU");
const openent3 = new SpaceShip(randomGivenInterval(3,6),randomGivenInterval(2,4),randomGivenInterval(6,8));
openent3.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyia85C0dEpaScuJmY09IyLam6IGIlpzDOo_wL3SX_kJxZfTOYCHakuRwtOAewuvLB3M&usqp=CAU");
const openent4 = new SpaceShip(randomGivenInterval(3,6),randomGivenInterval(2,4),randomGivenInterval(6,8));
openent4.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxKANJSf1zx5xOiDWh1f3BLrAfOlJntYwyuNcZjq61yYlpNhJvY3zhLdrjsKjSGYfuOM&usqp=CAU");
const openent5 = new SpaceShip(randomGivenInterval(3,6),randomGivenInterval(2,4),randomGivenInterval(6,8));
openent5.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJIJEOmfz3S9-oS7sim3sqQNsGbq1AceLXhrf3XQt1sAUi_-zNfwYOZwlFlvrr-y1nbwg&usqp=CAU");
const openent6 = new SpaceShip(randomGivenInterval(3,6),randomGivenInterval(2,4),randomGivenInterval(6,8));
openent6.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGq6Z8cN4GJudLZJBQ4noww0A5hZWTywMVxxwSGNyKq60K528ie48tBGAucJQ6IUaNmks&usqp=CAU");

const oponents = [openent1,openent2,openent3,openent4,openent5,openent6];

const myWeapon = document.querySelector(".myweapon");
const oponentweapon = document.querySelector(".oponentweapon");
let leftPos = -100;
function move(){
    if(leftPos<=200){
    leftPos +=5;
    myWeapon.style.left = leftPos+"px";
    }
}

let rightPos = 400;
function moveOtherSide(){
    if(rightPos<=750){
        rightPos +=5;
        myWeapon.style.right = rightPos+"px";
        }
}

let shipImg = document.querySelector("#openentImage")

let round = 1;
function playround(openent){

    shipImg.setAttribute("src",openent.image)
    mySpaceShip.attack(openent);
    if(openent.hull <=0){
        openent.hull = 0;
        console.log("We Win this round!");
        console.log(mySpaceShip.hull);
        console.log(openent.hull);
    }else{
        openent.attack(mySpaceShip);
        
        clearInterval(moveLeft);
        leftPos = -100;
        console.log(mySpaceShip.hull)
        if(mySpaceShip.hull <=0){
            mySpaceShip.hull = 0;
            console.log("We loose!")
            round = 0;
        }else{
            console.log("Keep Shooting")
            console.log(mySpaceShip.hull);
            console.log(openent.hull);
        }
    }

}

function playBattle(){
    if(round === 7){
        console.log("You WON THE BATTLE!!");
        round = 7;
    }if(round === 0){
        console.log("You lost THE BATTLE");
        round = 0;
    }else if(round >=1 && round <=6){
        console.log("Round: ", round);
        playround(oponents[round-1]);
        round++;
    }
    else{
        console.log(round)
        console.log("I dont what the Heck i'm doing here!")
    }
}
const buttonPlay = document.querySelector(".playGame");
let moveLeft;
buttonPlay.addEventListener('click',function(){
    // playround(openent1);
    playBattle();
});