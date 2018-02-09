"use strict"

class Sudoku {
  constructor(board_string) {
    this.number     = board_string
    this.papan      = [];
    this.koordinat  = [];
    this.newPapan   = [];
    this.kamus      = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  solve() {// /
    for(let i = 0 ; i < this.papan.length ; i++) { // 9
      for(let j = 0 ; j < this.papan[i].length ; j++) { // 9
        if(this.papan[i][j] == 0) {
          for(let k = 0 ; k < this.kamus.length ; k++) {
            if(this.kuadran(i,j,this.kamus[k]) === true) {
              if(this.horizontal(i,this.kamus[k]) === true) {
                if(this.vertical(j,this.kamus[k]) === true) {
                  this.papan[i][j] = this.kamus[k].toString();
                }
              }
            }
          }
        }
      }
    }
    console.log(this.papan);
  }

  backTrack() {
    let koordinat = this.getZero();
      for(let i = 0 ; i < this.papan.length ; i++) {
        for(let j = 0 ; j < this.papan[i].length ; j++) {
          if(this.papan[koordinat] == 0) {
            koordinat[i] = koordinat[i -1]
            for(let k = 0 ; k < this.kamus.length ; k++) {
              if(this.kuadran(i,j,this.kamus[k]) === true) {
                if(this.horizontal(i,this.kamus[k]) === true) {
                  if(this.vertical(j,this.kamus[k]) === true) {
                    this.papan[i][j] = this.kamus[k].toString();
                  }
                }
              }
            }
          }
        }
      }
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

  getZero(posisi) { // fungsi untuk menentukan koordinat baris dan kolom
    for(let i = 0 ; i < this.papan.length ; i++) {
      for(let j = 0 ; j < this.papan[i].length ; j++) {
        if(this.papan[i][j] == 0) {
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
        awalKolom = 0; // start kolom dari 0
    } else if(kolom < 6) {
        awalKolom = 3; // start kolom dari 3
    } else if(kolom < 9) {
        awalKolom = 6; // start kolom dari 6
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

var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)
console.log('Sudoku Awal');
game.board();
console.log('==================================================');
console.log(game.getZero());
console.log('Sudoku Solve');
game.solve();
console.log('==================================================');
console.log('Sudoku BackTrack');
game.backTrack()
