"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string;
    this.wholeBoard = [];
    this.wholeColumn = [];
    this.display = '';

    for (var i = 0; i < 9; i++) { /* Untuk input baris kedalam board */
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

  cutString(a, b) { /*which a is the start and b is count of numbers*/
    var hasil = this.board_string.slice(a, b).split('');
    return hasil;
  }

  solve() {

  }

  // Returns a string representing the current state of the board
  board() {
    this.display += ('=================================\n');
    for (var k = 0; k < this.wholeBoard.length; k++) {
      this.display += (this.wholeBoard[k].join(' | ') + '\n');
    }
    this.display += ('=================================\n');
    return this.display;
  }

  cekKolom(num, input) {
    var kolom = this.wholeColumn[num].indexOf(input.toString());
    if (kolom === -1) {
      return false; /* jika tidak ditemukan return false */
    } else {
      return true; /* jika ditemukan return false */
    }
  }

  cekBaris(num, input) {
    var baris = this.wholeBoard[num];
    if (baris.indexOf(input.toString()) === -1) {
      return false; /* jika tidak ditemukan return false */
    } else {
      return true; /* jika ditemukan return true */
    }
  }

  cekGroup(num, input) {

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
console.log('BARIS');
console.log(game.wholeBoard[0]);
console.log(game.cekBaris(0, 5));
console.log('\n');
console.log('KOLOM');
console.log(game.wholeColumn[2]);
console.log(game.cekKolom(2, 5));

// console.log(game.wholeBoard[0].indexOf('8'));
