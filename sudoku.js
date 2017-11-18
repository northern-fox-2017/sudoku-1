"use strict"

class Sudoku {
  constructor(board_string) {
    this.number     = board_string
    this.boards     = [];
    this.setZero    = [];
  }

    board() {
    let newArr = this.number.split('');
    for (let i = 0; i < newArr.length; i++) {
      this.boards.push(newArr.splice(0, 9));
    }
    return this.boards;
  }

    getZero() { //untuk menentukan setzero baris dan kolom
      //cek dlu tiap angka 0 di dalam board
      for (let i = 0; i < this.boards.length; i++) {
        for (let j = 0; j < this.boards[i].length; j++) {
          if (this.boards[i][j] == '0') {
            this.setZero.push([i, j]);
          }
        }
      }
      return this.setZero;
    }

    checkRow(baris, angka) {
      for (let i = 0; i < this.boards[baris].length; i++) {
        // debugger
        if (this.boards[baris][i] == angka) {
          return false;
        }
      }
      return true;
    }

    checkKolom(kolom, angka) {
      //console.log(this.boards.length)
      for (let i = 0; i < this.boards.length; i++) {
        // debugger
        if (this.boards[i][kolom] == angka) {
          return false;
        }
      }

      return true;
    }

    checkArea3x3(baris, kolom, angka) {

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

          if (this.boards[(i + baris) - (baris % 3)][(j + kolom) - (kolom % 3)] == angka) {
            return false;
          }
        }
      }
      return true;
    }

    checkAngka(baris, kolom, angka) {
      if (this.checkRow(baris, angka) && this.checkKolom(kolom, angka) &&
        this.checkArea3x3(baris, kolom, angka)) {
        return true;
      } else {
        return false;
      }
    }

    solve() {
      let baris, kolom, status, angka;
      this.getZero();
      // console.log(this.setZero.length)
      for (let i = 0; i < this.setZero.length;) {
        baris = this.setZero[i][0]
        kolom = this.setZero[i][1]
        angka = +this.boards[baris] [kolom] + 1
          //console.log(angka);
        status = false;

        for (let j = angka; j <= 9; j++) {
          // console.log(this.checkAngka(baris, kolom, angka))
          if (this.checkAngka(baris, kolom, angka) === true) {
            this.boards[baris][kolom] = angka.toString();
            status = true
            i++
            break;
          } else {
            angka++
          }
        }
        if (!status) {
          this.boards[baris][kolom] = 0;
          i--
        }
      }
      return this.boards;
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
  console.log(game.board())
  console.log("\n");
  // console.log(game.checkRow(0,3))
  // console.log(game.checkKolom(2,3))
  // console.log(game.checkArea3x3(0, 0, 1))
  console.log("Solve :");
  console.log(game.solve())
  // console.log(game.getZero());
  // console.log(game.checkAngka(1,2,4)
