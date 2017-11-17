"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
    this.arr = []
  }

  solve() {}

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
  console.log(this.arr);
}
  cekBaris(baris,kolom,ekspektasi){
    let panggil = this.board()
    for (let i = 0; i < 9; i++) {
      if(panggil[baris][i] == ekspektasi){
        return false;
      }
    }
    return true
  }

  cekKolom(baris,kolom,ekspektasi){
    let panggil = this.board()
    for (let i = 0; i < 9; i++) {
      if(panggil[kolom][i] == ekspektasi){
        return false;
      }
    }
    return true
  }

  cekArea(baris,kolom,ekspektasi){
    let row = (Math.round(this.baris/3))*3
    let col = (Math.round(this.col/3))*3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        array[i]
      }
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

console.log(game.cekNol())
