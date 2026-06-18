const boyStart =[
    "images/boy1.png",
    "images/boy1.png",
    "images/boy2.png",
    "images/boy2.png",
    "images/boy2.png",
    
];
const girlStart =[
    "images/girl1.png",
    "images/girl1.png",
    "images/girl2.png",
    "images/girl2.png",
    "images/girl2.png",
];

const boyShake=[
    "images/boyshake1.png",
    "images/boyshake2.png",
    "images/boyshake1.png",
    "images/boyshake2.png",
    "images/boyshake1.png",
    "images/boyshake2.png",
    "images/boyshake1.png",
    "images/boyshake2.png",

];
const girlShake=[
    "images/girlshake1.png",
    "images/girlshake2.png",
    "images/girlshake1.png",
    "images/girlshake2.png",
    "images/girlshake1.png",
    "images/girlshake2.png",
    "images/girlshake1.png",
    "images/girlshake2.png",
];
const girlrun=[
    "images/girlturn1.png",
    "images/girlrun1.png",
    "images/girlrun2.png",
    "images/girlrun1.png",
    "images/girlrun2.png",
    "images/girlturn2.png",
    "images/girlrun3.png",
    "images/girlrun4.png",
    "images/girlrun3.png",
    "images/girlrun4.png",
    "images/girlend.png",
];
const boyeat=[
    "images/boyeat1.png",
    "images/boyeat2.png",
    "images/boyeat1.png",
    "images/boyeat2.png",
    "images/boyeat1.png",
    "images/boyeat2.png",
    "images/boyeat1.png",
    "images/boyeat2.png",
    "images/boyeat1.png",
    "images/boyeat2.png",
    "images/boyend.png",
];
const boyrun=[
    "images/boyturn1.png",
    "images/boyrun1.png",
    "images/boyrun2.png",
    "images/boyrun1.png",
    "images/boyrun2.png",
    "images/boyturn2.png",
    "images/boyrun3.png",
    "images/boyrun4.png",
    "images/boyrun3.png",
    "images/boyrun4.png",
    "images/boyend.png",
];
const girleat=[
    "images/girleat1.png",
    "images/girleat2.png",
    "images/girleat1.png",
    "images/girleat2.png",
    "images/girleat1.png",
    "images/girleat2.png",
    "images/girleat1.png",
    "images/girleat2.png",
    "images/girleat1.png",
    "images/girleat2.png",
    "images/girlend.png",
];
const tableImages=[
    "images/ice2.png",
    "images/ice3.png",
    "images/ice4.png",
    "images/ice5.png",
    "images/ice7.png",
    "images/ice8.png",
]
const botdiv=document.getElementById("botdiv");
const youdiv=document.getElementById("youdiv");
const boy=document.getElementById("boyimg");
const girl=document.getElementById("girlimg");
let animationInterval;

function StartAnimation(){
    clearInterval(animationInterval); 
    let i=0;
    animationInterval = setInterval(function(){
        boy.src = boyStart[i];
        
        girl.src = girlStart[i];
        i++;
        if(i >= boyStart.length){
            
            clearInterval(animationInterval);
        }
    }, 500); 
}


const overlay = document.getElementById("overlay");
const btn = document.getElementById("startBtn");

btn.addEventListener("click",()=>{

    overlay.classList.add("hide");
    StartAnimation();

});

const rock=document.getElementById("rockclick");
const paper=document.getElementById("paperclick");
const scissors=document.getElementById("scissorsclick");
function ShakeAnimation(onComplete){
    clearInterval(animationInterval); 
    let i=0;
    animationInterval = setInterval(function(){
        boy.src = boyShake[i];
        boy.style.scale='1.38';
        girl.src = girlShake[i];
        i++;
        if(i >= boyShake.length){
            boy.style.scale='1.5';
            clearInterval(animationInterval);
            if(typeof onComplete === "function"){
                onComplete();
            }
        }
    }, 200); 
}
function BoyWin(){
    clearInterval(animationInterval);
    let i=0;
    animationInterval = setInterval(function(){
        if(i < boyeat.length){
            boy.src = boyeat[i];
        }
        if(i < girlrun.length){
            girl.src = girlrun[i];
            
        }
        if(i <= 5){
    girl.style.transform =
        `translateY(${-i * 20}px)
         translateX(${-i * 10}px)
         scale(${1 - i * 0.12})`;
}
else {
    const step = i - 5;

    girl.style.transform =
        `translateY(${-100 + step * 20}px)
         translateX(${-50 + step * 8}px)
         scale(${0.4 + step * 0.12})`;
}

        i++;
        if(i >= Math.min(boyeat.length, girlrun.length)){
            
            clearInterval(animationInterval);
            chances++;
            tableChange();
             if(chances === 6){

        setTimeout(() => {

            if (girlScore > botScore) {
                showGameOver("girl");
            }
            else if (botScore > girlScore) {
                showGameOver("bot");
            }
            else {
                showGameOver("draw");
            }

        }, 1000);
    }
        }
    }, 200);
}
function GirlWin(){
    clearInterval(animationInterval);
    let i=0;
    animationInterval = setInterval(function(){
        if(i < boyrun.length){
            boy.src = boyrun[i];
        }
        if(girleat[i]=="images/girleat1.png"){
            girl.style.transform = "translateX(-10px)";
        }
        else{
            girl.style.transform = "translateX(20px)";
        }
        if(i < girleat.length){
            girl.style.scale='1.4';
            girl.src = girleat[i];
        }
        if(i <= 5){
    boy.style.transform =
        `translateY(${-i * 20}px)
         translateX(${i * 10}px)
         scale(${1 - i * 0.12})`;
}
else {
    const step = i - 5;

    boy.style.transform =
        `translateY(${-100 + step * 20}px)
         translateX(${50 + step * -8}px)
         scale(${0.4 + step * 0.12})`;
}

        i++;
        if(i >= boyrun.length){
            girl.style.scale='1.5';
            clearInterval(animationInterval);

            chances++;
            tableChange();
             if(chances === 6){

        setTimeout(() => {

            if (girlScore > botScore) {
                showGameOver("girl");
            }
            else if (botScore > girlScore) {
                showGameOver("bot");
            }
            else {
                showGameOver("draw");
            }

        }, 1000);
    }
        }
    }, 200);
}

