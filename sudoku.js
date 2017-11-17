const fs = require('fs');
const board_string = fs
  .readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0];

class Sudoku {
  constructor(str) {
    this.str = str;
    this.block = [];
  }

  solve() {
    let counter = 0;

    for (let i = 0; i < 3; i++) {
      this.block.push([], [], []);

      for (let j = 0; j < 3; j++) {
        this.block[i * 3 + j] = this.str.split('').slice(counter, counter + 9);
        counter += 9;
      }
    }

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {

        if (this.block[i][j] === String(0)) {
          for (let k = 0; k < 9; k++) {

            if (!this.rowCheck(i, k) &&
             !this.columnCheck(i, j, k) &&
              !this.groupCheck(i, j, k)) {
              this.block[i].splice(j, 1, String(k));
            }
          }
        }
      }
    }
  }

  // Returns a string representing the current state of the board
  board() {
    return this.block;
  }

  rowCheck(row, num) {
    return this.block[row].indexOf(num.toString()) !== -1;
  }

  columnCheck(row, column, num) {
    return this.block[row][column] === String(num);
  }

  groupCheck(row, column, num) {
    row = Math.floor(row / 3) * 3;
    column = Math.floor(row / 3) * 3;

    for (let i = row; i < row + 3; i++) {
      for (let j = column; j < column + 3; j++) {
        if (this.block[i][j] === String(num)) {
          return 1;
        }
      }
    }

    return 0;
  }
}

const game = new Sudoku(board_string);

// Remember: this will just fill out what it can and not "guess"
console.log(game.solve());
console.log(game.board());
// console.log(game.rowCheck(0, 3));
// console.log(game.columnCheck(0, 0, 3));
// console.log(game.groupCheck(4, 0, 1));