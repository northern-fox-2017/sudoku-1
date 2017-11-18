"use strict"

class Sudoku {
  constructor(board_string, inputNum) {
    this.board_string = board_string
    this.board = []
    this.coordZero = []
    this.checkNum = inputNum
    // this.coordRow = this.checkRow()
    // this.isRow = 
    // this.isCol = 
    // this.isRegion = 
    // console.log(this.board + ' ini dari constructor');
  }

  solve() {}

  // Returns a string representing the current state of the board
  

  printBoard() {
    // let data1 = '105802000090076405200400819019007306762083090000061050007600030430020501600308900';
    let cutNine = '';
    let start = 0, end = 0;
    
    
    for (let i = 0; i < (this.board_string.length / 9); i++) {
        for (let j = 0; j < 1; j++) {
            start = i * 9;
            end = start + 9;
            cutNine = this.board_string.slice(start, end);
        }
        // if (i   % 3 == 0 && i > 1) {       
        //     this.board.push(('         ').split(''));
        // }
    
        this.board.push(cutNine.split(''));
        // this.board.push(0)
    }
    
    let counter = 0;
    // for (let k = 0; k < this.board.length; k++) {
    //     counter = 0;
    //     for (let m = 3; m < this.board.length-3; m++) {
    //         if (m % 3 == 0) {
    //             this.board[k].splice(m + counter,0,' | ');
    //             counter++;
    //         }
    //     }
    // }
    // console.log(this.board.length)
    
    return this.board;      
  }

  checkRow() {
    let row = 11;
    let isRow = false;
    let checkZero = -1;
    let papan = this.printBoard();
    
      
    for (let i = 0; i < 1; i++) {
        
        for (let j = 0; j < papan.length; j++) {
            
            if (papan[i][j] == 0) {
                let coord = [];
                coord.push(i,j);
                // if (papan[i].indexOf(this.checkNum) == -1) {

                // }

                this.coordZero.push(coord)
              }

        }
    };
    this.board[this.coordZero[0][0]][this.coordZero[0][1]] = 3;
    return this.board[this.coordZero[0][0]][this.coordZero[0][1]];
    
    // for (let i = 0; i < 3; i++) {         // 3 karena ada pengecekan 3 aturan, yaitu baris, kolom dan region
    //     for (let j = 0; j < row; j++) {     // untuk cek baris sudoku
    //         if (this.board[i][j] == 0) {
    //           checkZero = this.board[i][j];
    //           if (checkZero !== checkNum) {
    //             isRow = true;
    //           }
    //         }
    //     }
    // }
    //         
    // return this.coord;
  }

  checkCol(coordRow, checkNum) {
    let col = 11;
    let isCol = false;
    let coordCol = [];

    
    for (let i = 0; i < 3; i++) {         // 3 karena ada pengecekan 3 aturan, yaitu baris, kolom dan region
        for (let j = 0; j < col; j++) {     // untuk cek kolom sudoku
              if (this.coordRow !== checkNum) {
                isCol = true;
              }
            }
        }
    return isRow;        
  }

  checkRegion() {
    let boardAread = this.printBoard()

    // for (let i = 0; i < 3; )
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
// game.solve()

// console.log(game.board())

console.log(game.checkRow());
// console.log(game.printBoard());
// game.checkRow(2)  



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