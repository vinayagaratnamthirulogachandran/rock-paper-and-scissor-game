let playGames = confirm("Shall we play rock, paper, or scissor?");

if(playGames){
   let playerChoice = prompt("Please enter rock, paper, or scissors.");

   if(playerChoice){
    let playerOne = playerChoice.trim().toLowerCase();

    if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
      let computerChoice = Math.floor(Math.random()*3+1);
      let computer = computerChoice === 1? "rock":
                     computerChoice === 2? "paper":
                     "scissors";

    
        let result = playerOne === computer? "Tie Game!":
                     playerOne === "rock" && computer === "paper"?
                     `playerOne: ${playerOne} \n computer: ${computer} \n Computer Win!`:

                     playerOne === "paper" && computer === "scissors"?
                     `playerOne: ${playerOne} \n computer: ${computer} \n Computer Win! `:

                     playerOne === "scissors" && computer === "rock"?
                     `playerOne: ${playerOne} \n computer: ${computer} \n Computer Win! `:
                     `playerOne: ${playerOne} \n computer: ${computer} \n Player Win! `;

            alert(result);

            let playAgain = confirm("Play Again");
            playAgain? location.reload(): alert("Ok thanks for playing.");
        }else{
            alert("You didn't enter rock, paper or scicssors.");
        }
   }else{
    alert("I guess you changed your mind maybe next time.")
}}else{
    alert("Ok, maybe next time.");
   }
