"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string;
    this.arr = [];
  }

  solve() {}

  // Returns a string representing the current state of the board
  board() {
    let counter = 0;
    for(let i=0; i<9; i++) {
      // var baru = this.board_string.split('')
      this.arr.push([]);
      for(let j=0; j<9; j++) {
        this.arr[i].push(this.board_string[counter++])
      }
    }
    // console.log(this.board_string[0]);
    return this.arr
  }

}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs');
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)
// Remember: this will just fill out what it can and not "guess"
// game.solve()

console.log(game.board())
