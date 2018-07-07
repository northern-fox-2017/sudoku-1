"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string=board_string.split('');
    this.SudokuBoard=[];
    this.arrZero=[];
    this.Result=[];
  }

  board() {
    let counter=0
    for (let i = 0; i < 9; i++) {
      this.SudokuBoard.push([])
      for (let j = 0; j < 9; j++) {
        this.SudokuBoard[i].push(this.board_string[counter])
        counter++
      }
    }
    return this.SudokuBoard;
  }

  //mencari koordinat 0 (yang nanti valuenya harus di ganti)
  findZero (){
    this.board();
    // console.log(this.board());
    for (let i = 0; i < this.SudokuBoard.length; i++) {
      for (let j = 0; j < this.SudokuBoard.length; j++) {
        if (this.SudokuBoard[i][j] == 0) {
          let zeroCoor = i+''+j;
          this.arrZero.push(zeroCoor);
        }
      }
    }
    // console.log(this.arrZero)
    return this.arrZero;
  }
//===============================CHECKER=========================================
  checkRow(row,tebakAngka){
    let getRow = row[1];
    // console.log(this.arrZero);
    for(let i=0;i<9;i++){
          if(tebakAngka==this.SudokuBoard[i][getRow]){
            return true
          }
    }
    return false
  }

  checkColumn(column,tebakAngka){
    let getCol = column[0];
    for(let i = 0; i < 9;i++){
      if (tebakAngka==this.SudokuBoard[getCol][i]){
        return true;
      }
    }
    return false
  }

  checkArea(row,tebakAngka){
    let getCol = Math.floor(row[1] / 3) * 3;
    let getRow = Math.floor(row[0] / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
          if (tebakAngka == this.SudokuBoard[getRow+i][getCol+j] ) {
            return true;
          }
        }
      }
    return false;
  }
//=============================END OF CHECKER===================================

//=============================SOLVER===========================================

 solve() {
  this.findZero();
  // console.log(arrZero)
  for (let i = 0; i < this.arrZero.length; i++) {
    let tebakAngka = 1;
    let set = true;
    for (let j = 0; j <9; j++) {
      if (this.checkRow(this.arrZero[i], tebakAngka) == false) {
      if (this.checkColumn(this.arrZero[i], tebakAngka) == false){
      if (this.checkArea(this.arrZero[i], tebakAngka) == false) {
            this.SudokuBoard[this.arrZero[i][0]][this.arrZero[i][1]] = String(tebakAngka);
            // console.log(tebakAngka);
            set = false;
            }
          }
        }
        tebakAngka++;
      }
    }
    return this.SudokuBoard;
  }

//===============================RESULT BOARD===================================
resultBoard() {
  this.solve();
  let rowBoard = this.SudokuBoard.length;
  let colBoard = this.SudokuBoard[0].length/3;

  for (let i = 0; i < rowBoard; i++){
    this.Result.push([]);
    // console.log(this.Result)
    for (let j = 0; j < colBoard; j++){
      this.Result[i].push([]);
      for (let k = j*3; k < 3*(j+1);k++){
        this.Result[i][j].push(this.SudokuBoard[i][k])
      }
    }
  }
  return this.Result
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
// console.log(game.solve());
console.log(game.resultBoard());
// console.log(game.board())
// console.log(game.findZero())
// console.log(game.checkColumn());
// console.log(game.checkRow());
// console.log(game);
