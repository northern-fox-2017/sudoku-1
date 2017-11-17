"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string;
    this.papan = [];
    this.angka = true;
  }

  solve() {

  }

  // Returns a string representing the current state of the board
  board() {
    for (var i = 0; i <= this.board_string.length-1; i+= 9) {
      this.papan.push(this.board_string.substr(i,9).split(''));
    }
    console.log(this.papan);
  }

  checkRow(row,input){
    for (var k = 0; k < 9; k++) {
      if(this.papan[row][k] == input){
        this.angka = false;
      }
    }
    return this.angka;
  }

  checkCol(col,input){
    for (var m = 0; m < 9; m++) {
      if(this.papan[m][col] == input){
        this.angka = false;
      }
    }
    return this.angka;
  }

  checkArea(row,col,input){
    col = Math.floor(col/3)*3;
    row = Math.floor(row/3)*3;
    for (var i = row; i < (3 + row); i++) {
      for (var j = col; j < (3 + col); j++) {
        if(this.papan[i][j] == input){
          this.angka = false;
        }
      }
    }
    return this.angka;
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
console.log(game.board());
// console.log(game.checkRow(0,7));
// console.log(game.checkCol(0,3));
console.log(game.checkArea(8,8,3));
// console.log(game.board().cekRow());
