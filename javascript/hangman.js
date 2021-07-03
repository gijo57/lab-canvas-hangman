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
    this.checkWinner();
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
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (hangman.checkIfLetter(key) && !hangman.checkClickedLetters(key)) {
    hangman.letters.push(key);
    hangman.addCorrectLetter(key) || hangman.addWrongLetter(key);
    hangman.checkGameOver();
  }
  console.log(hangman.secretWord, hangman.errorsLeft);
});
