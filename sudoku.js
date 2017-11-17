"use strict"

class Sudoku {
  constructor(board_string) {

  }

  solve() {}

  // Returns a string representing the current state of the board
  board() {
    let data1 = '105802000090076405200400819019007306762083090000061050007600030430020501600308900';
    let cutNine = '';
    let start = 0, end = 0;
    
    let board = [];
    for (let i = 0; i < (data1.length / 9); i++) {
        for (let j = 0; j < 1; j++) {
            start = i * 9;
            end = start + 9;
            cutNine = data1.slice(start, end);
        }
        if (i % 3 == 0 && i > 1) {       
            board.push(('         ').split(''));
        }
    
        board.push(cutNine.split(''));
    }
    
    let counter = 0;
    for (let k = 0; k < board.length; k++) {
        counter = 0;
        for (let m = 3; m < board.length-3; m++) {
            if (m % 3 == 0) {
                board[k].splice(m + counter,0,' | ');
                counter++;
            }
        }
    }
    return board;
  }

  checkRow() {
    let row = 12, col = 11;
    let isRow = false;
    let coordRow = [];
    
    for (let n = 0; n < 3; n++) {         // 3 karena ada pengecekan 3 aturan, yaitu baris, kolom dan region
        for (let p = 0; p < row; p++) {     // untuk cek baris sudoku
            if (board[n][p] == 0 && board[n][p] !== ' ' && board[n][p] !== '|') {
              coordRow = board[n][p];
              if (coordRow !== number) {
                isRow = true;
              }
            }
        }
    }
    return isRow;        
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



/*
let random = Math.floor(Math.random() * 9) + 1;
let row = 12, col = 11;
debugger
for (let n = 0; n < 3; n++) {         // 3 karena ada pengecekan 3 aturan, yaitu baris, kolom dan region
    for (let p = 0; p < row; p++) {     // untuk cek baris sudoku
        if (board[n][p] == 0 && board[n][p] !== ' ' && board[n][p] !== '|') {
            if (board[n][p] !== random) {   debugger
                for (let q = 0; q < col; q++) { // untuk cek kolom sudoku
                    if (board[q][n] !== random) {
                        coord = board[q][n];
                        
                    }
                }
            }
        }
        
    }   debugger
}  
*/