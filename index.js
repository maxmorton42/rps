
var userChoice = "";
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var myChoice = document.getElementById("myChoice");
var verdict = document.getElementById("verdict");

rock.addEventListener("click", function(){
  userChoice = 0;
  myChoice.innerHTML = "You chose: Rock";
  checkComputer();
  compare();
});
paper.addEventListener("click", function(){
  userChoice = 1;
  myChoice.innerHTML = "You chose: Paper";
  checkComputer();
  compare();
});
scissor.addEventListener("click", function(){
  userChoice = 2;
  myChoice.innerHTML = "You chose: Scissors";
  checkComputer();
  compare();
});



function checkComputer() {
  //  random number between 0-2 
  randomNum = Math.floor(Math.random() * 3);

  // generate a random number
  if (randomNum === 0) { 
    computer = "Rock";
  } else if (randomNum === 1) { 
    computer = "Paper";
  } else { 
    computer = "Scissors";
  }
  cpuChoice.innerHTML = "Computer chose: " + computer;
}

function winner() {
  verdict.innerHTML = " You Win!";
}
function loser() {
  verdict.innerHTML = " You Lose";
}
function draw() {
  verdict.innerHTML = " We Tied";
}

function compare() {
  //  rock/tie
  if (userChoice === randomNum) { 
    draw();
  } else if (userChoice === 0 && randomNum === 1) { 
    loser();
  } else if (userChoice === 0 && randomNum === 2) { 
    winner();
  }

  //  paper  
  if (userChoice === 1 && randomNum === 0) { 
    winner();
  }
  else if (userChoice === 1 && randomNum === 2) { 
    loser();
  }

  //  scissors
  if (userChoice === 2 && randomNum === 0) { 
    loser();
  } else if (userChoice === 2 && randomNum === 1) { 
    winner();
  }

  

}