"use strict"

class Sudoku {
  constructor(board_string) {
    this.boardString = board_string;
    this.arrSudoku = [];
    this.row = 9;
    this.col = 9;
  }

  generateBoard(){
    //write string to array 9 times to the right
    //create new line
    //write another string to array 9 times
    // do until  9 rows
    // let newBoard = [];
    let arrString = this.boardString.split('');
    //console.log(arrString);
    for (let i = 0 ; i < this.row ; i++ ){
      let arrRow = [];
      for (let j = 0 ; j < this.col ; j++){
        let boardTemp = arrString.shift();
        arrRow.push(Number(boardTemp));
      }
      this.arrSudoku.push(arrRow);
    }
  }

  isRowClear(row, number){
    console.log(this.arrSudoku[row]);
    return(this.arrSudoku[row].indexOf(number) === -1);
  }

  isColClear(col, number){
    for (let i = 0 ; i < this.row ; i++){
      if (this.arrSudoku[i][col] === number){
        return false
      }
    }
    return true
  }

  isAreaClear(row, col, number){
    let beginRow = (Math.floor(row/3)*3)
    let beginCol = (Math.floor(col/3)*3)

    for (let i = beginRow ; i < (beginRow+3) ; i++){
      for (let j = beginCol ; j < (beginCol+3) ; j++){
        if (this.arrSudoku[i][j] === number){
          return false
        }
      }
    }
    return true;

  }



  solve() {}

  // Returns a string representing the current state of the board
  board() {
    console.log('-------------------------')
    for (let i = 0; i < this.row ; i++){
      let rowText = ['|'];
      for (let j = 0; j < this.col ; j++){
        if (j === 2 || j === 5 || j === 8){
          rowText += ' ' + this.arrSudoku[i][j] + ' |'
        } else {
          rowText += ' ' + this.arrSudoku[i][j]
        }
      }
      console.log(rowText);
      if (i === 2 || i === 5 || i === 9){
        console.log('-------------------------')
      }
    }
    console.log('-------------------------')
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)
game.generateBoard();
// Remember: this will just fill out what it can and not "guess"
// game.solve()

console.log(game.isAreaClear(8,7, 9))
game.board();
