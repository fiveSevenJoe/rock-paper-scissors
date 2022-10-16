const container = document.querySelector(".container");

const pShoot = document.querySelector(".shoot-player");

const cShoot = document.querySelector(".shoot-comp");

const win1 = document.querySelector(".win1");

const arr = ["Rock", "Paper", "Scissors"];

function rock() {
  const guessRock = (pShoot.innerHTML = "Rock");

  const compGuessR = (cShoot.innerHTML =
    arr[Math.floor(Math.random() * arr.length)]);

  if (compGuessR === guessRock) {
    return (win1.innerHTML = "  Tied!");
  } else if (compGuessR == arr[1]) {
    return (win1.innerHTML = "You Lose!");
  } else if (compGuessR == arr[2]) {
    return (win1.innerHTML = "You Win!");
  }
}

function paper() {
  const guessPaper = (pShoot.innerHTML = "Paper");

  const computerGuessP = (cShoot.innerHTML =
    arr[Math.floor(Math.random() * arr.length)]);

  if (computerGuessP === guessPaper) {
    return (win1.innerHTML = "  Tied!");
  } else if (computerGuessP == arr[2]) {
    return (win1.innerHTML = "You Lose!");
  } else if (computerGuessP == arr[0]) {
    return (win1.innerHTML = "You Win!");
  }
}

function scissors() {
  const guessScisors = (pShoot.innerHTML = "Scissors");

  const computerGuessSc = (cShoot.innerHTML =
    arr[Math.floor(Math.random() * arr.length)]);

  if (computerGuessSc === guessScisors) {
    return (win1.innerHTML = "  Tied!");
  } else if (computerGuessSc == arr[0]) {
    return (win1.innerHTML = "You Lose!");
  } else if (computerGuessSc == arr[1]) {
    return (win1.innerHTML = "You Win!");
  }
}
