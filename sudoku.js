"use strict"

class Sudoku {
  constructor(board_string) {}
  
       
  
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

console.log(game.board())
