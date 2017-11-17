"use strict"

class Sudoku {
  constructor(board_string) {
    this.string = board_string
    this.arr = []
    this.posisiKosong =[]
  }

  solve() {


  }

  checkRow (tebakanAngka,baris){
    for (var i = 0; i <this.arr[baris].length; i++) {
      if (tebakanAngka == this.arr[baris][i]){
        return false
      }
    }
    return true

  }
  checkCol(tebakanAngka,kolom){
    for (var i = 0; i <this.arr[kolom].length; i++) {
      if (tebakanAngka == this.arr[kolom][i]){
        return false
      }
    }
    return true
  }
  checkRegion(){


  }
  // Returns a string representing the current state of the board
  board() {

    for (var i = 0; i < 9; i++) {
      this.arr.push([])
      for (var j = 0; j < 9; j++) {
        this.arr[i].push(this.string[j])
      }
      this.string = this.string.slice(9)
    }
    return this.arr
  }
  checkKosong(){
    for (var i = 0; i < this.arr.length; i++) {
      let obj = {}
      for ( let j in this.arr[i]) {
        if (this.arr[i][j] == 0){
          // console.log(j);
          obj.x = i
          obj.y = j
          this.posisiKosong.push(obj)
        }
        obj = {}
      }
    }
    return this.posisiKosong
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
console.log(game.checkCol(3,0));
