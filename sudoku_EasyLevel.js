"use strict"

class Sudoku {
  constructor(board_string) {
    this.string = board_string
    this.arr = []
    this.posisiKosong =[]
  }

  solve() {
    for (var i = 0; i < this.posisiKosong.length; i++) {
      let kordinatX = this.posisiKosong[i].x
      let kordinatY = this.posisiKosong[i].y
      // console.log(kordinatX + ' '+ kordinatY);
      let value = 0
      let counter = 0

      if (this.posisiKosong[i].tebakan.length ==  1 ){
        value = this.posisiKosong[i].tebakan[0]
        this.arr[kordinatX][kordinatY] = this.posisiKosong[i].tebakan[0]
        // this.posisiKosong[i].tebakan.splice(0,1)
      }
      else {
        for (var j = 0; j < this.posisiKosong[i].tebakan.length; j++) {
          let tebakan = this.checkSolvetebakan(this.posisiKosong[i].tebakan[j],kordinatX,kordinatY)
          if (tebakan) {
            value = this.posisiKosong[i].tebakan[j]
            this.arr[kordinatX][kordinatY] = this.posisiKosong[i].tebakan[j]
            this.posisiKosong[i].index = j
            // this.posisiKosong[i].tebakan.splice(j,1)
            break;
          }
        }
        if (value == 0) {
          console.log(kordinatX + ' '+ kordinatY);
          console.log(value);
          // i = i - 1
        }
      }

      // while(this.checkSolvetebakan(this.posisiKosong[i].tebakan[counter],kordinatX,kordinatY)) {
      //     this.arr[kordinatX][kordinatY] = this.posisiKosong[i].tebakan[counter]
      //     // counter++
      //     // statusTebakan = this.checkSolvetebakan()
      // }
    }
    return this.arr
  }

  backtrack(){

  }


  checkSolvetebakan(tebakan,kordinatX,kordinatY){
    return this.checkRow(tebakan,kordinatX) && this.checkCol(tebakan,kordinatY) && this.checkRegion(tebakan,kordinatX,kordinatY)
  }

  checkTebakan(){
    for (var i = 0; i < this.posisiKosong.length; i++) {
      let kordinatX = this.posisiKosong[i].x
      let kordinatY = this.posisiKosong[i].y
      // console.log(kordinatX + ' '+ kordinatY);
      for (var j = 1; j <=9; j++) {
        if (this.checkRow(j,kordinatX) && this.checkCol(j,kordinatY) && this.checkRegion(j,kordinatX,kordinatY)){
          this.posisiKosong[i].tebakan.push(j)
        }
      }
      if (this.posisiKosong[i].tebakan.length ==  1 ){
        this.arr[kordinatX][kordinatY] = this.posisiKosong[i].tebakan[0]
        this.posisiKosong[i].index = 0
        // this.posisiKosong[i].tebakan.splice(0,1)
      }
    }

    return this.posisiKosong
  }
  checkAngka(a,x,y){
    return this.checkRow(a,x) && this.checkCol(a,y) && this.checkRegion(a,x,y)
  }

