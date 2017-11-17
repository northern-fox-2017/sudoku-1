"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string.toString();
    this.wholeBoard = [];
  }

  cutString(a, b) {
    var hasil = this.board_string.slice(a, b).split('');
    return hasil;
  }

  solve() {}

  // Returns a string representing the current state of the board
  board() {
    for (var i = 0; i < 9; i++) {
      var awal = i * 9;
      var akhir = awal + 9;
      this.wholeBoard.push(this.cutString(awal, akhir));
    }
    var display = ''

    /**
     * Cek baris, jika ada yang sama dalam satu baris, return false
     **/

    for (var j = 0; j < this.wholeBoard.length; j++) {
      this.cekBaris(j, 9);
      console.log(this.cekBaris(j));
      display += ('| ' + this.wholeBoard[j].join(' | ') + ' |\n');
    }
    return display;
  }

  cekKolom(num) {
    return false;
  }

  cekBaris(num, input) {
    var baris = this.board_string[num];
    for (var i = 0; i < baris.length; i++) {
      if (input === baris[i]) {
        return false;
      } else {
        return true;
      }
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
