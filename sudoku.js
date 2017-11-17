"use strict"

class Sudoku {
  constructor(board_string) {
    this.number     = board_string
    this.boards     = [];
    this.setZero       = [];
  }

  solve() {

  }

  board() {
    let count = 0
    for(let i = 0 ; i < 9 ; i++) {
      this.boards.push([]);
        for(let j = 0 ; j < 9 ; j++) {
          this.boards[i].push(this.number[count])
          count++;
        }
    }
    console.log(this.boards);
  }

  getZero() { // fungsi untuk menentukan setZero baris dan kolom
    for(let i = 0 ; i < this.boards.length ; i++) {
      for(let j = 0 ; j < this.boards[i].length ; j++) {
        if(this.boards[i][j] === '0') {
          this.setZero.push([i,j]);
        }
      }
    }
    return this.setZero;
  }

  checkRow(baris, angka) {
    for(let i = 0 ; i < 9 ; i++) {
      if(this.boards[baris][i] == angka) {
        return false;
      }
    }
    return true;
  }

  checkKolom(kolom, angka) {
    for(let i = 0 ; i < 9 ; i++) {
      if(this.boards[i][kolom] == angka) {
        return false;
      }
    }
    return true;
  }

  checkArea3x3(baris, tebak) {
  let getKolom = Math.floor(baris[1] / 3) * 3;
  let getBaris = Math.floor(baris[0] / 3) * 3;
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++){
          if (this.arrBoard[getBaris+k][getKolom+l] == tebak) {
            return true;
          }
        }
      }
  return false;
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

game.board();
console.log(game.checkRow(2,3));
console.log(game.checkKolom(1,3))

// Remember: this will just fill out what it can and not "guess"
// game.solve()

// console.log(game.board())
