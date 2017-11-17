"use strict"

class Sudoku {
  constructor(board_string) {
    this.isiBoard = board_string
    this.papan = this.board()
    this.zeroKoor = []
  }

  solve() {}

  // Returns a string representing the current state of the board
  board() {
    let arrBoard = []
    let count = 0

    for(let i = 0; i < 9; i++){
      arrBoard.push([])
      for(let j = 0; j < 9; j++){
        arrBoard[i].push(this.isiBoard[count])
        count++
      }
    }
    return arrBoard
  }

  getZeroKoor(){
    for(let i = 0; i < this.papan.length; i++){
      for(let j = 0; j < this.papan.length; j++){

        if(this.papan[i][j] == 0){
          this.zeroKoor.push([i, j])
        }
      }
    }
    return this.zeroKoor
  }

  cekBaris(baris, tebakan){
    for(let i = 0; i < 9; i++){
      if(this.papan[baris][i] == tebakan){
        return false
      }
    }
    return true
  }

  cekKolom(kolom, tebakan){
    for(let i = 0; i < 9; i++){
      if(this.papan[i][kolom] == tebakan){
        return false
      }
    }
    return true
  }

  cekArea(baris, kolom, tebakan){
    let startKolom = 0;
    let startBaris = 0;

    if (baris < 3) {
      startBaris = 0
    }
    else if (baris < 6) {
      startBaris = 3
    }
    else if (baris < 9) {
      startBaris = 6
    }

    if (kolom < 3) {
      startKolom = 0
    }
    else if (kolom < 6) {
      startKolom = 3
    }
    else if (kolom < 9) {
      startKolom = 6
    }

    for(let i = startBaris; i < startBaris+3; i++){   // 0, 3
      for(let j = startKolom; j < startKolom+3; j++){ // 0, 3
        if (this.papan[i][j] == tebakan) {
          return false
        }
      }
    }
    // console.log(this.papan[0][1]);
    return true
  }

}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
const fs = require('fs')
const board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
// game.solve()

// console.log(game.board())
// console.log(game.getZeroKoor());
// console.log(game.cekBaris(0, 4));
// console.log(game.cekKolom(0, 3));
console.log(game.cekArea(0, 1, 2));
