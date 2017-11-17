"use strict"

class Sudoku {
  constructor(boardString) {
  	this.boardString = boardString;
  	this.board = [];
  	this.tampungBoard = []; //Berguna buat backtrack biar ga reset board yang awal
  }
  printBoard(){
  	var indeksBoardString = 0;
  	for (var i = 0; i < 9; i++) {
  		this.board.push([]);
  		for (var j = 0; j < 9; j++) {
  			this.board[i].push(this.boardString[indeksBoardString])
  			indeksBoardString++;
  		}
  	}
  	this.tampungBoard = this.board;
  	return this.board;
  }
  checkRow(angkaSolve, col){
  	for (var i = 0; i < 9; i++) {
  		if (angkaSolve == this.tampungBoard[col][i]){
  			return false;
  		}
  	}
  	return true;
  	//naive version
  	/*let currentCheckRow = 0;
  	for (var i = 0; i < this.board.length; i++) {
  		for (var j = 0; j < this.board[i].length; j++) {
  		currentCheckRow = this.board[i][j];
  		for (var k = 0; k < this.board[i].length; k++) {
  			if (this.board[i][k] == currentCheckRow && k != j && this.board[i][k] != 0) {
  				return false;
  			}
  		}
  	}
  	}
  	return true;*/
  }
  checkCol(angkaSolve, row){
  	for (var i = 0; i < 9; i++) {
  		if (angkaSolve == this.tampungBoard[i][row]){
  			return false;
  		}
  	}
  	return true;
  	//naive version
  	/*let currentCheckCol = 0;
  	for (var i = 0; i < this.board.length; i++) {
  		for (var j = 0; j < 9; j++) {
  			currentCheckCol = this.board[j][i];
  			for (var k = 0; k < 9; k++) {
  				if (this.board[k][i] == currentCheckCol && k != j && this.board[k][i] != 0) {
  				return false;
  			}
  			}
  		}
  	}
  	return true;*/
  }
  checkArea(angkaSolve, col, row){
  	while (col%3 != 0) {
  		col--;
  	}
  	while (row % 3 != 0) {
  		row--;
  	}
  	for (var i = col; i < col+3; i++) {
  		for (var j = row; j < row+3; j++) {
  			if (angkaSolve == this.tampungBoard[i][j]) {
  				return false
  			}
  		}
  	}
  	return true;
  }

  solve() {
  	
  	//Cara backtrack
  	for (var j = 0; j < 9; j++) {
  		for (var k = 0; k < 9; k++) {
  			if (this.tampungBoard[j][k] == 0) {
  				for (var i = 1; i <= 9; i++) {
  					var angkaSolve = i;
  					if (this.checkRow(angkaSolve, j) && this.checkCol(angkaSolve, k) && this.checkArea(angkaSolve, j, k)) {
  						this.tampungBoard[j][k] = angkaSolve;
  					}
  				}
  			}  	
  		}
  	}
  	for (var j = 0; j < 9; j++) {
  		for (var k = 0; k < 9; k++) {
  			if (this.tampungBoard[j][k]==0) {
  				this.tampungBoard = this.board;
  				this.solve();
  			}
  		}
  	}
  	return this.tampungBoard;
  	//Cara random number
  	/*for (var j = 0; j < 9; j++) {
  		for (var k = 0; k < 9; k++) {
  			if (this.board[j][k] == 0) {
  				
  					var angkaSolve =Math.round(Math.random() * (6 - 1) + 1);
  					if (this.checkRow(angkaSolve, j) && this.checkCol(angkaSolve, k) && this.checkArea(angkaSolve, j, k)) {
  						this.board[j][k] = angkaSolve;
  					}
  				
  			}  	
  		}
  	}*/
  	//Cara looping number dari 1 ke 9
  	/*for (var j = 0; j < 9; j++) {
  		for (var k = 0; k < 9; k++) {
  			if (this.board[j][k] == 0) {
  				for (var i = 1; i <= 9; i++) {
  					var angkaSolve = i;
  					if (this.checkRow(angkaSolve, j) && this.checkCol(angkaSolve, k) && this.checkArea(angkaSolve, j, k)) {
  						this.board[j][k] = angkaSolve;
  					}
  				}
  			}  	
  		}
  	}*/
  	// return this.tampungBoard;
  }

  // Returns a string representing the current state of the board
  // board() {}

}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
/*var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
game.solve()

console.log(game.board())*/
var sudoku = new Sudoku('609300402700610080000476215863020790000145800310090600057208063201060574904000300');
 console.log(sudoku.printBoard());
// console.log(sudoku.checkRow(5, 2));
// console.log(sudoku.checkCol(6, 0));
// console.log(sudoku.checkArea(1, 3, 0));
 console.log(sudoku.solve());

 //Gagal
/* for (var j = 0; j < 9; j++) {
  		for (var k = 0; k < 9; k++) {
  			if (this.tampungBoard[j][k] != 0 ) {
  				this.board = this.tampungBoard;
  				return this.board;
  			}
  			else{
  				for (var l = 0; l < 9; l++) {
  					for (var m = 0; m < 9; m++) {
  						if (this.tampungBoard[l][m] == 0) {
  							for (var i = 1; i <= 9; i++) {
  								var angkaSolve = i;
  									if (this.checkRow(angkaSolve, l) && this.checkCol(angkaSolve, m) && this.checkArea(angkaSolve, l, m)) {
  										this.tampungBoard[l][m] = angkaSolve;
  									}
  							}
  						}  	
  					}
  				}
  				return this.solve();
  			}
  		}
  	}
  	*/