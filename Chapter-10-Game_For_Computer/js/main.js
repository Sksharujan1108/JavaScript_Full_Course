// Get Data
let playGame = confirm("Shall We Go Rock, Paper And Scissors Game");
if (playGame) {
  // player Choice Enter so use prompt
  let playerChoice = prompt("Enter Rock Or Paper or Scissor");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice == 1
          ? "Rock"
          : computerChoice == 2
          ? "Paper"
          : "Scissors";

      let result =
        playerOne === computer
          ? "Tie Game !!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne : ${playerOne}\nComputer: ${computer}\nComputer Win!!!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne : ${playerOne}\nComputer: ${computer}\nComputer Win!!!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne : ${playerOne}\nComputer: ${computer}\nComputer Win!!!`
          : `playerOne : ${playerOne}\nComputer: ${computer}\nPlayer Win!!`;
      alert(result); // Computer win
      let playAgain = confirm("Play Game !!!");
      playAgain ? location.reload() : alert("ok Thanks For Playing");
    } else {
      alert("You Didn't Enter Rock Or Paper or Scissor");
    }
  } else {
    alert("I Guess you change your Mind Maybe Next Time ");
  }
} else {
  alert("Ok Thanks for Not Playing");
}
