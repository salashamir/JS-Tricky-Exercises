function guessingGame() {
  let randomNum = Math.floor(Math.random() * 100);
  let guessedCorrect = false;
  let guessCount = 0;

  return function (guess) {
    if (guessedCorrect) {
      return "The game is over, you already won!";
    }
    if (guess > randomNum) {
      guessCount++;
      return `${guess} is too high!`;
    }
    if (guess < randomNum) {
      guessCount++;
      return `${guess} is too low!`;
    }
    if (guess === randomNum) {
      guessCount++;
      guessedCorrect = true;
      return `You win! You found ${randomNum} in ${guessCount} guesses.`;
    }
  };
}

module.exports = { guessingGame };
