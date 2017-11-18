"use strict"

class Sudoku {
  constructor(boardString) {
    this.boardString = boardString
    this.arrBoard = [];
    this.boardKosong = [];
    this.tampungBoardKosong = [];
    this.tampungRowKosong = '';
    this.tampungColumnKosong = [];
    this.tampungGroupKosong = [];

    

  }
 

  // Returns a string representing the current state of the board
  board() {

    let splitBoardString = this.boardString.split('');
    for(let i = 0; i < 73; i+=9){
      this.arrBoard.push(splitBoardString.slice(i, i+9))

    }
    return this
  }

  findBoardKosong(){
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        if(this.arrBoard[i][j] === '0'){
          this.boardKosong.push([i, j])
        }
      }
    }
    return this
  }


  findRow(row){
    this.tampungRowKosong = this.arrBoard[this.boardKosong[row][0]]
    return this
  }

  findColumn(column){
    for(let j = 0; j < 9; j++){
      this.tampungColumnKosong.push(this.arrBoard[j][column])
      
    }
    return this

  }

  findGroup(row, column){
    let lingkupRow = [];
    let lingkupColumn = [];
    for(let i = 2; i < 9; i+=3){
      if(row <= i){
        for(let j = i - 2; j <= i; j++){
          lingkupRow.push(j)
        }
        break
      }
    }
    for(let i = 2; i < 9; i += 3){
      if(column <= i){
        for(let j = i - 2; j <= i; j++){
          lingkupColumn.push(j)
        }
        break
      }
    }
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        this.tampungGroupKosong.push(this.arrBoard[lingkupRow[i]][lingkupColumn[j]])
      }
    }
    return this
  }

  solve(){

  }


 

}

let andrey = new Sudoku('105802000090076405200400819019007306762083090000061050007600030430020501600308900');
andrey.board().findBoardKosong().findBoardKosong().findRow(0, 1).findColumn(1).findGroup(0,1)
// console.log(andrey.board())
console.log(andrey.arrBoard)
// console.log(andrey.boardKosong)
console.log(andrey.tampungRowKosong)
console.log(andrey.tampungColumnKosong)
console.log(andrey.tampungGroupKosong)
// console.log(andrey.findRow(0, 1))

// console.log(andrey.checkHorizontal(28))
// console.log(andrey.findBoardKosong())

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
// var fs = require('fs')
// var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
//   .toString()
//   .split("\n")[0]

// var game = new Sudoku(board_string)

// // Remember: this will just fill out what it can and not "guess"
// game.solve()

// console.log(game.board())
