"use strict"

class Sudoku {
  constructor(board_string) {
    this.boardString = board_string;
    this.arrSudoku = [];
    this.row = 9;
    this.col = 9;
  }

  generateBoard(){
    let arrString = this.boardString.split('');
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

  isCellClear(row, col, number){
    return (this.isRowClear(row, number) && this.isColClear(col, number) && this.isAreaClear(row, col, number));
  }



  solve(arrBoard) {
    let nextBoard = arrBoard;
    let currentRow = this.findNearestEmpty(arrBoard)[0];
    let currentCol = this.findNearestEmpty(arrBoard)[1];
    let resetCellValue = 0;
    let nextCellValue = 1;

    if (currentRow === -1 && currentCol === -1){
      return arrBoard
      //console.log(arrBoard)
    } else{

      
      while ( !this.isCellClear(currentRow, currentCol, nextCellValue) && nextCellValue<10){ 
        nextCellValue++;
         if (nextCellValue>9){
          nextBoard[currentRow][currentCol] = resetCellValue;
          return 0
        }
      }
      nextBoard[currentRow][currentCol] = nextCellValue;
      let future = this.solve(nextBoard);
       while (future === 0){
        while ( !this.isCellClear(currentRow, currentCol, nextCellValue) && nextCellValue<10){ 
          nextCellValue++;
           if (nextCellValue>9){
            nextBoard[currentRow][currentCol] = resetCellValue;
            return 0
          }
        }
        nextBoard[currentRow][currentCol] = nextCellValue;
        future = this.solve(nextBoard)
      }
      return this.solve(nextBoard); 


    }

  }





  findNearestEmpty(){ //find nearest empty cell on array, returns [row, col]
    for (let i = 0 ; i < this.row ; i++){
      for (let j = 0 ; j < this.col ; j++){
        if (this.arrSudoku[i][j] === 0){
          return [i,j]
        }
      }
    }
    return [-1,-1];
  }

  board() {  // Returns a string representing the current state of the board
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


function printBoard(arr) {  // Returns a string representing the current state of the board
  console.log('-------------------------')
  for (let i = 0; i < 9; i++){
    let rowText = ['|'];
    for (let j = 0; j < 9 ; j++){
      if (j === 2 || j === 5 || j === 8){
        rowText += ' ' + arr[i][j] + ' |'
      } else {
        rowText += ' ' + arr[i][j]
      }
    }
    console.log(rowText);
    if (i === 2 || i === 5 || i === 9){
      console.log('-------------------------')
    }
  }
  console.log('-------------------------')
}


// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[1]

var game = new Sudoku(board_string)
game.generateBoard();
// Remember: this will just fill out what it can and not "guess"

console.log('BEFORE PROGRAM')
game.board();
//console.log(game.findNearestEmpty(game.arrSudoku))
game.solve(game.arrSudoku)
console.log('AFTER PROGRAM')
game.board();

//console.log(game.isColClear(1,0, 7))