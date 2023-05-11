console.log("Welcome to Tic Tac Toe")

let music = new Audio("music.mp3")
let audioTurn = new Audio("water drop.mp3")
let gamewin = new Audio("game win.mp3")
let turn = "x"
let isgameover = false;
// function to change turn
const changeTurn = ()=>{
    return turn === "x"? "0": "x"
}
//function to check win  
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
        let wins = [
            [0, 1, 2, 5, 5, 0],
            [3, 4, 5, 5, 5, 15],
            [6, 7, 8, 5, 25, 0],
            [0, 3, 6, -5, 15, 90],
            [1, 4, 7, 5, 15, 90],
            [2, 5, 8, 15, 15, 90],
            [0, 4, 8, 5, 15, 45],
            [2, 4, 6, 5, 15, 135],
        ]
        wins.forEach(e =>{
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
              document.querySelector('.info').lnnertext = boxtext[e[0]].innerText + "won"
              isgameover = true
              document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
              document.querySelector(".line").style.transform = `transelate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            }
        })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }
    })
})

//add on click to listener to reset 
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
       element.innerText = ""
    });
    turn = "x"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
});