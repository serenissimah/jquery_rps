$(document).ready( function() {
  $( "img" ).click(function(e) {
    var userChoice = $(this).attr("id");
    alert("You chose " + userChoice + ".\nGood luck!");
    var choices = ["rock", "paper", "scissors"];
    var compChoice = choices[Math.floor(Math.random()*choices.length)];
    alert("The computer chose " + compChoice + "!");

    switch(userChoice) {
      case "rock":
          if (userChoice == "rock" && compChoice == "paper") {
            alert("The computer won. Paper covers rock!");         
          } else if (userChoice == "rock" && compChoice == "scissors") {
            alert("You won. Rock crushes scissors!");
          } else {
            alert("Rock vs. Rock! This is a tie!");

          }
        break;
        case "paper":
          if (userChoice == "paper" && compChoice == "rock") {
            alert("You won. Paper covers rock!");
          } else if (userChoice == "paper" && compChoice == "scissors") {
            alert("The computer won. Scissors cuts paper!");
          } else {
            alert("Paper vs. Paper! This is a tie!");
          }
        break;
        case "scissors":
          if (userChoice == "scissors" && compChoice == "rock") {
            alert("Computer won. Rock crushes scissors!");
          } else if (userChoice == "scissors" && compChoice == "paper") {
            alert("You won. Scissors cuts paper!");
          } else {
            alert("Scissors vs. Scissors! This is a tie!");
          }
        break;
      }
  });
});