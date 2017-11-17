"use strict"

class Sudoku {
  constructor(board_string) {
    this.SudokuBoard=[]
  }

  solve() {

  }

  board() {
    let counter=0
    for (let i = 0; i < 9; i++) {
      this.SudokuBoard.push([])
      for (let j = 0; j < 9; j++) {
        this.SudokuBoard[i].push(board_string[counter])
        counter++
      }
    }
    console.log(this.SudokuBoard);
  }

}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
let fs = require('fs')
let board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

let game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
game.solve()

console.log(game.board())
