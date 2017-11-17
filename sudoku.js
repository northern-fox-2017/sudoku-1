"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = "105802000090076405200400819019007306762083090000061050007600030430020501600308900";
    this.empty = [];
  }

  solve() {}

  // Returns a string representing the current state of the board
  board() {
    var boardGame = []
    for(var i=0; i<9; i++){
      var boardIn = [];
      for(var j=0; j<9; j++){
        boardIn.push(this.board_string[(i*9)+j]);
      } 
      boardGame.push(boardIn); 
    }
    

    //cek Row 
    // yang ini belum direvisi 
    // for(var rowi=0; rowi<boardGame.length; rowi++){
    //   var sameRow = [];
    //   var maxRow = 0;
    //   for(var rowj=0; rowj<boardGame[rowi].length; rowj++){
    //     var countRow = 0
    //     for(var rowk=0; rowk<boardGame[rowi].length; rowk++){
    //       if(boardGame[rowi][rowk] === boardGame[rowi][rowj]){
    //         if(boardGame[rowi][rowj] === 0){
    //           sameRow.push(boardGame[rowi][rowj])
    //         }
    //       }
    //     }
    //   }
    //   return sameRow;
    // }
    
    //cek column 
    for(var coli=0; coli<boardGame.length; coli++){
      for(var colj=0; colj<boardGame[coli].length; colj++){
        if(boardGame[colj][coli] === 0){
          var koorCol = [];
          koorCol.push(colj);
          koorCol.push(coli);
          this.empty.push(koorCol);
          console.log(this.empty)
        }
      }
    }  
    
      
    
    // return boardGame;
  

  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
game.solve()

console.log(game.board());

//1 .bikin board
//2. cek row 
//3. cek column
//4. 
