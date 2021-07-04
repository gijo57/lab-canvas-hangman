class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.letterLocation = 340;
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
    console.log(index);
  }

  writeWrongLetter(letters, errorsLeft) {
    this.context.font = '30px sans-serif';
    letters.forEach((letter, i) =>
      this.context.fillText(letter.toUpperCase(), 600 + i * 40, 100)
    );
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
