const gameOverImg = new Image();
gameOverImg.src = './images/gameover.png';
const winnerImg = new Image();
winnerImg.src = './images/awesome.png';

class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
    } else {
      this.context.font = '30px sans-serif';
      letters.forEach((letter, i) =>
        this.context.fillText(letter.toUpperCase(), 600 + i * 40, 100)
      );
    }
  }

  drawHangman(errorsLeft) {}

  gameOver() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(gameOverImg, 300, 250);
  }

  winner() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(winnerImg, 150, 100);
  }
}
