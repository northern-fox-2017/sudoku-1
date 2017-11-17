"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
    this.row = Math.sqrt(this.board_string.length)
    this.col = this.row
    this.rowArea = Math.sqrt(this.row),
    this.colArea = this.rowArea
    this.result = ''
  }

  isRow(row, num) {
    return this.board()[row].indexOf(num) > -1
  }

  isCol(col, num) {
    return this.board()[col].indexOf(num) > -1
  }

  isArea(row, col, num) {
    let board = this.board(),
        arr = [],
        idx = 0

    for (let i = 0; i < this.rowArea; i++) {
      arr.push([])
      for (let j = 0; j < this.colArea; j++) {
        arr[i].push(Number(board[i][j]))
      }
    }
    console.log(arr);
    return arr;
    // console.log(this.board()[col].indexOf(num) > -1);
    // return arr.indexOf(num) > -1
  }

  solve() {
    // 105802000  090076405 200400819 019007306762083090000061050007600030430020501600308900
    let arr = [], idx = 0

    // this.isRow(0, 9) // false
    // this.isCol(0, 2) // true
    this.isArea(0, 0, 9)

    for (let i = 0; i < this.row; i++) {
      arr.push([])
      for (let j = 0; j < this.col; j++) {
        if (Number(this.board_string[idx]) == 0) {
          // Looping sebanyak 9
          //   - cek angka apakah sudah ada (panggil method isRow) di barisnya (i)
          //   - kalo angka dibarisnya tidak ada, cek angka apakah sudah ada (panggil method isCol) di kolomnya (j)
          //   - kalo angka dikolomnya tidak ada, cek angka apakah sudah ada (panggil method isArea) di areanya (j)
          //   - kalo angka diareanya tidak ada maka tambahkan dalam array (arr[i].push(angka))
          arr[i].push(99) // sementara input angka sembarang
        } else {
          arr[i].push(Number(this.board_string[idx]))
        }
        idx++
      }
    }
    console.log(arr);
  }

  // Returns a string representing the current state of the board
  board() {
    let arr = [], idx = 0
    for (let i = 0; i < this.row; i++) {
      arr.push([])
      for (let j = 0; j < this.col; j++) {
        arr[i].push(Number(this.board_string[idx++]))
      }
    }
    return arr;
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
