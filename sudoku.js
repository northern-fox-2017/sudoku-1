"use strict"

class Sudoku {
  constructor(board_string) {
    this.str = board_string
    this.angka = [1,2,3,4,5,6,7,8,9]
    this.newBoard = []

  }

  solve() {
   for (let i = 0; i < this.newBoard.length; i++) {
     for (let j = 0; j < this.newBoard[i].length; j++) {

       if (this.newBoard[i][j] == 0) {
         this.angka.map(angka=> {
           if (this.cekBoard(angka, i, j)) {
             this.newBoard[i][j] = angka
           }
         });
       }
     }
   }
   return this.newBoard;
  }

  board() {


    let no = 0;

    for (let i = 0; i < 9; i++) {
      this.newBoard.push([])
      for (let j = 0; j < 9; j++) {

          this.newBoard[i].push(parseInt(this.str[no]));
          no+=1
      }
    }

    return this.newBoard
  }

  cekBaris(angka, row){
    let baris = this.newBoard[row];

    return baris.indexOf(angka) == -1
  }

  cekKolom(angka, col){

    let kolom = this.newBoard.map(function(baris) { return baris[col]; });


    return kolom.indexOf(angka) == -1
  }


  cekBox(angka, row, col){

    let baris = (Math.floor(row/3)) * 3
    let kolom = (Math.floor(col/3)) * 3

    let arr = []
    for (var i = baris; i < baris + 3; i++) {
      for (var j = kolom; j < kolom + 3; j++) {

        arr.push(this.newBoard[i][j])
      }
    }
    //
    // console.log(arr);

    return arr.indexOf(angka) === -1

  }

  cekBoard(angka, row, col){
    return this.cekBaris(angka, row) && this.cekKolom(angka, col) && this.cekBox(angka, row, col);
  }

}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string =fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0];

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
game.board()
// console.log(game.board());
// console.log(game.cekBox(9, 1, 1));
console.log(' SOLVE ')
console.log(game.solve());

// backtrack
/*
  cari kordinat 0;
  looping kordinat
*/
