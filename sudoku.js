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
    return true
  }
  //method untuk cek samping
  checkSamping(posCol, posRow, tebakan) {
    for (let i = 0; i < 9; i++) {
      if(this.board[posCol][i] == tebakan){
        return false
      }
    }
    return true
  }
  //method untuk cek bawah
  checkBawah(posCol, posRow, tebakan) {
    for (let i = 0; i < 9; i++) {
      if(this.board[i][posRow] == tebakan){
        return false
      }
    }
    return true
  }
  //method untuk check semuanya
  checkAll(posCol, posRow, tebakan){
    if(this.checkSamping(posCol, posRow, tebakan) == false || this.checkBawah(posCol, posRow, tebakan) == false || this.checkKotak(posCol, posRow, tebakan) == false){
      return false
    }else if (this.checkSamping(posCol, posRow, tebakan) == true && this.checkBawah(posCol, posRow, tebakan) == true && this.checkKotak(posCol, posRow, tebakan) == true) {
      return true
    }
  }
  //method untuk isi 0
  asignZero(){
    for(let i = 0; i < this.posisinol.length; i++){
      let posCol = this.posisinol[i][0]
      let posRow = this.posisinol[i][1]
      let tebakan = +this.board[posCol][posRow]+1
      while(this.checkAll(posCol, posRow, tebakan) == false){
        if(tebakan == 9 && this.checkAll(posCol, posRow, tebakan == true)){
          this.board[posCol][posRow] = tebakan.toString()
          i++

        }else if (tebakan == 9 && this.checkAll(posCol, posRow, tebakan) == false) {
          console.log(`${posCol}${posRow} backtrack ke ${this.posisinol[i-1]}`);
          break;

        }else if( tebakan < 9 && this.checkAll(posCol, posRow, tebakan) == true) {
          this.board[posCol][posRow] = tebakan.toString()
          i++

        }else{
          tebakan++
        }

      }
      this.board[posCol][posRow] = tebakan.toString()
    }
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
game.asignZero()
//console.log(game.board())
console.log(game.board);
//console.log(game.posisinol);
//console.log(game.checkAll(0,3,0));
