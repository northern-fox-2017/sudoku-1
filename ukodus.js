const fs = require('fs');
const board_string = fs
  .readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0];

class Sudoku {
  constructor(str) {
    this.str = str;
    this.zeroPosition = [];
  }

  solve() {
    for (let i = 0; i < this.str.length; i++) {
      if (this.str[i] === '0') {
        this.zeroPosition.push(i);
      }
    }

    return this.zeroPosition;
  }

}

const game = new Sudoku(board_string);

// Remember: this will just fill out what it can and not "guess"
console.log(game.solve());