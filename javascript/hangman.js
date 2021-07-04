class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(letter) {
    return /[a-zA-Z]/.test(letter);
  }

  checkClickedLetters(letter) {
    return this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    if (this.secretWord.includes(letter)) {
      this.guessedLetters = this.guessedLetters.concat(letter);
    }
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.errorsLeft--;
    }
  }

  checkGameOver() {
    return Boolean(this.errorsLeft);
  }

  checkWinner() {
    return this.secretWord
      .split('')
      .every((char) => this.guessedLetters.includes(char));
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', (event) => {
    hangman = new Hangman([
      'node',
      'javascript',
      'react',
      'miami',
      'paris',
      'amsterdam',
      'lisboa'
    ]);

    hangman.secretWord = hangman.pickWord();
    console.log(hangman.secretWord);
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (hangman.checkIfLetter(key) && !hangman.checkClickedLetters(key)) {
    hangman.letters.push(key);
    hangman.addCorrectLetter(key) || hangman.addWrongLetter(key);
    hangman.checkGameOver();
  }
  if (hangman.secretWord.includes(key)) {
    hangman.secretWord.split('').forEach((char, i) => {
      if (char === key) {
        hangmanCanvas.writeCorrectLetter(i);
      }
    });
  }

  hangmanCanvas.writeWrongLetter(
    hangman.letters.filter(
      (l) => !hangman.guessedLetters.split('').includes(l)
    ),
    hangman.errorsLeft
  );

  if (hangman.checkWinner()) {
    hangmanCanvas.winner();
  }
});
