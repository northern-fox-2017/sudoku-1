const fs = require('fs');
const board_string = fs
  .readFileSync('set-01_sample.unsolved.txt')
  // .readFileSync('set-02_project-euler_50-easy-puzzles.txt')
  .toString()
  .split("\n")[0];

class Sudoku {
  constructor(str) {
    this.str = str;
    this.block = [];
    this.zeroPosition = [];
  }

  solve() {
    this.initializeBoard();
    this.trackZero();

    // with backtrack
    /* const maximumValue = 9;
    for (let i = 0; i < this.zeroPosition.length;) {
      const row = this.zeroPosition[i][0];
      const column = this.zeroPosition[i][1];
      let value = Number(this.block[row][column]) + 1;
      let found = 0;

      while (!found && value <= maximumValue) {
        if (!this.rowCheck(row, value) &&
            !this.columnCheck(column, value) &&
            !this.groupCheck(row, column, value)) {
          this.block[row][column] = value + '';
          found = 1;
          i++;
        } else {
          value++;
        }
      }
      if (!found) {
        this.block[row][column] = '0';
        i--;
      }
    } */

    // without backtrack
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {

        if (this.block[i][j] === '0') {
          for (let k = 1; k <= 9; k++) {

            if (!this.rowCheck(i, k) && !this.columnCheck(j, k) && !this.groupCheck(i, j, k)) {
              this.block[i][j] = k + '';
            }
          }
        }
      }
    }

    return this.board();
  }

  // Returns a string representing the current state of the board
  board() {
    return this.block.join(',').split(',').join('');
  }

  initializeBoard() {
    let counter = 0;

    for (let i = 0; i < 3; i++) {
      this.block.push([], [], []);

      for (let j = 0; j < 3; j++) {
        this.block[i * 3 + j] = this.str.split('').slice(counter, counter + 9);
        counter += 9;
      }
    }
  }

  trackZero() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.block[i][j] === '0') {
          this.zeroPosition.push([i, j]);
        }
      }
    }
  }

  rowCheck(row, value) {
    return this.block[row].indexOf(value + '') !== -1;
  }

  columnCheck(column, value) {
    for (let i = 0; i < 9; i++) {
      if (this.block[i][column] === value + '') {
        return 1;
      }
    }

    return 0;
  }

  groupCheck(row, column, value) {
    row = Math.floor(row / 3) * 3;
    column = Math.floor(row / 3) * 3;

    for (let i = row; i < row + 3; i++) {
      for (let j = column; j < column + 3; j++) {
        if (this.block[i][j] === value + '') {
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
// console.log(game.rowCheck(0, 3));
// console.log(game.columnCheck(0, 3));
// console.log(game.groupCheck(1, 2, 3));