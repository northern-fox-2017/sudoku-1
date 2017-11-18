class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
    this.result = []
  }

  board() {
    var arrayString = board_string.split('')
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

  check3x3(number, row, column) {
    if (row < 3 && column < 3) {
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          if (this.result[i][j] == number) {
            return false
          }
        }
      }
      return true
    } else if (row < 3 && column < 6) {
      for (var i = 0; i < 3; i++) {
        for (var j = 3; j < 6; j++) {
          if (this.result[i][j] == number) {
            return false
          }
        }
      }
      return true
    } else if (row < 3 && column < 9) {
      for (var i = 0; i < 3; i++) {
        for (var j = 6; j < 9; j++) {
          if (this.result[i][j] == number) {
            return false
          }
        }
      }
      return true
    } else if (row < 6 && column < 3) {
      for (var i = 3; i < 6; i++) {
        for (var j = 0; j < 3; j++) {
          if (this.result[i][j] == number) {
            return false
          }
        }
      }
      return true
    } else if (row < 6 && column < 6) {
      for (var i = 3; i < 6; i++) {
        for (var j = 3; j < 6; j++) {
          if (this.result[i][j] == number) {
            return false
          }
        }
      }
      return true
    } else if (row < 6 && column < 9) {
      for (var i = 3; i < 6; i++) {
        for (var j = 6; j < 9; j++) {
          if (this.result[i][j] == number) {
            return false
          }
        }
      }
      return true
    } else if (row < 9 && column < 3) {
      for (var i = 6; i < 9; i++) {
        for (var j = 0; j < 3; j++) {
          if (this.result[i][j] == number) {
            return false
          }
        }
      }
      return true
    } else if (row < 9 && column < 6) {
      for (var i = 6; i < 9; i++) {
        for (var j = 3; j < 6; j++) {
          if (this.result[i][j] == number) {
            return false
          }
        }
      }
      return true
    } else if (row < 9 && column < 9) {
      for (var i = 6; i < 9; i++) {
        for (var j = 6; j < 9; j++) {
          if (this.result[i][j] == number) {
            return false
          }
        }
      }
      return true
    }
  }

  checkEmpty() {
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var newArr = []
        if (this.result[i][j] == 0) {
          newArr.push(i)
          newArr.push(j)
          this.result.push(newArr)
        }
      }
    }
  }

}

var board_string = "105802000090076405200400819019007306762083090000061050007600030430020501600308900"
var game = new Sudoku(board_string)

console.log(game.board())
console.log(game.printBoard());
// console.log(game.checkColumn(1, 6));
// console.log(game.checkColumn(6, 1));
console.log(game.check3x3(6, 1, 2));
