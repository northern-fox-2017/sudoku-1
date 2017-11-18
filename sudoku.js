"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string;
    this.papan = this.board()
    this.zero = this.checkZero()
  }

  solve() {
    let tebakan = ['0','1','2','3', '4', '5', '6', '7', '8', '9'];
    for(let i = 0; i < this.papan.length; i++){
      for(let j = 0; j < this.papan[i].length; j++){
        if(this.papan[i][j] == 0){
          tebakan.map(tebak => {
            if(this.getRows(i,tebak) && this.getColumn(j,tebak) && this.get3X3(i,j,tebak)){
              this.papan[i][j] = tebak
            }
          })
        }
      }
    }
    return this.papan
  }
  // Returns a string representing the current state of the board

  board() {
    let arr = [];
    let counter = 0;
    for(let i = 0; i < 9; i++){
      arr.push([])
      for(let j = 0; j < 9; j++){
        arr[i].push(this.board_string[counter])
        counter++
      }
    }
    // return this.board_string
    return arr
  }

  checkZero(){
    // console.log(this.papan);
    let arrZero = [];
    for(let i = 0; i < this.papan.length; i++){
      for(let j = 0; j < this.papan[i].length; j++){
        if(this.papan[i][j] == '0'){
          arrZero.push([i, j])
        }
      }
    }
    return arrZero
  }

  getRows(baris, search){ //(baris keberapa, angkatebakan)
    let rows = this.papan[baris];
    // console.log(rows);
    for(let i = 0; i < rows.length; i++){
      // console.log(rows[i]);
      if(rows[i] == search){
        return false
      }
    }
    return true
  }

  getColumn(column, search){
    // console.log(this.papan);
    for(let i = 0; i < this.papan.length; i++){
      // console.log(this.papan[i][column]);
      if(this.papan[i][column] == search){
        return false
      }
    }
    return true
  }

  get3X3(rows, column, search){
    let startRows   = (Math.floor(rows / 3)) * 3;
    let startColumn = (Math.floor(column/3 )) * 3
    // console.log(this.papan);
    for(let i = startRows; i < startRows +3; i++){
      for(let j = startColumn; j < startColumn +3; j++){
        if(this.papan[i][j] == search){
          return false
        }
      }
    }
    return true
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
console.log(game.solve());
game.board();
game.checkZero();
// console.log(game.solve());
// game.getRows(0,'1');
game.board();
// game.checkZero();;
// game.getColumn(0, '1');
// game.getColumn(0, '1');
// console.log(game.solver())
// console.log(game.get3X3(0,9,2));
