"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string;
    this.wholeBoard = [];
  }

  cutString(a, b) {
    var hasil = this.board_string.slice(a, b).split('');
    return hasil;
  }

  solve() {

  }

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
      console.log(this.cekBaris(j, 8));
      // console.log(this.wholeBoard);
      display += ('| ' + this.wholeBoard[j].join(' | ') + ' |\n');
    }
    return display;
  }

  cekKolom(num, input) {
    return false;
  }

  cekBaris(num, input) {
    var baris = this.wholeBoard[num];
    console.log(baris)
    if (baris.indexOf(input.toString())===-1){
      return true;
    } else{
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

// console.log(game.wholeBoard[0].indexOf('8'));
