
"use strict"

const IndexMapper = require('./indexMapper')

class Sudoku {
  constructor(board_string) {
    this.puzzle = board_string.split('').map(Number)
    this.mapper = new IndexMapper()
    this.zeroMapped = this.getZeroMapped() // one time initilization
    //this.sudoLen = 9
  }

  getZeroMapped() {
    return this.mapper.indexesMapped.filter(item => {
      return this.puzzle[item.i] === 0
    })
  }

  solve() { 
    for (let i = 0; i < this.zeroMapped.length; i++) { // loop zero occurence
      let iMap = this.zeroMapped[i]
      let newCandidate = this.puzzle[iMap.i]
      //console.log(this.board()) < visualisasi
      while (true) {
        newCandidate++
        if (newCandidate <= 9 && this.checkAll(iMap, newCandidate)) {
          this.puzzle[iMap.i] = newCandidate
          break // maju
        } else {
          this.puzzle[iMap.i] = 0 // sebelum mundur reset current with 0
          if (newCandidate > 9) {
            i -= 2
            break // mundur
          }
        }
      }
    }
  }

  board() {
    var str = ''
    let rows = this.getRows()
    rows.forEach((row, z) => {
      let strx = ''
      row.forEach((a, b) => {
        if (a == 0) {
          strx += '\x1b[31m ' + a + ' \x1b[0m'
        } else {
          strx += '\x1b[0m ' + a + ' \x1b[0m'
        }
        if ((b + 1) % 3 === 0 && b !== 8) {
          strx += '  '
        }
      })
      if ((z + 1) % 3 === 0 && z !== 8) {
        strx += '\n'
      }
      str += strx + '\n'
    })
    return str + '\n - - - - - - - + - - - - - - - \n'
  }


  getRows() {
    return this.mapper.rowsIndexes.map(row => {
      return row.map(i => this.puzzle[i])
    })
  }

  checkAll(iMap, candidate) {
    return this.checkRow(iMap.iRow, candidate) && this.checkColumn(iMap.iColumn, candidate) && this.checkRegion(iMap.iRegion, candidate)
  }

  checkRow(rowIndex, input) { //linear search
    for (let i of this.mapper.rowsIndexes[rowIndex]) {
      if (this.puzzle[i] === input) return false
    }
    return true
  }
  checkColumn(colIndex, input) {
    for (let i of this.mapper.columnsIndexes[colIndex]) {
      if (this.puzzle[i] === input) return false
    }
    return true
  }
  checkRegion(regIndex, input) {
    for (let i of this.mapper.regionsIndexes[regIndex]) {
      if (this.puzzle[i] === input) return false
    }
    return true
  }


}


// let fs = require('fs')
// let board_string = fs.readFileSync('set-01_sample.unsolved.txt')
//   .toString()
//   .split("\n")[1]

// WORLD HARDEST SUDOKU (Arto Inkala). solved
let board_string = '800000000003600000070090200050007000000045700000100030001000068008500010090000400'
let game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
console.time('Solved in')
console.log(game.board())
game.solve()


console.log(game.board())
console.timeEnd('Solved in')

// console.log(game.checkRow(0,1))
// console.log(game.checkColumn(3,1))
// console.log(game.checkRegion(1,1))
//console.log(game.zeroMapped())
// console.log(game.getRows())
// console.log(game.getColumns())
// console.log(game.getRegions())
// console.log(game.checkRow(0, 5), 'game.checkRow(0, 5)') // check input 5 dibaris ke 1
// console.log(game.checkColumn(1, 2), 'checkColumn(1, 2)')
// console.log(game.checkRegion(8, 3), 'checkRegion(8, 3)')