let chances= 0;
function RandomChoice(){
    const choices=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}


const scoreboy = document.getElementById("scoreboy");
const scoregirl = document.getElementById("scoregirl");

function createGrid(container){
    for(let i = 0; i < 9; i++){
        const cell = document.createElement("div");
        cell.classList.add("score-cell");
        container.appendChild(cell);
    }
}

createGrid(scoreboy);
createGrid(scoregirl);

let botScore = 0;
let girlScore = 0;

function addBotPoint(){
    if(botScore >= 6) return;

    const cells = scoreboy.querySelectorAll(".score-cell");

    cells[botScore].innerHTML =
        `<img src="images/icecream.png">`;

    botScore++;


}

function addGirlPoint(){
    if(girlScore >= 6) return;

    const cells = scoregirl.querySelectorAll(".score-cell");

    cells[girlScore].innerHTML =
        `<img src="images/icecream.png">`;

    girlScore++;


}



rock.addEventListener("click",()=>{
    botdiv.classList.add("hide");
    youdiv.classList.add("hide");
    const BotChoice = RandomChoice();
    ShakeAnimation(()=>{
        girl.src="images/girlrock.png";
        girl.style.scale='1.4';
        if(BotChoice==="rock"){
            boy.src="images/boyrock.png";
            boy.style.scale='1.4';
            return;
        }else if(BotChoice==="paper"){
            boy.src="images/boypaper.png";
            boy.style.scale='1.4';
            setTimeout(BoyWin, 250);
            addBotPoint();
        }
        else if(BotChoice==="scissors"){
            boy.src="images/boyscissors.png";
            boy.style.scale='1.4';
            setTimeout(GirlWin, 250);
            addGirlPoint();
        }
        girl.style.scale='1.5';
        boy.style.scale='1.5';
    });
    
});
paper.addEventListener("click",()=>{
    botdiv.classList.add("hide");
    youdiv.classList.add("hide");
    const BotChoice = RandomChoice();
    ShakeAnimation(()=>{
        girl.src="images/girlpaper.png";
        girl.style.scale='1.4';
        if(BotChoice==="paper"){
            boy.src="images/boypaper.png";
            boy.style.scale='1.4';
            return;
        }else if(BotChoice==="scissors"){
            boy.src="images/boyscissors.png";
            boy.style.scale='1.4';
            setTimeout(BoyWin, 250);
            addBotPoint();
        }
        else if(BotChoice==="rock"){
            boy.src="images/boyrock.png";
            boy.style.scale='1.4';
            setTimeout(GirlWin, 250);
            addGirlPoint();
        }
        girl.style.scale='1.5';
        boy.style.scale='1.5';
        console.log("girlScore:",girlScore);
        console.log("botScore:",botScore);
    });
});
scissors.addEventListener("click",()=>{
    botdiv.classList.add("hide");
    youdiv.classList.add("hide");
    const BotChoice = RandomChoice();
    ShakeAnimation(()=>{
        girl.src="images/girlscissors.png";
        girl.style.scale='1.4';
        if(BotChoice==="scissors"){
            boy.src="images/boyscissors.png";
            boy.style.scale='1.4';
            return;
        }else if(BotChoice==="rock"){
            boy.src="images/boyrock.png";
            boy.style.scale='1.4';
            setTimeout(BoyWin, 250);
            addBotPoint();
            
        }
        else if(BotChoice==="paper"){
            boy.src="images/boypaper.png";
            boy.style.scale='1.4';
            setTimeout(GirlWin, 250);
            addGirlPoint();
        }
        girl.style.scale='1.5';
        boy.style.scale='1.5';
    });
});

const tableImg=document.getElementById("ice");



const gameOverOverlay =
    document.getElementById("gameOverOverlay");

const gameResult =
    document.getElementById("gameResult");

const gameMessage =
    document.getElementById("gameMessage");

const finalBot =
    document.getElementById("finalBot");

const finalGirl =
    document.getElementById("finalGirl");

const replayBtn =
    document.getElementById("replayBtn");

function showGameOver(winner){

    finalBot.textContent =
        `BOT : ${botScore}`;

    finalGirl.textContent =
        `GIRL : ${girlScore}`;

    if(winner === "girl"){

        gameResult.textContent = "YOU WIN!";
        gameMessage.textContent =
        "You ate more ice cream!";

    }else if(winner === "bot"){

        gameResult.textContent = "BOT WINS!";
        gameMessage.textContent =
        "The bot ate more ice cream!";
    }
    else{
        gameResult.textContent = "DRAW!";
        gameMessage.textContent =
        "Both players ate the same amount of ice cream!";
    }

    gameOverOverlay.classList.remove("hide");
}

function tableChange() {
    if (chances >= 1 && chances <= 6) {
        tableImg.src = tableImages[chances - 1];
    }
}

replayBtn.addEventListener("click",()=>{
    location.reload();
});