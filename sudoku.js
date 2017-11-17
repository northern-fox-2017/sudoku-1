"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string;
  }

  solve() {

  }

  // Returns a string representing the current state of the board
  board() {
    let boardArr = [];
    let indexJ = 0;

    for (let i = 0; i < 9; i++) {
      boardArr.push([]);

      for(let j = 0; j < 9 ; j++) {
        boardArr[i].push(this.board_string[indexJ]);
        indexJ++;
      }
    }
    console.log(indexJ);
    return boardArr;
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
game.solve()

console.log(game.board())
