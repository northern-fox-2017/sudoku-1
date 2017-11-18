"use strict"

class Sudoku {
  constructor(board_string) {
      this.board_string = board_string;
      this.result = [];
      this.check = true;
  }

  solve() {
    this.board();


    for (let i = 0; i < this.result.length; i++) {
      for (let j = 0; j < this.result.length; j++) {
        if (this.result[i][j] == 0){
          // penampung.push(this.result[i][j])
          for (let k = 1; k <= 9; k++) {
            if (this.checkCol(k, i) && this.checkRow(k, j) && this.checkReg(k, i, j)){
              // if ((!this.checkRow(k, i)) && (!this.checkCol(k, j)) && (!this.checkReg(k, i, j)) ){
                this.result[i][j] = String(k);
                k = 10;
            }
          }
        }
      }
    }
    return this.result;
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
      return this.result;
  }

  checkRow(value, col){
    // if (this.result[row].indexOf(value) !== -1) {
    //   return false;
    // }
      for (let i = 0; i < 9; i++) {
        if (this.result[i][col] == value){
          return false;
        }
      }
    return this.check;
    // return this.result[row].indexOf(value) === -1;
  }

  checkCol(value, col){
    // console.log("ini val", value);
    // console.log("ini col", col);
    if (this.result[col].indexOf(String(value)) != -1) {
      return false;
    }

    return true;
  }

  checkReg(value, row, col) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;
    for (let i = row; i < row + 3; i++) {
      for (let j = col; j < col + 3; j++) {
        if(this.result[i][j] == value){
          this.check = false;
        }
      }
    }

    return this.check;
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

// console.log(game.board())
// console.log(game.checkReg(4,2,6));
console.log(game.solve())
// console.log(game.solve())
// console.log(game.checkRow(3, 5));
