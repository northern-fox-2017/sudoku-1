"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
    this.arr = []
  }

  solve() {
    let panggilNol = this.cekNol();
    let panggilBoard = this.board()
    for (let i = 0; i < panggilNol.length; i++) {
      let salah = true
      let ekspektasi = 1
      for (let j = 1; j < 9; j++) {
        // console.log(panggilNol[i]);
        if (this.cekBaris(panggilNol[i],ekspektasi) == true) {
          if (this.cekKolom(panggilNol[i],ekspektasi)== true) {
            if (this.cekArea(panggilNol[i],ekspektasi ) == true) {
              panggilBoard[panggilNol[i][0]][panggilNol[i][1]] = String(ekspektasi);
              salah = false;
            }
          }
        }
        ekspektasi++;
      }
    }
    return panggilBoard;
  }

  // Returns a string representing the current state of the board
  board() {
    let arr = []
    let index = 0
    for (let i = 0; i < 9; i++) {
        arr.push([])
      for(let j=0;j < 9 ;j++){
        arr[i].push(this.board_string[index])
        index++
      }
    }
    return arr
  }

  cekNol(){
    let panggil = this.board()
    for (let i = 0; i < panggil.length; i++) {
      for (let j = 0; j < panggil.length; j++) {
        if(panggil[i][j] == 0){
          this.arr.push([i,j])
      }
    }
  }
  return this.arr;
}


  cekBaris(baris,ekspektasi){
    let panggil = this.board()
    let getBaris = baris[0]
    // console.log(getBaris);
    for (let i = 0; i < 9; i++) {
      if(panggil[getBaris][i] == ekspektasi){
        // console.log(panggil[getBaris][i]);
        return false;
      }
    }
    return true
  }

  cekKolom(kolom,ekspektasi){
    let panggil = this.board()
    let getKolom = kolom[0]
    for (let i = 0; i < 9; i++) {
      if(panggil[i][getKolom] == ekspektasi){
        return false;
      }
    }
    return true
  }

  cekArea(baris,ekspektasi){
    let panggil = this.board()
    let row = (Math.round(baris[0]/3))*3
    let col = (Math.round(baris[1]/3))*3
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if(panggil[i][j] == ekspektasi){
          return false
        }
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
console.log(game.solve());

// console.log(game.cekArea())
