let randomNumber = Math.floor(Math.random() * 20) + 1;

console.log(randomNumber);

function message(msg) {
  document.querySelector(".message").textContent = msg;
}
document.querySelector(".check").addEventListener("click", function () {
  let inputValue = Number(document.querySelector(".guess").value);

  if (!inputValue) {
    message("please enter a number...");
  } else if (inputValue === randomNumber) {
    message("***You Won***");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = inputValue;
    if (
      document.querySelector(".score").textContent >
      document.querySelector(".highscore").textContent
    ) {
      document.querySelector(".highscore").textContent =
        document.querySelector(".score").textContent;
    }
  } else if (inputValue !== randomNumber) {
    if (document.querySelector(".score").textContent >= 1) {
      inputValue < randomNumber
        ? message("*** low ***")
        : message("*** high ***");
      document.querySelector(".score").textContent -= 1;
    } else {
      message("**you lost**");
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = "20";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  document.querySelector(".guess").value = "";
  message("Start guessing...");
});
