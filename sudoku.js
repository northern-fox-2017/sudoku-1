"use strict"

class Sudoku {
  constructor(board_string) {
    this.papan=board_string.split('').map(Number);
    this.baris=this.board()
    this.kolom=[]
    this.ragion=[]
  }

  solve() {
  
  }

  // Returns a string representing the current state of the board
  board() {
    let result=[]
    for (let i = 0; i < this.papan.length; i+=9) {
      let row=[]
      for (let j = i; j < (i+9); j++) {
        row.push(this.papan[j])
      }
      result.push(row)
    }
    return result
  }
  get_kolom(){
    let result=[]
    for (let i = 0; i < 9; i++) {
      let colom=[]
      for (let j = i; j <= (i+72); j+=9) {
        colom.push(this.papan[j])
      }
      result.push(colom)
    }
    return result
  }
  get_region(){

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
// console.log(game.get_kolom())

// console.log(typeof  game.papan)
console.log(game.board())
console.log(game.get_kolom())
