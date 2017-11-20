"use strict"

class Sudoku {
  constructor(board_string,area) {
    this.board_string = board_string
    this.area = area
    this.board = []
    this.arrOfZerosij = []
  }

  findZeros(){
    console.log(this.board)

    for (var i = 0; i < this.board.length; i++) {
      // console.log(".")
      for (var j = 0; j < this.board[i].length; j++) {
        // console.log(".")
        if(this.board[i][j] == 0){
          // console.log('masuk if')
          let arrayXY =[]
          arrayXY.push(i)
          arrayXY.push(j)
          this.arrOfZerosij.push(arrayXY)

          }

        }
      }
      console.log(this.arrOfZerosij.length + " ini zeroes length ===========")
      return this.arrOfZerosij;
    }


  solve(i = 0) {

    //backtracking attempt 2 (recursive)
    if(i == 0){
      this.findZeros()
    }

    if(i == this.arrOfZerosij.length){
      return this.board

    }




      // console.log(this.arrOfZerosij)

      // console.log(i + ' ini i nya ==========')
      let verticalAxis = this.arrOfZerosij[i][0]
      let horizontalAxis = this.arrOfZerosij[i][1]
      // console.log(verticalAxis)
      // if(this.board[verticalAxis][horizontalAxis] == 9){
      //   i--
      //
      // }
      for (var j = parseInt(this.board[verticalAxis][horizontalAxis])+1; j <= 9; j++) {
        this.board[verticalAxis][horizontalAxis] = j.toString()
        // console.log(this.board[verticalAxis][horizontalAxis])
        if(this.checkBoard()){
          i++
          console.log(` ${j} + koordinat ${this.arrOfZerosij[i]}`)
          console.log(this.board)
          return this.solve(i)
        }




      }

        // console.log(j + 'masuk else if' + this.arrOfZerosij[i])
        this.board[verticalAxis][horizontalAxis] = '0'
        i--
        console.log(this.board)
        console.log(i + ' mundur ke koordinat ' + this.arrOfZerosij[i])
        return this.solve(i)


      // return this.solve(i)


    }




// ==============tanpa backtracking (solved)==================
//      for(let i = 0; i < this.area; i++){
      // for(let j = 0;j < this.area;j++){
      //   if(this.board[i][j] != 0){
//           for(let x = 1;x <= 9;x++){
//             this.board[i][j] = x.toString()
//             if(!this.checkBoard()){
//               this.board[i][j] = '0'
//
//             }
//             else{
//               break
//             }
//         }
//
//       }
//
//     }
//    return this.board
//   }
//   //backtracking 2
//
//   //got array of arrays with x,y of all the 0s. find zero and back track to last 0 position
//   //find the present value of previous 0 then replace i with value
// console.log(this.board)
// let arrPerbaikan = []
//   for (let i = 0; i < this.board.length; i++) {
//     for (let j = 0; j < this.board[i].length; j++) {
//
//       if(this.board[i][j] == 0){
//         console.log(this.board[i][j])
//         for(let x = 0; x < arrOfZerosij.length;x++){
//           // if(arrOfZerosij[x][0] == i && arrOfZerosij[x][1] == j){
//           //    arrPerbaikan.push(arrOfZerosij[x-1])
//           //   //  break
//           // }
//           // console.log(arrPerbaikan)
//
//         }
//         // console.log(arrPerbaikan)
//
//
//       }
//       // console.log(arrPerbaikan)
//
//
//
//   console.log(arrOfZerosij)
//   return this.board
// }
// }
// }
  checkRow(){
    for(let i = 0; i < this.area; i++){
      for(let j = 0;j < this.area;j++){
        if(this.board[i][j] != 0){
          // console.log(this.board[i][j])
          let duplicatesOrNot = this.board[i].filter(x => x == this.board[i][j])
          if(duplicatesOrNot.length > 1){
            return false
          }
        }
      }
    }
    return true
  }

