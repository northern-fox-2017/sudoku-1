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
      this.arr.push([]);
      for(let j=0; j<9; j++) {
        this.arr[i].push(this.board_string[counter++])
      }
    }
    // console.log(this.arr);
    return this.arr
  }


  checkHorizontal(baris, angka) {
    for(let i=0; i<9; i++) {
      if(this.arr[i][baris] == angka) {
      return false
      }
    }
    return true;
  }


  checkVertical(kolom, angka) {
    for(let i=0; i<9; i++) {
      if(this.arr[i][kolom] == angka) {
        return false;
      }
    }
    return true;
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
console.log(game.checkHorizontal(6,5));
console.log(game.checkHorizontal(3,5));
console.log(game.checkVertical(1,1));
console.log(game.checkVertical(1,5));


// console.log(checker());
