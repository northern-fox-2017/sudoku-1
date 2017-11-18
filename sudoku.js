"use strict"

class Sudoku {
  constructor(board_string) {
    debugger
    this.board_string = board_string;
    this.boolean = true;
    this.boardArr = []
  }

  solve() {
  debugger
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.boardArr[i][j] == 0) {
          for (let k = 1; k <= 9; k++) {
            if(this.checkRow(i, k) && this.checkCol(j,k) && this.checkArea(i,j,k)) {
                this.boardArr[i][j] = String(k);
                k = 10;
            }
          }
        }
      }
    }
    return this.boardArr;
  }

  // Returns a string representing the current state of the board
  board() {
    debugger
    let indexJ = 0;

    for (let i = 0; i < 9; i++) {
      this.boardArr.push([]);
      for(let j = 0; j < 9 ; j++) {
        this.boardArr[i].push(this.board_string[indexJ]);
        indexJ++;
      }
    }
    return this.boardArr;
  }

  checkRow(row, input) {
    for (let i = 0; i < 9; i++) {
      if(this.boardArr[row][i] == input) {
          return false;
      }
    }

    return this.boolean;
  }

  checkCol(col, input) {
    debugger
    for (let i = 0; i < 9; i++) {
      if(this.boardArr[i][col] == input) {
        return false;
      }
    }

    return this.boolean;
  }

  checkArea(row, col, input) {
    row = Math.floor(row / 3) * 3
    col = Math.floor(col / 3) * 3
    for (let i = row; i < (row + 3); i++) {
      for (let j = col; j < (col + 3); j++) {
        if(this.boardArr[i][j] == input) {
          return false;
        }
      }
    }
    return this.boolean;
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku('105802000090076405200400819019007306762083090000061050007600030430020501600308900')

// Remember: this will just fill out what it can and not "guess"
// game.solve()

console.log(game.board())
// console.log(game.checkRow(1, 5));
// console.log(game.checkCol(1, 8));
// console.log(game.checkArea(2, 5, 5));
console.log(game.solve());
