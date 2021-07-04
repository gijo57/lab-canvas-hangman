class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(340 + i * 60, 700);
      this.context.lineTo(380 + i * 60, 700);
      this.context.stroke();
      this.context.closePath();
    }
  }

  writeCorrectLetter(index) {
    this.context.font = '30px sans-serif';
    this.context.fillText(
      this.secretWord[index].toUpperCase(),
      345 + index * 60,
      695
    );
  }

  writeWrongLetter(letters, errorsLeft) {
    if (errorsLeft < 0) {
      this.gameOver();
    }

    this.context.font = '30px sans-serif';
    letters.forEach((letter, i) =>
      this.context.fillText(letter.toUpperCase(), 600 + i * 40, 100)
    );
  }

  drawHangman(errorsLeft) {}

  gameOver() {
    console.log('you lost');
  }

  winner() {
    console.log('you won');
  }
}
