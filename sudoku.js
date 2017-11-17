"use strict"

class Sudoku {
  constructor(board_string) {
    this.number     = board_string
    this.papan      = [];
    this.koordinat  = [];
  }

  solve() {

  }

  board() {
    let str = 0
    for(let i = 0 ; i < 9 ; i++) {
      this.papan.push([]);
        for(let j = 0 ; j < 9 ; j++) {
          this.papan[i].push(this.number[str])
          str++;
        }
    }
    console.log(this.papan);
  }

  getZero() { // fungsi untuk menentukan koordinat baris dan kolom
    for(let i = 0 ; i < this.papan.length ; i++) {
      for(let j = 0 ; j < this.papan[i].length ; j++) {
        if(this.papan[i][j] === '0') {
          this.koordinat.push([i,j]);
        }
      }
    }
    return this.koordinat;
  }

  vertical(kolom, angka) {
    for(let i = 0 ; i < 9 ; i++) {
      if(this.papan[i][kolom] == angka) {
        return false;
      }
    }
    return true;
  }

  horizontal(baris, angka) {
    for(let i = 0 ; i < 9 ; i++) {
      if(this.papan[baris][i] == angka) {
        return false;
      }
    }
    return true;
  }

  kuadran(baris, kolom, angka) {
    let awalBaris = 0;
    let awalKolom = 0;

    if(baris < 3) {
        awalBaris = 0; // start baris dari 0
    } else if(baris < 6) {
        awalBaris = 3; // start baris dari 3
    } else if(baris < 9) {
        awalBaris = 6; // start baris dari 6
    }

    if(kolom < 3) {
        awalKolom = 0;
    } else if(kolom < 6) {
        awalKolom = 3;
    } else if(kolom < 9) {
        awalKolom = 6;
    }

    for(let i = awalBaris ; i < 3 ; i++) {
      for(let j = awalKolom ; j < 3 ; j++) {
        if(this.papan[i][j] == angka) {
          return false;
        }
      }
    }
    return true;
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
console.log(game.horizontal(2,3));
console.log(game.vertical(1,3))
console.log(game.kuadran(0,4,5));
// console.log(game.getZero());
// Remember: this will just fill out what it can and not "guess"
// game.solve()

// console.log(game.board())
