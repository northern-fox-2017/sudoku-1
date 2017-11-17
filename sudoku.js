"use strict"


class Sudoku {
  constructor(board_string) {
    this.puzzle = board_string.split('').map(Number)
    this.sudoLen = 9
    this.data = []
  }
  
  solve() { }

  board() {
    return this.getRows().map(row =>{
      return row.join(' ')
    }).join('\n')
  }

  // isValid(row){ 
  //   var x =  row.filter(num => num > 0).filter((num,index, arr) =>{
  //     return arr.indexOf(num) !== index
  //   })
  //   return x.length === 0
  // }

  checkRow(rowIndex, input){
    return this.getRows()[rowIndex].indexOf(input) === -1
  }
  checkColumn(colIndex,input){
    return this.getColumns()[colIndex].indexOf(input) === -1
  }
  checkRegion(regIndex, input){
    return this.getRegions()[regIndex].indexOf(input) === -1
  }
  
  getRows() {
    let rows = []
    for (let i = 0; i < 9 * 9; i += 9) {
      let row = []
      for (let j = i; j < i + 9; j++) {
        row.push(this.puzzle[j])
      }
      rows.push(row)
    }
    return rows
  }

  getColumns() {
    let cols = [];
    for (let i = 0; i < 9; i++) {
      let col = [];
      for (let j = i; j < 9 * 9; j += 9) {
        col.push(this.puzzle[j]); 
      }
      cols.push(col);
    }
    return cols;
  }
  getRegions() {
    let regWidth = 3;
    let regions = [];
    for (let i = 0; i < 9; i += regWidth) {
      let x = i * 9;
      for (let j = 0; j < regWidth; j++) {
        let head = x + j * regWidth;
        let tail =head +
          Math.pow(regWidth, regWidth) - 9 +
          (regWidth - 1);
        let region = [];
        for (let k = head; k <= tail; k += 9) {
          for (let m = k; m < k + regWidth; m++) {
            region.push(this.puzzle[m]); // m indexnya
          }
        }
        regions.push(region);
      }
    }
    return regions;
  }

} //end of class

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
let fs = require('fs')
let board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

let game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
//game.solve()

console.log(game.board())
console.log(game.checkRow(0, 5)) // check input 5 dibaris ke 1
console.log(game.checkColumn(1, 2))
console.log(game.checkRegion(8, 3))
//console.log(game.isValid([0,0,1,0,0,2,3,4,5]))