  checkRow (tebakanAngka,baris){
    for (var i = 0; i <9; i++) {
      if (tebakanAngka == this.arr[baris][i]){
        return false
      }
    }
    return true

  }
  checkCol(tebakanAngka,kolom){
    for (var i = 0; i <9; i++) {

      if (tebakanAngka == this.arr[i][kolom]){
        return false
      }
    }
    return true
  }
  checkRegion(tebakanAngka,baris,kolom){
    baris = Math.floor(baris / 3) * 3
    kolom = Math.floor(kolom / 3 ) * 3

    for (var i = 0; i <  3 ; i++) {
      for (var j = 0; j <  3; j++) {

        if (this.arr[i + baris][j + kolom] === tebakanAngka){
          return false
        }
      }
    }
    return true
  }
  // Returns a string representing the current state of the board
  board() {

    for (var i = 0; i < 9; i++) {
      this.arr.push([])
      for (var j = 0; j <9; j++) {
        this.arr[i].push(+this.string[j])
      }
      this.string = this.string.slice(9)
    }
    return this.arr
  }
  checkKosong() {
    for (var i = 0; i < this.arr.length; i++) {
      let obj = {}
      for ( let j = 0; j < this.arr[i].length; j++) {
        if (this.arr[i][j] == 0){
          // console.log(j);
          obj.x = i
          obj.y = j
          obj.tebakan = []
          obj.index = ''
          this.posisiKosong.push(obj)
        }
        obj = {}
      }
    }
    // return this.posisiKosong
  }





}
// 1, 4, 5, 8, 3, 2, 6, 7, 0
// [ [ 1, 7, 5, 8, 9, 2, 6, 0, 3 ],
//   [ 8, 9, 3, 1, 7, 6, 4, 2, 5 ],
//   [ 2, 0, 6, 4, 5, 0, 8, 1, 9 ],
//   [ 5, 1, 9, 2, 4, 7, 3, 8, 6 ],
//   [ 7, 6, 2, 5, 8, 3, 1, 9, 4 ],
//   [ 3, 8, 4, 9, 6, 1, 7, 5, 2 ],
//   [ 9, 5, 7, 6, 1, 4, 2, 3, 8 ],
//   [ 4, 3, 8, 7, 2, 9, 5, 6, 1 ],
//   [ 6, 2, 1, 3, 0, 8, 9, 7, 0 ] ]
//  1  4  5 | 8  9  2 | 6  7  3
//  8  9  3 | 1  7  6 | 4  2  5
//  2  7  6 | 4  3  5 | 8  1  9
// -----------------------------
//  5  1  9 | 2  4  7 | 3  8  6
//  7  6  2 | 5  8  3 | 1  9  4
//  3  8  4 | 9  6  1 | 7  5  2
// -----------------------------
//  9  5  7 | 6  1  4 | 2  3  8
//  4  3  8 | 7  2  9 | 5  6  1
//  6  2  1 | 3  5  8 | 9  4  7


//   [ 1, 4, 5, 8, 9, 2, 7, 6, 3 ],
//   [ 8, 9, 3, 1, 7, 6, 4, 2, 5 ],
//   [ 2, 7, 6, 4, 3, 5, 8, 1, 9 ],
//
//   [ 5, 1, 9, 2, 4, 7, 3, 8, 6 ],
//   [ 7, 6, 2, 5, 8, 3, 1, 9, 4 ],
//   [ 3, 8, 4, 9, 6, 1, 0, 5, 2 ],
//
//   [ 9, 5, 7, 6, 1, 4, 2, 3, 8 ],
//   [ 4, 3, 8, 7, 2, 9, 5, 0, 1 ],
//   [ 6, 2, 1, 3, 5, 8, 9, 4, 7 ] ]
// //mudur cari index
// [ [ 1, 4, 5, 8, 9, 2, 6, 7, 3 ],
//   [ 8, 9, 3, 1, 7, 6, 4, 2, 5 ],
//   [ 2, 7, 6, 4, 3, 5, 8, 1, 9 ],
//
//   [ 5, 1, 9, 2, 4, 7, 3, 8, 6 ],
//   [ 7, 6, 2, 5, 8, 3, 1, 9, 4 ],
//   [ 3, 8, 4, 9, 6, 1, 7, 5, 2 ],
//
//   [ 9, 5, 7, 6, 1, 4, 2, 3, 8 ],
//   [ 4, 3, 8, 7, 2, 9, 5, 6, 1 ],
//   [ 6, 2, 1, 3, 5, 8, 9, 4, 7 ] ]

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[1]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
// game.solve()
console.log(game.board())
console.log();
game.checkKosong();
game.checkTebakan()
console.log();
console.log(game.solve());
console.log(game.checkTebakan());;

// console.log(game.posisiKosong);
// console.log(game.checkRegion(7,4,2));
