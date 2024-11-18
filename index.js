const info = document.getElementById("instructions");
const gameInstr = document.getElementById("game-instruction");
const playerInstr = document.getElementById("player-instruction");
const score = document.getElementById("score");
const cells = document.getElementsByClassName("cell");
const endMessage = document.getElementById("textMessage");
endMessage.innerText = `X's turn!`;
endMessage.style.textAlign = "center";

const players = ["X", "O"];
let currentPlayer = players[0];
let playerXScore = 0;
let playerOScore = 0;
let gameOver = false;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Adding click event listeners to all cells
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", () => {
    if (cells[i].innerText !== "" || gameOver) {
      return;
    }

    cells[i].innerText = currentPlayer;

    gameInstr.classList.add("hidden");
    playerInstr.classList.add("hidden");

    if (winStatus(currentPlayer)) {
      endMessage.innerText = `Game over! Player ${currentPlayer} wins!`;

      if (currentPlayer == players[0]) {
        playerXScore = playerXScore + 1;
      } else {
        playerOScore = playerOScore + 1;
      }

      score.innerText = `Score: Player X - ${playerXScore} : Player O - ${playerOScore}`;
      gameOver = true;
      return;
    }

    if (drawStatus()) {
      endMessage.innerText = `Game is tied`;
      gameOver = true;
      return;
    }

    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    if (currentPlayer == players[0]) {
      endMessage.innerText = "X's turn";
    } else {
      endMessage.innerText = "O's turn";
    }
  });
}

// Function to check which player won
const winStatus = () => {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      cells[a].innerText === currentPlayer &&
      cells[b].innerText === currentPlayer &&
      cells[c].innerText === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

// Function to check the draw status
const drawStatus = () => {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerText === "") {
      return false;
    }
  }
  return true;
};

// Fnuction for play again button
const playAgain = () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
  endMessage.innerText = "X's turn";
  currentPlayer = players[0];
  gameOver = false;
};

// Function for the reset button
const resetButton = () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
  endMessage.innerText = "X's turn";
  currentPlayer = players[0];
  gameOver = false;
};

document.getElementById("reset").addEventListener("click", resetButton);
document.getElementById("playAgain").addEventListener("click", playAgain);