  checkColumn(){
    let status = true
    for(let i = 0; i < this.area; i++){
      let arrColumn = []

      for(let j = 0; j < this.area;j++){
        arrColumn.push(this.board[j][i])
        }
        // console.log(arrColumn)
        for(let x = 0; x < arrColumn.length;x++){
          if(arrColumn[x] != 0){
            let duplicatesOrNot = arrColumn.filter(num => num == arrColumn[x])
            if(duplicatesOrNot.length > 1){
              // console.log(duplicatesOrNot)
              return false
            }
          }
        }
      }
      return status

    }

    checkArea(){

      let arrArea = []

      let arrKosong1 = []
      for(let i = 0; i < 3;i++){
        for(let j = 0; j < 3;j++){
          arrKosong1.push(this.board[i][j])

        }
      }
      arrArea.push(arrKosong1)
      // console.log(arrKosong1)


      let arrKosong2 = []
      for(let i = 0; i < 3;i++){
        for(let j = 3; j < 6;j++){
          arrKosong2.push(this.board[i][j])

        }

      }
      arrArea.push(arrKosong2)
      // console.log(arrKosong2)

      let arrKosong3 = []
      for(let i = 0; i < 3;i++){
        for(let j = 3; j < 6;j++){
          arrKosong3.push(this.board[i][j])

        }

      }
      arrArea.push(arrKosong3)
      // console.log(arrKosong3)

      let arrKosong4 = []
      for(let i = 0; i < 3;i++){
        for(let j = 3; j < 6;j++){
          arrKosong4.push(this.board[i][j])

        }

      }
      arrArea.push(arrKosong4)
      // console.log(arrKosong4)

      let arrKosong5 = []
      for(let i = 0; i < 3;i++){
        for(let j = 3; j < 6;j++){
          arrKosong5.push(this.board[i][j])

        }

      }
      arrArea.push(arrKosong5)
      // console.log(arrKosong5)


      let arrKosong6 = []
      for(let i = 0; i < 3;i++){
        for(let j = 3; j < 6;j++){
          arrKosong6.push(this.board[i][j])

        }

      }
      arrArea.push(arrKosong6)
      // console.log(arrKosong6)


      let arrKosong7 = []
      for(let i = 0; i < 3;i++){
        for(let j = 3; j < 6;j++){
          arrKosong7.push(this.board[i][j])

        }

      }
      arrArea.push(arrKosong7)
      // console.log(arrKosong7)




      let arrKosong8 = []
      for(let i = 0; i < 3;i++){
        for(let j = 3; j < 6;j++){
          arrKosong8.push(this.board[i][j])

        }

      }
      arrArea.push(arrKosong8)
      // console.log(arrKosong8)




      let arrKosong9 = []
      for(let i = 0; i < 3;i++){
        for(let j = 3; j < 6;j++){
          arrKosong9.push(this.board[i][j])

        }

      }
      arrArea.push(arrKosong9)
      // console.log(arrKosong9)
      // console.log(arrArea)
      for(let x = 0; x < arrArea.length;x++){
        for(let y = 0; y <arrArea.length;y++){
          if(arrArea[x][y] != 0){
            let duplicatesOrNot = arrArea[x].filter(num => num == arrArea[x][y])
            if(duplicatesOrNot.length > 1){
              // console.log(duplicatesOrNot)
              return false
            }
          }
        }

      }

      // console.log('masuk arrArea')
      return true

    }

    checkBoard(){
      // this.board[0].splice(1,1,'1')
      // console.log(this.board)
      if(this.checkRow() && this.checkColumn() && this.checkArea()){
        return true
      }
      else{
        return false
      }
    }


  // Returns a string representing the current state of the board
  printBoard(str = this.board_string,arr = []) {
    let rowArr = []
    if(str.length == 0){
      this.board = arr
      return this.board
    }
    else{
      for(let i = 0; i < this.area;i++){
        rowArr.push(str[i])
      }
      arr.push(rowArr)
      str = str.slice(9,str.length)
      return this.printBoard(str,arr)
    }
  }

}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string,9)

// Remember: this will just fill out what it can and not "guess"


console.log(game.printBoard())
// console.log(game.solve())
// console.log(game.checkRow())
// console.log(game.checkColumn())
// console.log(game.checkArea())
// console.log(game.checkBoard())

console.log('============SOLVE==============')
// console.log(game.findZeros())

// console.log(game.printBoard())
game.solve()
