elSscore = document.querySelector(".head__div__score");
elPaper = document.querySelector(".paper");
elScissors = document.querySelector(".scissors");
elRock = document.querySelector(".rock");
elMain = document.querySelector(".main");
elPlayAgain = document.querySelector(".result-btn");
elResultRelease = document.querySelector(".result-release");
elUSerPicked = document.querySelector(".user-picked");
elPcPicked = document.querySelector(".pc-picked");
elAppendImg = document.querySelector(".main__div");
elCloseRule = document.querySelector(".x-icon");
elShowRule = document.querySelector(".rules-div");
elRule = document.querySelector(".rule-1");

//randomly selecteed
const pcselected = function () {
  const choice = ["paper", "rock", "scissor"];
  let random = Math.trunc(Math.random() * 3);
  let pcchoice = choice[random];

  return pcchoice;
};

let Userchoice = "";
let score = 0;
let image = document.createElement("img");
image.setAttribute("class", "pc-select");
image.setAttribute("class", "pc-select-530");

elAppendImg.appendChild(image);

//paper
elPaper.addEventListener("click", (evt) => {
  evt.preventDefault();

  Userchoice = "paper";
  elMain.classList.remove("main-triangle");
  elScissors.style.display = "none";
  elRock.style.display = "none";
  elUSerPicked.textContent = "User picked paper";
  let result = pcselected();

  if (result == Userchoice) {
    elResultRelease.textContent = "Draw";
    elSscore.textContent = score;
    elPcPicked.textContent = "The PC picked paper";
    image.setAttribute("src", "./images/paper.png");
  } else if (result == "rock") {
    elResultRelease.textContent = "You Win";
    elSscore.textContent = score += 1;
    elPcPicked.textContent = "The PC picked rock";
    image.setAttribute("src", "./images/Rock.png");
  } else if (result == "scissor") {
    elResultRelease.textContent = "You Lose";
    elSscore.textContent = score -= 1;
    elPcPicked.textContent = "The PC picked scissor";
    image.setAttribute("src", "./images/scissors.png");
  }
  elPlayAgain.classList.remove("result-btn-none");
});

//scissor

elScissors.addEventListener("click", (evt) => {
  evt.preventDefault();

  Userchoice = "scissor";
  elMain.classList.remove("main-triangle");
  elPaper.style.display = "none";
  elRock.style.display = "none";
  elUSerPicked.textContent = "User picked scissor";
  let result = pcselected();
  image.setAttribute("class", "pc-select");
  elScissors.classList.add("top-scissor");

  if (result == Userchoice) {
    elResultRelease.textContent = "Draw";
    elSscore.textContent = score;
    elPcPicked.textContent = "The PC picked scissor";
    image.setAttribute("src", "./images/scissors.png");
  } else if (result == "rock") {
    elResultRelease.textContent = "You Lose";
    elSscore.textContent = score -= 1;
    elPcPicked.textContent = "The PC picked rock";
    image.setAttribute("src", "./images/Rock.png");
  } else if (result == "paper") {
    elResultRelease.textContent = "You win";
    elSscore.textContent = score += 1;
    elPcPicked.textContent = "The PC picked paper";
    image.setAttribute("src", "./images/paper.png");
  }
  elPlayAgain.classList.remove("result-btn-none");
});

//rock
elRock.addEventListener("click", (evt) => {
  evt.preventDefault();

  image.setAttribute("class", "pc-select");
  elRock.classList.add("top-scissor");
  Userchoice = "rock";
  elMain.classList.remove("main-triangle");
  elPaper.style.display = "none";
  elScissors.style.display = "none";
  elUSerPicked.textContent = "User picked rock";
  let result = pcselected();

  if (result == Userchoice) {
    elResultRelease.textContent = "Draw";
    elSscore.textContent = score;
    elPcPicked.textContent = "The PC picked rock";
    image.setAttribute("src", "./images/Rock.png");
  } else if (result == "scissor") {
    elResultRelease.textContent = "You Win";
    elSscore.textContent = score += 1;
    elPcPicked.textContent = "The PC picked scissor";
    image.setAttribute("src", "./images/scissors.png");
  } else if (result == "paper") {
    elResultRelease.textContent = "You Lose";
    elSscore.textContent = score -= 1;
    elPcPicked.textContent = "The PC picked paper";
    image.setAttribute("src", "./images/paper.png");
  }
  elPlayAgain.classList.remove("result-btn-none");
});

elPlayAgain.addEventListener("click", (evt) => {
  evt.preventDefault();

  elMain.classList.add("main-triangle");
  elScissors.style.display = "block";
  elRock.style.display = "block";
  elPaper.style.display = "block";
  elResultRelease.textContent = "";
  elSscore.textContent = score;
  elUSerPicked.textContent = "";
  elPcPicked.textContent = "";
  image.setAttribute("src", "");
  image.setAttribute("class", "");
  elScissors.classList.remove("top-scissor");
  elRock.classList.remove("top-scissor");
  elPlayAgain.classList.add("result-btn-none");
});

elCloseRule.addEventListener("click", (evt) => {
  evt.preventDefault();
  elRule.classList.add("rule-none");
});

elShowRule.addEventListener("click", (evt) => {
  evt.preventDefault();

  elRule.classList.remove("rule-none");
});
