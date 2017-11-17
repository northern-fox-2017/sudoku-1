"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
  }

  solve() {}

  // Returns a string representing the current state of the board
  board() {
    let arr = [], col = 9, row = 9, idx = 0
    for (let i = 0; i < row; i++) {
      arr.push([])
      for (let j = 0; j < col; j++) {
        arr[i].push(Number(this.board_string[idx++]))
      }
    }
    return arr;
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
// game.solve()

console.log(game.board())
