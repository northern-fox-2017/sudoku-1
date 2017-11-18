"use strict"
// The file has newlines at the end of each line,
// so we call split to remove it (\n)

const fs = require('fs')
const board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
    this.start_board = []
    this.input = ['1','2','3','4','5','6','7','8','9']
    this.empty_blocks = []
  }

  // Returns a string representing the current state of the board
  show_board(){
    console.log('-----------------------');
    for (let i = 0; i < this.start_board.length; i++) {
      let perBaris = []
      for (let j = 0; j < this.start_board[i].length; j++) {
        if (j == 0) {
          perBaris.push('')
        }
        perBaris.push(this.start_board[i][j])
        if (j == 2 || j == 5) {
          perBaris.push('|')
        }
      }
      console.log(perBaris.join(' '));
      if (i == 2 || i == 5) {
        console.log('-----------------------');
      }
    }
    console.log('-----------------------');
  }
  
  board() {
    // let arr = []
    let strIndex = 0
    for (let i = 0; i < 9; i++) {
      let line = []
      for (let j = 0; j < 9; j++) {
        line.push(board_string[strIndex])
        strIndex ++
      }
      this.start_board.push(line)
    }
    // console.log(this.start_board);
    // return this.start_board.join('\n')
  }
    
  mySolver(){
    while (this.empty_blocks.length > 0) {
      for (let i = 0; i < this.empty_blocks.length; i++) {
        if (this.empty_blocks[i].answer.length == 1) {
          // Assign answer to empty box based on it's coordinate
          this.start_board[this.empty_blocks[i].baris][this.empty_blocks[i].kolom] = this.empty_blocks[i].answer[0]
          // Eliminate same numbers from horizontal, vertical, area
          this.cek_horizontal_new(this.empty_blocks[i].baris, this.empty_blocks[i].answer[0])
          this.cek_vertical_new(this.empty_blocks[i].kolom, this.empty_blocks[i].answer[0])
          this.cek_kuadran_new(this.empty_blocks[i].baris, this.empty_blocks[i].kolom, this.empty_blocks[i].answer[0])
        }
      }
      // Remove all assigned objects from array
      let new_empty_blocks = []
      for (let i = 0; i < this.empty_blocks.length; i++) {
        if (this.empty_blocks[i].answer.length > 1) {
          new_empty_blocks.push(this.empty_blocks[i])
        }
      }
      this.empty_blocks = new_empty_blocks
      
      // Remove every 'x' from all object's answer array
      for (let i = 0; i < this.empty_blocks.length; i++) {
        let new_obj_answer = []
        if (this.empty_blocks[i].answer.indexOf('x') != -1) {
          for (let j = 0; j < this.empty_blocks[i].answer.length; j++) {
            if (this.empty_blocks[i].answer[j] != 'x') {
              new_obj_answer.push(this.empty_blocks[i].answer[j])
            }
          }
          this.empty_blocks[i].answer = new_obj_answer
        }
      }
    }
  }
  
  cek_horizontal_new(baris, answer){
    for (let i = 0; i < this.empty_blocks.length; i++) {
      if (this.empty_blocks[i].baris == baris && this.empty_blocks[i].answer.length > 1) {
        for (let j = 0; j < answer.length; j++) {
          if (this.empty_blocks[i].answer.indexOf(answer) != -1) {
            this.empty_blocks[i].answer[this.empty_blocks[i].answer.indexOf(answer)] = 'x'
          }
        }
      }
    }
  }
  
  cek_vertical_new(kolom, answer){
    for (let i = 0; i < this.empty_blocks.length; i++) {
      if (this.empty_blocks[i].kolom == kolom && this.empty_blocks[i].answer.length > 1) {
        for (let j = 0; j < answer.length; j++) {
          if (this.empty_blocks[i].answer.indexOf(answer) != -1) {
            this.empty_blocks[i].answer[this.empty_blocks[i].answer.indexOf(answer)] = 'x'
          }
        }
      }
    }
  }
  
  cek_kuadran_new(baris, kolom, answer){
    let baris_bawah = 0
    let baris_atas = 0
    let kolom_bawah = 0
    let kolom_atas = 0
    if (baris < 3) {
      baris_bawah = 0
      baris_atas = 3
    } else if (baris > 2 && baris < 6) {
      baris_bawah = 3
      baris_atas = 6
    } else if (baris > 5 && baris < 9) {
      baris_bawah = 6
      baris_atas = 9
    }
    
    if (kolom < 3) {
      kolom_bawah = 0
      kolom_atas = 3
    } else if (kolom > 2 && kolom < 6) {
      kolom_bawah = 3
      kolom_atas = 6
    } else if (kolom > 5 && kolom < 9) {
      kolom_bawah = 6
      kolom_atas = 9
    }
    
    for (let i = 0; i < this.empty_blocks.length; i++) {
      if (this.empty_blocks[i].baris >= baris_bawah && this.empty_blocks[i].baris < baris_atas && this.empty_blocks[i].kolom >= kolom_bawah && this.empty_blocks[i].kolom < kolom_atas && this.empty_blocks[i].answer.length > 1) {
        for (let j = 0; j < answer.length; j++) {
          if (this.empty_blocks[i].answer.indexOf(answer) != -1) {
            this.empty_blocks[i].answer[this.empty_blocks[i].answer.indexOf(answer)] = 'x'
          }
        }
      }
    }
    
  }
  
  getZero(){
    for (let i = 0; i < this.start_board.length; i++) {
      for (let j = 0; j < this.start_board[i].length; j++) {
        if (this.start_board[i][j] == 0) {
          this.empty_blocks.push({
            baris: i,
            kolom: j,
            answer: this.getNumber(i,j)
          })
        }
      }
    }
  }
  
  get_horizontal(baris) {
    let arr = []
    for (let i = 0; i < 9; i++) {
      if (this.start_board[baris][i] != 0) {
        arr.push(this.start_board[baris][i])
      }
    }
    return arr
  }
  
  get_vertical(kolom,number) {
    let arr = []
    for (let i = 0; i < 9; i++) {
      if (this.start_board[i][kolom] != 0) {
        arr.push(this.start_board[i][kolom])
      }
    }
    return arr
  }
  
  get_kuadran(baris,kolom) {
    if (baris < 3) {
      baris = 0
    } else if (baris > 2 && baris < 6) {
      baris = 3
    } else if (baris > 5 && baris < 9) {
      baris = 6
    }
    
    if (kolom < 3) {
      kolom = 0
    } else if (kolom > 2 && kolom < 6) {
      kolom = 3
    } else if (kolom > 5 && kolom < 9) {
      kolom = 6
    }
    let arr = []
    for (let i = baris; i < 3; i++) {
      for (let j = kolom; j < 3; j++) {
        if (this.start_board[i][j] != 0) {
          arr.push(this.start_board[i][j])
        }
      }
    }
    return arr
  }
  
  getNumber(baris,kolom) {
    let numbers = []
    let answer = []
    let horizontal = this.get_horizontal(baris)
    let vertical = this.get_vertical(kolom)
    let kuadran = this.get_kuadran(baris,kolom)
    for (let i = 0; i < horizontal.length; i++) {
      if (numbers.indexOf(horizontal[i]) == -1) {
        numbers.push(horizontal[i].toString())
      }
    }
    for (let i = 0; i < vertical.length; i++) {
      if (numbers.indexOf(vertical[i]) == -1) {
        numbers.push(vertical[i].toString())
      }
    }
    for (let i = 0; i < kuadran.length; i++) {
      if (numbers.indexOf(kuadran[i]) == -1) {
        numbers.push(kuadran[i].toString())
      }
    }
    for (let i = 0; i < this.input.length; i++) {
      if (numbers.indexOf(this.input[i]) == -1) {
        answer.push(this.input[i])
      }
    }
    return answer.sort()
  }
  
}

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
game.board()
game.getZero()
console.log('AWAL');
game.show_board()
console.log();
// console.log(game.empty_blocks);
// console.log();
console.log('SOLVED');
game.mySolver()
game.show_board()
console.log();
// console.log(game.empty_blocks);
