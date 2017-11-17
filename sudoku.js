"use strict"

class Sudoku {
  constructor(board_string) {
    this.posisinol = []
    this.board;

  }

  solve() {}

  // Returns a string representing the current state of the board
  board() {
    let board = []
    let count = 0
    for (var i = 0; i < 9; i++) {
      board.push([])
      for (var j = 0; j < 9; j++) {
        board[i].push(board_string[count])
        count++
      }
    }
    this.board = board
  }
  //mendapatkan kori=dinat 0
  getZero(){
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if(this.board[i][j] == '0'){
          this.posisinol.push(`${i}${j}`)
        }
      }
    }
  }
  //method untuk cek kotak
  checkKotak(posCol, posRow, tebakan) {
    let startRow = (Math.floor(posRow/3))*3
    let startCol = (Math.floor(posCol/3))*3
    for (let i = startRow; i < startRow+3; i++) {
      for (let j = startCol; j < startCol+3; j++) {
          if(this.board[i][j] == tebakan){
            return false
          }
        }
      }
    }
    return true
  }
  //method untuk cek samping
  checkSamping(posCol, tebakan) {
    for (let = 0; i < 9; i++) {
      if(this.board[posRow][i] == tebakan){
        return false
      }
    }
    return true
  }
  //method untuk cek bawah
  checkBawah(posRow, tebakan) {
    for (let = 0; i < 9; i++) {
      if(this.board[i][posCol] == tebakan){
        return false
      }
    }
    return true
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
game.solve()
game.board()
game.getZero()
//console.log(game.board())
console.log(game.board);
//console.log(game.posisinol);
//console.log(game.checkKotak(0,3,0));
