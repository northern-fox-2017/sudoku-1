"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string;
    this.arr = []; // papan game
    this.arrZero = []; // kordinat yang kosong
  }


  solve() {
    // cari zero location baris dan kolom
    // bikin dulu method untuk mencari lokasi yang kosong

  }


  checkZero() {
    // mencari lokasi yang kosong di baris dan kolom
    // outputnya aray kordinat [baris, kolom] = [x,y]
    var kosong = [];
    for(let i=0; i<9; i++) {   //looping baris
      for(let j=0; j<9; j++) { //looping kolom
        kosong = [];
        if(this.arr[i][j] == 0) {
          kosong.push(i)
          kosong.push(j)
          this.arrZero.push(kosong)
        }
      }
    }
    return this.arrZero
  }


  // Returns a string representing the current state of the board
  board() {
    // bikin papan sudoko 9 X 9 dan masukan angka
    let counter = 0;
    for(let i=0; i<9; i++) {
      this.arr.push([]);
      for(let j=0; j<9; j++) {
        this.arr[i].push(this.board_string[counter++]);
      }
    }
    // console.log(this.arr);
    return this.arr;
  }


  checkHorizontal(baris, angka) {
    // check baris jika sama dengan angka output false jika sama
    for(let i=0; i<9; i++) {
      if(this.arr[i][baris] == angka) {
      return false;
      }
    }
    return true;
  }


  checkVertical(kolom, angka) {
    // check kolom jika sama dengan angka output false jika sama
    for(let i=0; i<9; i++) {
      if(this.arr[i][kolom] == angka) {
        return false;
      }
    }
    return true;
  }


  checkArea(baris, kolom, angka) {
    //bikin kondisi cek baris kolom 3x3 output false jika sama dengan angka
    var startBaris = 0;
    if(baris < 3) {
      startBaris = 0;
    } else if(baris < 6) {
      startBaris = 3;
    } else if (baris < 9) {
      startBaris = 6;
    }

    var startKolom = 0;
    if(kolom < 3) {
      startKolom = 0;
    } else if (kolom < 6) {
      startKolom = 3;
    } else if (kolom < 9) {
      startKolom = 6;
    }

    for(let i=startBaris; i<3; i++) {
      for(let j=startKolom; j<3; j++) {
        if(this.arr[i][j] == angka) {
          return false
        }
      }
    }
    return true
  }

}


// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs');
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)
// Remember: this will just fill out what it can and not "guess"
// game.solve()

console.log(game.board())

// test case check baris (paramaternya baris dan angka)
// console.log(game.checkHorizontal(6,5));
// console.log(game.checkHorizontal(3,5));

// test case check kolom (parameternya kolom dan angka)
// console.log(game.checkVertical(1,1));
// console.log(game.checkVertical(1,5));

// test case check area baris dan kolom 3 x 3
// paramaternya baris, kolom, angka
// console.log(game.checkArea(1,1,9));
// console.log(game.checkArea(2,1,8));

// test case check lokasi kosong di baris dan kolom
// outputnya kordinat yang kosong [baris, kolom] = [x,y]
console.log(game.checkZero());
