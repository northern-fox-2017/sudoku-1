"use strict"

class Sudoku {
  constructor(board_string) {
    this.board_string = "105802000090076405200400819019007306762083090000061050007600030430020501600308900";
    this.empty = [];
    this.sama = false;
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
    
    

    //Tebak 1-9 & sama/ga
    // for(var tebi=0; tebi<boardGame.length; tebi++){
    //   for(var tebj=0; tebj<boardGame.length; tebj++){
        
    //   }
    // }


    //cek Row  
  //   var totalSameRow = []
  //   var rowi = 0
  //   while(this.sama !== true){
  //     var sameRow = [];
  //     for(var rowj=0; rowj<boardGame[rowi].length; rowj++){
  //       var countRow = 0
  //       for(var rowk=0; rowk<boardGame[rowi].length; rowk++){
  //         if(boardGame[rowi][rowk] == boardGame[rowi][rowj]){
  //           if(countRow == 1){
  //             sameRow.push("row:"+rowi+" col:"+rowj+" angka:"+boardGame[rowi][rowk]+" count:"+countRow);
  //             this.sama = true;
  //           }
  //           countRow++;
  //         }
  //       }
  //     }
  //     rowi++
  //     totalSameRow.push(sameRow);
  //   }
  //   console.log(this.sama);
  //   return totalSameRow;

    //cek Col
  //   var totalSameCol = [];
  //   var coli = 0;
  //   while(this.sama !== true){
  //     var sameCol = [];
  //     for(var colj=0; colj<boardGame[coli].length; colj++){
  //       var countCol =0;
  //       for(var colk=0; colk<boardGame[coli].length; colk++){
  //         if(boardGame[colj][coli] == boardGame[colk][coli]){
  //           if(countCol == 1){
  //             sameCol.push("row:"+coli+" col:"+colj+" angka:"+boardGame[colj][coli]+" count:"+countCol);
  //             this.sama = true;
  //           }
  //         }
  //         countCol++
  //       }
  //     }
  //     coli++;
  //     totalSameCol.push(sameCol);
  //   }
  //   console.log(boardGame)
  //   return totalSameCol;

    //cek Kotak
    for(var koti=0; koti<3; koti++){
      for(var kotj=0; kotj<3; kotj++){
        console.log(boardGame[koti][kotj], koti, kotj);
      }
    }
    return boardGame;
  }

  cekEmpty(){
    //cek this.empty
    for(var ceki=0; ceki<boardGame.length; ceki++){
      for(var cekj=0; cekj<boardGame[ceki].length; cekj++){
        if(boardGame[ceki][cekj] == 0){
          var koorCek = [];
          koorCek.push(ceki, cekj);
          this.empty.push(koorCek);
        }
      }
    }
    boardGame[this.empty[5][0]][this.empty[5][1]] = 9;
    console.log(boardGame[this.empty[5][0]][this.empty[5][1]])
    return this.empty; 
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
//2. cari koordinat 0 taro di this.empty
//3. tebak angka 1-9 (angkaTebak)
//LOOP
//4. cek row (angkaTebak)
//5. cek column (angkaTebak)
//6. cek kotak (angkaTebak)
//  IF gaada yang sama 
//    ke koorinat selanjutnya  
//  ELSE IF ada yang sama
//    mundur ke koordinat sebelumnya tebak angka lagi
// 
