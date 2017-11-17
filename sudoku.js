// import { fork } from 'cluster';

"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
  }

  solve() {}

  // Returns a string representing the current state of the board
  board() {
    let arrSudo = []
    let countPush = 0
    for (let i = 0; i < 9; i++) {
      arrSudo.push([])
      for (let j = 0; j < 9 ; j++) {
        arrSudo[i].push(this.board_string[countPush])
        countPush++
        
      }  
    
    }
    console.log(arrSudo)
    
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
// var fs = require('fs')
// var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
//   .toString()
//   .split("\n")[0]

var game = new Sudoku('580200009007640520040081901900730676208309000006105000760003043002050160030890000')

// Remember: this will just fill out what it can and not "guess"
// game.solve()

console.log(game.board())
