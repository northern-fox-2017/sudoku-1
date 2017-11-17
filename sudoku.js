"use strict"

class Sudoku {
  constructor(board_string) {
      this.board_string = board_string;
      this.result = [];
  }

  solve() {
    let penampung = [];
    for (let i = 0; i < this.result.length; i++) {
      for (let j = 0; j < this.result[i].length; j++) {
        if (this.result[i][j] == '0'){
          // penampung.push(this.result[i][j])
          for (let k = 0; k <9; k++) {
              if (!this.checkRow(k, i) && cekkolom  && cekregio){
                penampung.push('0')
              }
          }
        }
      }
    }
    return penampung;
  }

  // Returns a string representing the current state of the board
  board() {
    let counter = 0;
    for (let i = 0; i < 9; i++) {
      this.result.push([]);
        for (let j = 0; j < 9; j++) {
          this.result[i].push(this.board_string[counter])
          counter++;
        }
      }
  }

  checkRow(value, row){
    return  this.result[row].indexOf(value) !== -1;
  }
  checkCol(value, row){
    return  this.result[row].indexOf(value) !== -1;
  }
  checkReg(value, row){
    return  this.result[row].indexOf(value) !== -1;
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
let fs = require('fs')
let board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

let game = new Sudoku('105802000090076405200400819019007306762083090000061050007600030430020501600308900')
// console.log(game)
// Remember: this will just fill out what it can and not "guess"
// game.solve()

console.log(game.board())
console.log(game.solve())
// console.log(game.checkRow(3, 5));
