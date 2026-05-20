let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");

const userScorePara=document.querySelector("#user");
const cmpScorePara=document.querySelector("#computer");

const genComChoice =()=>{
    // rock, paper , scissors
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options [randIdx];

}
const msg=document.querySelector("#msg");
const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText="Game was draw. Play again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin ,userChoice,cmpChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win!");
        msg.innerText=`You win! your ${userChoice} beats ${cmpChoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        cmpScorePara.innerText=computerScore;
       console.log("You loose!") 
       msg.innerText=`You loose! ${cmpChoice} beats your ${userChoice}`;
       msg.style.backgroundColor="red";
    }

}
const playGame= (userChoice)=>{
    console.log("user choice=",userChoice);
    //Generate computer choice
    const cmpChoice=genComChoice();
    console.log("Computer choice=",cmpChoice);
    if(userChoice==cmpChoice){
        //Draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper , scissors
            userWin = cmpChoice === "paper" ? false : true;
        }else if(userChoice==="paper"){
            //rock , scissors
            userWin = cmpChoice === "scissors" ? false: true;
        }
        else {
            //rock , paper
            userWin = cmpChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice,cmpChoice);
    }
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})