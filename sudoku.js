class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
    this.result = []
  }

  board() {
    var arrayString = board_string.toString().split('')
    var newArr = []
    for (var i = 0; i < 9; i++) {
      newArr = []
      for (var j = 0; j < 9; j++) {
        newArr.push(+arrayString[j])
      }
      arrayString.splice(0, 9)
      this.result.push(newArr)
    }
  }

  printBoard() {
    var resultBoard = ''
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        resultBoard = resultBoard + ' ' + this.result[i][j]
      }
      resultBoard = resultBoard + '\n'
    }
    resultBoard = resultBoard + '\n'
    return resultBoard
  }

  checkRow(number, row) {
    for (var i = 0; i < 9; i++) {
      if (this.result[row][i] == number) {
        return false
      }
    }
    return true
  }

  checkColumn(number, column) {
    for (var i = 0; i < 9; i++) {
      if (this.result[i][column] == number) {
        return false
      }
    }
    return true
  }

  solver(){    
  }
  
}

var board_string = "105802000090076405200400819019007306762083090000061050007600030430020501600308900"
var game = new Sudoku(board_string)

console.log(game.board())
console.log(game.printBoard());
// console.log(game.checkColumn(1, 6));
// console.log(game.checkColumn(6, 1));