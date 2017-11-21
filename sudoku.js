
// "use strict"

const IndexMapper = require('./indexMapper')

class Sudoku {
  constructor() {
    this.puzzle
    this.zeroMapped
    this.mapper = new IndexMapper()// one time initilization
  }
  setBoard(boardString) {
    this.puzzle = boardString.split('').map(Number)
    this.zeroMapped = this.getZeroMapped()
  }
  getZeroMapped() {
    return this.mapper.indexesMapped.filter(item => {
      return this.puzzle[item.i] === 0
    })
  }
  solve() {
    for (let i = 0; i < this.zeroMapped.length; i++) { // loop zero occurence
      let iMap = this.zeroMapped[i]
      let newCandidate = this.puzzle[iMap.i] +1
      //console.log(this.board()) < visualisasi
      while (true) {
        if (newCandidate <= 9 && this.isCandidateAllowed(iMap, newCandidate)) {
          this.puzzle[iMap.i] = newCandidate
          break // maju
        } else {
          if (newCandidate > 9) {
            this.puzzle[iMap.i] = 0 // sebelum mundur reset current with 0
            i -= 2 // mundur
            break
          }
        }
        newCandidate++
      }
    }
  }
  isCandidateAllowed(iMap, candidate) {
    for (let i = 0; i < 9; i++) {
      if (this.puzzle[this.mapper.rowsIndexes[iMap.iRow][i]] === candidate) {
        return false
      }
      if (this.puzzle[this.mapper.columnsIndexes[iMap.iColumn][i]] === candidate) {
        return false
      }
      if (this.puzzle[this.mapper.regionsIndexes[iMap.iRegion][i]] === candidate) {
        return false
      }
    }
    return true
  }
  board() {
    var str = ''
    let zeroIndexes = game.zeroMapped.map(el => el.i)
    let rows = this.mapper.rowsIndexes
    rows.forEach((row, i) => {
      let rowStr = ''
      row.forEach((index, j) => {
        if (zeroIndexes.indexOf(index) >= 0) { // index of zero
          if (this.puzzle[index] === 0) {
            rowStr += '\x1b[31m ' + this.puzzle[index] + ' \x1b[0m' 
          } else {
            rowStr += '\x1b[32m ' + this.puzzle[index] + ' \x1b[0m' 
          }
        } else {
          rowStr += ' ' + this.puzzle[index] + ' '
        }
        if ((j + 1) % 3 === 0 && j !== 8) {
          rowStr += '  '
        }
      })
      if ((i + 1) % 3 === 0 && i !== 8) {
        rowStr += '\n'
      }
      str += rowStr + '\n'
    })
    return str + '\n - - - - - - - + - - - - - - - \n'
  }

}

let fs = require('fs')
let board_stringsA = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")
let board_stringsB = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")
let board_strings = board_stringsA.concat(board_stringsB)
console.time('All puzzle solved in')
let game = new Sudoku()
for (let i = 0; i < board_strings.length; i++) {
  game.setBoard(board_strings[i])
  console.time('Puzzle number ' + i + ' Solved in')
  console.log(game.board())
  game.solve()
  console.log(game.board())
  console.timeEnd('Puzzle number ' + i + ' Solved in')
  console.log('---------------------------------------------------\n')
}
console.timeEnd('All puzzle solved in')
// WORLD HARDEST SUDOKU (Arto Inkala). solved
// let board_string = '800000000003600000070090200050007000000045700000100030001000068008500010090000400'
// board_string = '000704005020010070000080002090006250600070008053200010400090000030060090200407000'

console.log()


