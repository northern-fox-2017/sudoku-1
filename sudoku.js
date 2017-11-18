"use strict"

class Sudoku {
  constructor(board_string) {}
       
      //this.trueOrFalse = true 
  
  solve() {
	var tampung = '';
  }

  
  // Returns a string representing the current state of the board
  
  board() {
  var arr = [];
  var baris = 9;
  var kolom = 9;
  var counter = 0;
  for(var i = 0; i < baris; i++){
	  arr.push([])
	  for(var j = 0; j < kolom; j++){
		  arr[i].push(board_string[counter++])
		  //counter++
	  }
  }
  return arr
  }
  
  cekBaris(baris, angka){
	  let trueOrFalse = true 
	  for(var i = 0; i < this.board().length; i++){
		  if(this.board()[baris][i] == angka){
			  trueOrFalse = false
		  } else if (this.board()[baris][i] !== angka){
			  
		  }
		  //console.log(this.board()[baris][i])
     }
	 
	 return trueOrFalse
     
  }
  
  cekKolom(kolom, angka){
	  let trueOrFalse = true
	  for(var i = 0; i < this.board().length; i++){
		  if(this.board()[i][kolom] == angka){
			  trueOrFalse = false
		  } else if (this.board()[i][kolom] !== angka){
			  
		  }
	  }
	  return trueOrFalse
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku('619030040270061008000047621486302079000014580031009060005720806320106057160400030')

// Remember: this will just fill out what it can and not "guess"
game.solve()
//console.log(game.cek())
//console.log(game.board())
console.log(game.cekBaris(0, 7))
console.log(game.cekKolom(0, 1))





