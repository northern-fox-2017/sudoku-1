"use strict"

class Sudoku {
  constructor(boardString) {
    this.boardString = boardString
    this.arrBoard = [];

    

  }
 

  // Returns a string representing the current state of the board
  board() {

    let splitBoardString = this.boardString.split('');
    for(let i = 0; i < 73; i+=9){
      this.arrBoard.push(splitBoardString.slice(i, i+9))

    }
    return this
  }

  findBoardKosong(){
    this.boardKosong = []
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        if(this.arrBoard[i][j] === '0'){
          this.boardKosong.push([i, j])
        }
      }
    }
    return this.boardKosong
  }


  findRow(index){
    this.tampungRowKosong = this.arrBoard[this.boardKosong[index][0]]
    return this.tampungRowKosong
  }

  findColumn(index){
    this.tampungColumnKosong = []
    for(let j = 0; j < 9; j++){
      this.tampungColumnKosong.push(this.arrBoard[j][this.boardKosong[index][1]])
      
    }
    return this.tampungColumnKosong

  }

  findGroup(index){
    this.lingkupRow = [];
    this.lingkupColumn = [];
    this.tampungGroupKosong = [];
    for(let i = 2; i < 9; i+=3){
      if(this.boardKosong[index][0] <= i){

        for(let j = i - 2; j <= i; j++){
          this.lingkupRow.push(j)
        }
        break
      }
    }
    for(let i = 2; i < 9; i += 3){
      if(this.boardKosong[index][1] <= i){
        for(let j = i - 2; j <= i; j++){
          this.lingkupColumn.push(j)
        }
        break
      }
    }
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        this.tampungGroupKosong.push(this.arrBoard[this.lingkupRow[i]][this.lingkupColumn[j]])
      }
    }
    return this.tampungGroupKosong
  }

  findingAngkaPengganti(){
    let angka = '123456789';
    this.arrAngkaIsi = [];

    let boardKosong = this.findBoardKosong();
    for(let i = 0; i < boardKosong.length; i++){
      let row = this.findRow(i)
      let column = this.findColumn(i)
      let group = this.findGroup(i)
      let arrTampung = [];
      arrTampung.push(row.join(''))
      arrTampung.push(column.join(''))
      arrTampung.push(group.join(''))
      let join = arrTampung.join('')
      this.arrAngkaIsi.push([])
      for(let j = 0; j < angka.length; j++){
        if(join.indexOf(angka[j]) === -1){
          this.arrAngkaIsi[i].push(angka[j])
        }
      }



    }
    return this.arrAngkaIsi;   

  }
  solve(){
    if(this.findingAngkaPengganti().length === 0){
      return this.finish();
    }else{
      for(let i = 0; i < this.findingAngkaPengganti().length; i++){
      
        if(this.findingAngkaPengganti()[i].length === 1){
          this.angkaPengganti = this.findingAngkaPengganti()[i].join()
          this.idxBoardKosong = this.findBoardKosong()[i]
          // return this.idxBoardKosong
          this.arrBoard[this.idxBoardKosong[0]].splice(this.idxBoardKosong[1], 1, this.angkaPengganti )
          
        }
        
        
      }
      return this.arrBoard

    }
    
  }

  finish(){
    return this.arrBoard
  }
 

}

// let andrey = new Sudoku('105802000090076405200400819019007306762083090000061050007600030430020501600308900');
// andrey.board().findBoardKosong()

function solver(sudoku){
  let andrey = new Sudoku(sudoku)
  // return typeof sudoku
  andrey.board().findBoardKosong()
  
  if(sudoku.indexOf('0') === -1){
    return andrey.arrBoard
  }else{
    let extract = andrey.solve()
    let arrJoin = extract.join();
    let arrSplit = arrJoin.split(',');
    let result = arrSplit.join('');

    return solver(result)

  }
}
let sudoku = '105802000090076405200400819019007306762083090000061050007600030430020501600308900'

console.log(solver(sudoku))