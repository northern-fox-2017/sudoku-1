"use strict"
// The file has newlines at the end of each line,
// so we call split to remove it (\n)
const fs = require('fs')
const board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]




class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
    this.start_board = []
    this.input = ['1','2','3','4','5','6','7','8','9']
    this.filled = []
  }

  // Returns a string representing the current state of the board
  board() {
    // let arr = []
    let strIndex = 0
    for (let i = 0; i < 9; i++) {
      let line = []
      for (let j = 0; j < 9; j++) {
        line.push(board_string[strIndex])
        strIndex ++
      }
      this.start_board.push(line)
    }
    // console.log(this.start_board);
    // return this.start_board.join('\n')
  }
  
  solve() {
    for (let i = 0; i < this.start_board.length; i++) {
      for (let j = 0; j < this.start_board[i].length; j++) {
        if (this.start_board[i][j] == 0) {
          for (let k = 0; k < this.input.length; k++) {
            if (this.cek_horizontal(i,this.input[k]) && this.cek_vertical(j,this.input[k]) && this.cek_kuadran(i,j,this.input[k])) {
              this.start_board[i][j] = this.input[k]
            }
          }
        }
      }
    }
    //PSEUDO
    // if '0' jalankan solver
    // solve dengan looping sesuai 'answer', jika ada angka yg sama angka dalam 'answer' tersebut dijadikan 0
    // cek horizontal -> jalankan solve horizontal
    // cek vertical -> jalankan solve vertical
    // cek area -> jalankan solve area
    // if true, true, true isi dengan angka tersebut
    // push {koordinat, isi jawaban} ke this.filled
  }
  
  cek_horizontal(baris,number) {
    for (let i = 0; i < 9; i++) {
        if (this.start_board[baris][i] == number) {
          return false
        }
    }
    return true
  }
  
  cek_vertical(kolom,number) {
    for (let i = 0; i < 9; i++) {
        if (this.start_board[i][kolom] == number) {
          return false
        }
    }
    return true
  }
  
  cek_kuadran(baris,kolom,number) {
    if (baris < 3) {
      baris = 0
    } else if (baris > 2 && baris < 6) {
      baris = 3
    } else if (baris > 5 && baris < 9) {
      baris = 6
    }
    
    if (kolom < 3) {
      kolom = 0
    } else if (kolom > 2 && kolom < 6) {
      kolom = 3
    } else if (kolom > 5 && kolom < 9) {
      kolom = 6
    }
    
    for (let i = baris; i < 3; i++) {
      for (let j = kolom; j < 3; j++) {
        if (this.start_board[i][j] == number) {
          return false
        }
      }
    }
    return true
  }
  
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
  
}

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
game.board()
console.log('AWAL');
console.log(game.start_board);
console.log('SOLVED');
game.solve()
console.log(game.start_board);
// console.log(game.board())
// console.log(board_string);
// console.log(game.cek_horizontal(0,0));
// console.log(game.cek_vertical(0,0));
// console.log(game.cek_kuadran(0,0,6));
// console.log(game.start_board[0]);