class Sudoku {
  constructor(board_string) {}

  solve() {}

  // Returns a string representing the current state of the board
  board() {}
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
const fs = require('fs');
const board_string = fs
  .readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0];
const game = new Sudoku(board_string);

// Remember: this will just fill out what it can and not "guess"
game.solve();
console.log(game.board());