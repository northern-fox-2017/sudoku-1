"use strict"

class Sudoku {
  constructor(board_string) {
    this.SudokuBoard=[]
    this.arrZero=[]
    // this.random= Math.ceil(Math.random()*9)
    this.angka='123456789'
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
    console.log(this.arrZero)
    return this;
  }
//===============================CHECKER=========================================
  checkRow(row,tebakAngka){
    this.findZero();
    let getRow = row[1];
    // console.log(this.arrZero);
    for(let i=0;i<9;i++){
          if(tebakAngka!==this.SudokuBoard[i][getRow]){
            return true
          }else{
            false
          }
    }
  }

  checkColumn(column,tebakAngka){
    this.findZero();
    let getCol = column[0];
    for(let i = 0; i < 9;i++){
      if (tebakAngka!==this.SudokuBoard[getCol][i]){
        return true;
      }else{
        return false;
      }
    }
  }

  checkArea(baris,tebakAngka){
    let getCol = Math.floor(baris[1] / 3) * 3;
    let getRow = Math.floor(baris[0] / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
          if (this.SudokuBoard[getRow+i][getCol+j] == tebakAngka) {
            return true;
          }
        }
      }
    return false;
  }
//=============================END OF CHECKER===================================










}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
let fs = require('fs')
let board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

let game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
// game.solve()

// console.log(game.board())
// console.log(game.findZero())
// console.log(game.checkColumn());
console.log(game.checkRow());
