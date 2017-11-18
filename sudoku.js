"use strict"

class Sudoku {
  constructor(board_string) {
    this.string = board_string
    this.arr = []
    this.posisiKosong =[]
  }

  solve(i,j,kordinatX,kordinatY) {
    let value = 0
    for (j; j <= 9; j++) {
      let tebakan = this.checkSolvetebakan(this.posisiKosong[i].tebakan[j],kordinatX,kordinatY)
      if (tebakan) {
        value = this.posisiKosong[i].tebakan[j]
        this.arr[kordinatX][kordinatY] =j
        this.posisiKosong[i].index = j
        return true;
      }

    }

    if (value === 0) {
      console.log(kordinatX + ' ' + kordinatY);
      console.log(this.posisiKosong[i].tebakan);
      this.arr[kordinatX][kordinatY] = 0
    }
    return false
  }

  cariPosisiKosong(){
    let i = 0
    while( i < this.posisiKosong.length) {
      debugger
      let kordinatX = this.posisiKosong[i].x
      let kordinatY = this.posisiKosong[i].y
      let indexobj = this.posisiKosong[i].index
      let sukses = this.solve(i,indexobj,kordinatX,kordinatY)

      if(sukses){
        i++
      }
      else {
        if(i != 0){
          i--
        }
        if(indexobj <= 9){
          this.posisiKosong[i].index = 0
        }
      }
    }
    return this.arr

  }

  checkSolvetebakan(tebakan,kordinatX,kordinatY){
    return this.checkRow(tebakan,kordinatX) && this.checkCol(tebakan,kordinatY) && this.checkRegion(tebakan,kordinatX,kordinatY)
  }

  checkTebakanTunggal(){
    let kosong = this.checkKosong()
    for (var i = 0; i < kosong.length; i++) {
      let kordinatX = kosong[i].x
      let kordinatY = kosong[i].y
      // console.log(kordinatX + ' '+ kordinatY);
      let arr = []
      for (var j = 1; j <=9; j++) {
        if (this.checkRow(j,kordinatX) && this.checkCol(j,kordinatY) && this.checkRegion(j,kordinatX,kordinatY)){
          arr.push(j)
        }
      }
      if (arr.length ==  1 ){
        this.arr[kordinatX][kordinatY] = arr[0]
        // this.posisiKosong[i].tebakan.splice(0,1)
      }
    }
  }

  checkTebakan(){
    this.posisiKosong = this.checkKosong()
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
    let objposisi = []
    for (var i = 0; i < this.arr.length; i++) {
      let obj = {}
      for ( let j = 0; j < this.arr[i].length; j++) {
        if (this.arr[i][j] == 0){
          // console.log(j);
          obj.x = i
          obj.y = j
          obj.tebakan = []
          obj.index = 0
          objposisi.push(obj)
        }
        obj = {}
      }
    }
    return objposisi
  }
}




// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-02_project-euler_50-easy-puzzles.txt')
  .toString()
  .split("\n")[2]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
// game.solve()
console.log(game.board())
console.log();
game.checkTebakanTunggal()
game.checkTebakan();
console.log();
// console.log(game.cariPosisiKosong());
console.log(game.posisiKosong);;

// console.log(game.posisiKosong);
// console.log(game.checkRegion(7,4,2));
