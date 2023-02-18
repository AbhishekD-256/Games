const girdBox = document.querySelectorAll(".grid");
const title = document.querySelector("h1");
const patternArray = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const playerO = "O";
const playerX = "X";
let currPlayer = playerO;
let gameOver = false;
girdBox.forEach((gird) => {
  gird.addEventListener("click", function (e) {
    if (gameOver) return;
    const idArray = e.target.dataset.id.split("-");
    const row = +idArray[0];
    const column = +idArray[1];
    patternArray[row][column] = currPlayer;
    if (e.target.textContent) return;
    e.target.textContent = currPlayer;
    checkGame();
    if (checkTie()) {
      title.textContent = "Game is Tied Restart";
    }
  });
});

function checkTie() {
  // tie check
  for (let i = 0; i < patternArray.length; i++) {
    for (let j = 0; j < patternArray[i].length; j++) {
      if (patternArray[i][j] == "") {
        return false;
      }
    }
  }
  return true;
}

function checkGame() {
  // row check
  for (let row = 0; row < 3; row++) {
    if (
      patternArray[row][0] === patternArray[row][1] &&
      patternArray[row][1] === patternArray[row][2] &&
      patternArray[row][0] !== ""
    ) {
      title.textContent = `Player'${currPlayer} is winner`;
      gameOver = true;
    }
  }

  //column check
  for (let col = 0; col < 3; col++) {
    if (
      patternArray[0][col] === patternArray[1][col] &&
      patternArray[1][col] === patternArray[2][col] &&
      patternArray[0][col] !== ""
    ) {
      title.textContent = `Player'${currPlayer} is winner`;
      gameOver = true;
    }
  }

  //diagonal check
  if (
    patternArray[0][0] === patternArray[1][1] &&
    patternArray[1][1] == patternArray[2][2] &&
    patternArray[0][0] !== ""
  ) {
    title.textContent = `Player'${currPlayer} is winner`;
    gameOver = true;
  }

  //Anti diagonal
  if (
    patternArray[0][2] === patternArray[1][1] &&
    patternArray[1][1] == patternArray[2][0] &&
    patternArray[1][1] !== ""
  ) {
    title.textContent = `Player'${currPlayer} is winner`;
    gameOver = true;
  }
  currPlayer = currPlayer === playerO ? playerX : playerO;
}
