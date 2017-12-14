// import { fork } from 'cluster';

"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
    this.dir =  '123456789'
    this.status= true;
    this.row = 9
    this.col = 9
    this.arrSudo = []
  }

  // [ [ '5', '8', '0', '2', '0', '0', '0', '0', '9' ],
  // [ '0', '0', '7', '6', '4', '0', '5', '2', '0' ],
  // [ '0', '4', '0', '0', '8', '1', '9', '0', '1' ],
  // [ '9', '0', '0', '7', '3', '0', '6', '7', '6' ],
  // [ '2', '0', '8', '3', '0', '9', '0', '0', '0' ],
  // [ '0', '0', '6', '1', '0', '5', '0', '0', '0' ],
  // [ '7', '6', '0', '0', '0', '3', '0', '4', '3' ],
  // [ '0', '0', '2', '0', '5', '0', '1', '6', '0' ],
  // [ '0', '3', '0', '8', '9', '0', '0', '0', '0' ] ]

  solve() {
    debugger
   for (let i = 0; i < this.col; i++) {
     for (let j = 0; j < this.row; j++) {
       //cek row
       if(this.arrSudo[i][j] == 0){
          for(let k = 1;k<=9;k++){
            
             if(this.cekRow(i,k) ==  true) { 
              if(this.cekCol(j,k)==true){
                if(this.cekArea(i,j,k)==true) {
                  this.arrSudo[i][j] = String(k)
                  
                }
              }
            }
            
           }
      
        }
  
      
  
    }
  }
  return this.arrSudo
}

  cekCol(col,input){

    for (let i = 0; i < this.row; i++) {
      if(this.arrSudo[i][col]==input){
        return false
      }
      
    }
    return this.status
    
  }

  cekArea (row,col,input){
    debugger
    let Col = Math.floor(col/3)*3 
    let Row = Math.floor(row/3)*3

    for (let i = Row; i < Row+3; i++) {
      for (let j = Col; j < Col+3; j++) {
        if(this.arrSudo[i][j] == input){
          return false
        }
        
      }
      
    }
    return this.status
  }

  cekRow(row,input){
    for (let i = 0; i < this.row; i++) {
      if(this.arrSudo[row][i]==input){
        return false
      }
      
    }
    return this.status
  }

  // Returns a string representing the current state of the board
  board() {
    let countPush = 0
    for (let i = 0; i < this.row; i++) {
      this.arrSudo.push([])
      for (let j = 0; j < this.col ; j++) {
        this.arrSudo[i].push(this.board_string[countPush])
        countPush++
        
      }  
    }
    return this.arrSudo
    
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
game.board()
game.solve()
console.log(game.solve())
// console.log(game.cekCol(1,5))
// console.log(game.cekArea(0,3,5))
