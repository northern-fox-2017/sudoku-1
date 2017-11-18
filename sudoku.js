"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string;
    this.wholeBoard = [];
    this.wholeColumn = [];

    for (var i = 0; i < 9; i++) {
      var awal = i * 9;
      var akhir = awal + 9;
      this.wholeBoard.push(this.cutString(awal, akhir));
    }

    for (var i = 0; i < this.wholeBoard.length; i++) {
      this.wholeColumn.push([]);
      for (var j = 0; j < this.wholeBoard.length; j++) {
        this.wholeColumn[i].push(this.wholeBoard[j][i]);
      }
    }
  }

  cutString(a, b) {
    var hasil = this.board_string.slice(a, b).split('');
    return hasil;
  }

  solve() {

  }

  // Returns a string representing the current state of the board
  board() {

    var display = ''

    /**
     * Cek baris, jika ada yang sama dalam satu baris, return false
     **/

    for (var j = 0; j < this.wholeBoard.length; j++) {
      // console.log(this.cekBaris(j, 8));
      // console.log(this.wholeBoard);
      display += ('| ' + this.wholeBoard[j].join(' | ') + ' |\n');
    }
    return display;
  }

  cekKolom(num, input) {
    console.log(this.wholeColumn[num] + ' Ini Kolom');
    var kolom =  this.wholeColumn[num].indexOf(input.toString());
    if (kolom === -1) {
      return false;
    } else {
      return true;
    }
  }

  cekBaris(num, input) {
    var baris = this.wholeBoard[num];
    console.log(baris + ' Ini baris')
    if (baris.indexOf(input.toString()) === -1) {
      return true;
    } else {
      return false;
    }
  }

  cekGroup(num) {

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

console.log(game.board())
console.log(game.cekBaris(0, 5));
console.log(game.cekKolom(2, 5));

// console.log(game.wholeBoard[0].indexOf('8'));
