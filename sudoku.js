"use strict"

class Sudoku {
  constructor(boardString) {
  	this.boardString = boardString
  	this.arrBoard = [];
  	this.arrHorizontal = [];
  	this.arrVertikal = [];
  }
  solve() {

  }

  // Returns a string representing the current state of the board
  board() {

  	let splitBoardString = this.boardString.split('');
	for(let i = 0; i < 73; i+=9){
		this.arrBoard.push(splitBoardString.slice(i, i+9))

	}
	return this.arrBoard
  }

  checkHorizontal(indexNumber){
  	this.Horizontal = Math.floor(indexNumber / 9);
  	this.arrHorizontal = this.arrBoard[this.Horizontal]

  	return this.arrHorizontal
  }

  checkVertikal(indexNumber){
  	let indexNolVertikal = 0;
  	for(let i = 72; i >= 0; i-=9){
		if(indexNumber >= i){
			indexNolVertikal = indexNumber - i;
			break
		}
		// console.log(i)
	}
	for(let i = 0; i < 9; i++){
		this.arrVertikal.push(this.arrBoard[i][indexNolVertikal])

	}
	return this.arrVertikal

  }
}

let andrey = new Sudoku('105802000090076405200400819019007306762083090000061050007600030430020501600308900');
console.log(andrey.board())
console.log(andrey.checkHorizontal(2))
console.log(andrey.checkVertikal(2))


// The file has newlines at the end of each line,
// so we call split to remove it (\n)
// var fs = require('fs')
// var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
//   .toString()
//   .split("\n")[0]

// var game = new Sudoku(board_string)

// // Remember: this will just fill out what it can and not "guess"
// game.solve()

// console.log(game.board())
