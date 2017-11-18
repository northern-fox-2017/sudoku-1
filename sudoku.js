"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
    this.row = Math.sqrt(this.board_string.length)
    this.col = this.row
    this.rowArea = Math.sqrt(this.row)
    this.colArea = this.rowArea
    this.arrBoard = []
  }

  isCheckRow(row, value) {
    return this.arrBoard[row].indexOf(value) > -1;
  }

  isCheckCol(col, value) {
    for (let i = 0; i < this.arrBoard.length; i++) {
      if (Number(this.arrBoard[i][col]) === value) {
        return true;
      }
    }
    return false;
  }

  isCheckArea(row, col, value) {
    let rowScope = 0, colScope = 0;

    while (row >= rowScope + this.rowArea) {
      rowScope += this.rowArea;
    }

    while (col >= colScope + this.colArea) {
      colScope += this.colArea;
    }

    for (let i = rowScope; i < rowScope + this.rowArea; i++) {
      for (let j = colScope; j < colScope + this.colArea; j++) {
        if (Number(this.arrBoard[i][j]) === value) {
          return true;
        }
      }
    }
    return false;
  }

  isAvailableValue(row, col, value) {
    return (this.isCheckRow(row, value) || this.isCheckCol(col, value) || this.isCheckArea(row, col, value))
  }

  emptyPositions() {
    let newBoard = this.board(),
        arr = [];

    for (let i = 0; i < newBoard.length; i++) {
      for (let j = 0; j < newBoard[i].length; j++) {
        if (Number(newBoard[i][j]) === 0) {
          arr.push([i, j]);
        }
      }
    }
    return arr;
  }

  solve() {
    let arrBoardEmpty = this.emptyPositions(),
        rowEmpty, colEmpty, value, isFound;

    this.board();
    for (let k = 0; k < arrBoardEmpty.length;) {
      rowEmpty = arrBoardEmpty[k][0];
      colEmpty = arrBoardEmpty[k][1];
      value = this.arrBoard[rowEmpty][colEmpty] + 1;
      isFound = false;

      while (!isFound && value <= this.row) {
        if (!this.isAvailableValue(rowEmpty, colEmpty, value)) {
          isFound = true;
          this.arrBoard[rowEmpty][colEmpty] = value;
          k++;
        } else {
          value++;
        }
      }

      if (!isFound) {
        this.arrBoard[rowEmpty][colEmpty] = 0;
        k--;
      }
    }
    console.log(this.arrBoard);
  }

  // Returns a string representing the current state of the board
  board() {
    let idx = 0;

    this.arrBoard = [];
    for (let i = 0; i < this.row; i++) {
      this.arrBoard.push([]);
      for (let j = 0; j < this.col; j++) {
        this.arrBoard[i].push(Number(this.board_string[idx++]));
      }
    }
    return this.arrBoard;
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

let time = new Date()
var game = new Sudoku(board_string);

// Remember: this will just fill out what it can and not "guess"
console.log(game.board());
console.log(`SUDOKU BOARD (start time: \x1b[33m${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}\x1b[0m)\n`);
game.solve();
console.log(`SUDOKU SOLVED (end time: \x1b[32m${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}\x1b[0m)`);
