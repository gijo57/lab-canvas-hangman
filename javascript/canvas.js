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
    if (errorsLeft === 0) {
      this.gameOver();
    } else {
      this.context.font = '30px sans-serif';
      letters.forEach((letter, i) =>
        this.context.fillText(letter.toUpperCase(), 600 + i * 40, 100)
      );
    }
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        this.context.beginPath();
        this.context.moveTo(100, 600);
        this.context.lineTo(300, 600);
        this.context.stroke();
        this.context.lineTo(200, 550);
        this.context.closePath();
        this.context.stroke();
        break;
      case 8:
        this.context.moveTo(200, 550);
        this.context.lineTo(200, 200);
        this.context.stroke();
        break;
      case 7:
        this.context.lineTo(450, 200);
        this.context.stroke();
        break;
      case 6:
        this.context.lineTo(450, 250);
        this.context.stroke();
        break;
      case 5:
        this.context.arc(450, 280, 30, -0.5 * Math.PI, 1.5 * Math.PI);
        this.context.stroke();
        break;
      case 4:
        this.context.moveTo(450, 310);
        this.context.lineTo(450, 450);
        this.context.stroke();
        break;
      case 3:
        this.context.lineTo(500, 500);
        this.context.stroke();
        break;
      case 2:
        this.context.moveTo(450, 450);
        this.context.lineTo(400, 500);
        this.context.stroke();
        break;
      case 1:
        this.context.moveTo(450, 350);
        this.context.lineTo(500, 340);
        this.context.stroke();
        break;
      case 0:
        this.context.moveTo(450, 350);
        this.context.lineTo(400, 340);
        this.context.stroke();
    }
  }

  gameOver() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(gameOverImg, 200, 200);
  }

  winner() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(winnerImg, 150, 100);
  }
}
