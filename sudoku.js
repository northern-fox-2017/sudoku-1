"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string;
  }

  solve() {}

  // Returns a string representing the current state of the board
  board() {
    //bikin board
  let papan = [];
    for (var i = 0; i <= this.board_string.length-1; i+= 9) {
      papan.push(this.board_string.substr(i,9).split(''));
    }
    return papan;
  }

  cekRow(){
    //cek satu baris dulu ada 1-9 gak?
    //perulangan tiap i
    
  }
}


// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku('105802000090076405200400819019007306762083090000061050007600030430020501600308900');

// Remember: this will just fill out what it can and not "guess"
game.solve()

console.log(game.board())
