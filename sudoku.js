"use strict"

class Sudoku {
  constructor(board_string) {
    this.isiBoard = board_string
    this.papan = this.board()
    this.zeroKoor = []
  }

  solve() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if(this.papan[i][j] == 0){
          for (let k = 1; k < 10; k++) {
            if(this.cekBaris(i, k) == true){
              if(this.cekKolom(j, k) == true){
                if(this.cekArea(i, j, k) == true){
                  this.papan[i][j] = k
                }
              }
            }
          }
        }
      }
    }
    return this.papan
  }

  backTrack(){
    let kordinat = this.zeroKoor
    let row = []
    let col = []
    let arrTebakan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (let i = 0; i < kordinat.length; i++) {
      row.push(kordinat[i][0])
      col.push(kordinat[i][1])
    }

    for (let i = 0; i < row.length; i++) {
      for(let j = 0; j < arrTebakan.length; j++){
        if(this.cekBaris(row[i], arrTebakan[j]) == true){
          if(this.cekKolom(col[i], arrTebakan[j]) == true){
            if(this.cekArea(row[i], col[i], arrTebakan[j]) == true){
              if(arrTebakan[j] == 10){
                this.papan[row[i]][col[i]] = 0
                i--
              }
              else{
                this.papan[row[i]][col[i]] = arrTebakan[j]
              }
            }
          }
        }
      }
    }
    return this.papan
  }

  board() {
    let arrBoard = []
    let count = 0

    for(let i = 0; i < 9; i++){
      arrBoard.push([])
      for(let j = 0; j < 9; j++){
        arrBoard[i].push(+this.isiBoard[count])
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
game.board()
game.getZeroKoor()
console.log(game.solve());
console.log();
console.log(game.backTrack())
// console.log(game.cekBaris(0, 4));
// console.log(game.cekKolom(0, 3));
// console.log(game.cekArea(0, 1, 2));
