"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string;
    this.papan = [];
  }

  solve() {
    console.log(this.papan);
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if(this.papan[i][j] == 0) {
      for (let h = 1; h <= 9; h++) {
        if(this.checkRow(i,h) && this.checkCol(j,h) && this.checkArea(i,j,h)){
          this.papan[i][j] = String(h);
        }
      }
    }
  }
}
return this.papan;
  }

  // Returns a string representing the current state of the board
  board() {
    for (var i = 0; i <= this.board_string.length-1; i+= 9) {
      this.papan.push(this.board_string.substr(i,9).split(''));
    }
    console.log(this.papan);
  }

  checkRow(row,input){
    let isRow = true;
    for (var k = 0; k < this.papan.length; k++) {
      if(this.papan[row][k] == input){
        isRow = false;
      }
    }
    return isRow;
  }

  checkCol(col,input){
    let isCol = true;
    for (var m = 0; m < this.papan.length; m++) {
      if(this.papan[m][col] == input){
        isCol = false;
      }
    }
    return isCol;
  }

  checkArea(row,col,input){
    let isArea = true;
    col = Math.floor(col/3)*3;
    row = Math.floor(row/3)*3;
    for (var i = row; i < (3 + row); i++) {
      for (var j = col; j < (3 + col); j++) {
        if(this.papan[i][j] == input){
          isArea = false;
        }
      }
    }
    return isArea;
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
// game.solve()
console.log(game.board());
console.log(game.checkRow(0,4));
// console.log(game.checkCol(1,4));
// console.log(game.checkArea(0,1,2));
// console.log(game.checkValue(0,1,4));
// console.log(game.board().cekRow());
console.log(game.solve());
