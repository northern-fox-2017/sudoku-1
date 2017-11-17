"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string;
    this.angka        = [1,2,3,4,5,6,7,8,9,]
    this.arr          = []
  }

  solve() {

    // for (let i = 0; i < 9; i++) {
    //   for (let j = 0; j < 9; j++) {
    //     if (this.arr[i][j] == 0) {
    //
    //     }
    //   }
    // }

  }

  // Returns a string representing the current state of the board
  board() {
    let no = 0;
    for (let i = 0; i < 9; i++) {
      this.arr.push([])
      for (let j = 0; j < 9; j++) {
        this.arr[i].push(this.board_string[no])
        no++
      }
    }

    return this.arr;
  }

  cekBaris(index, angka){
    let baris = this.board()[index];
    console.log(baris);

    return baris.indexOf(angka) === -1;

  }

  cekKolom(index, angka){
    let kolom = this.board().map(function(kolom) {
      return kolom[index];
    })
    console.log(kolom);

    return kolom.indexOf(angka) === -1;
  }

  cekBox(row, col, angka){
    // console.log(angka);
    let baris = Math.floor(row / 3) * 3;
    let kolom = Math.floor(row / 3) * 3;

    let newArr = [];

    for (let i = 0; i < baris + 3; i++) {
      for (let j = 0; j < kolom + 3; j++) {
        newArr.push(this.board()[i][j])
      }
    }
    console.log(newArr);
    return newArr.indexOf(angka) === -1;
  }

  cekBoard(){
    if (this.cekBaris() && this.cekKolom() && this.cekBoard()) {

    }
  }
  // cekKolom(index, angka){
  //   console.log(this.board()[0]);
  //   let baris = this.board()[index];
  //
  //   return baris.indexOf(angka) === -1;
  //
  // }


}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
// game.solve()

// console.log(game.cekBaris(0, '1'))

// console.log(game.cekKolom(0, '1'));

console.log(game.cekBox(0, 0, '1'));
// console.log(game.board())
