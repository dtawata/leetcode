const isValidSudoku = (board) => {
  const rows = {
    0: new Set(),
    1: new Set(),
    2: new Set(),
    3: new Set(),
    4: new Set(),
    5: new Set(),
    6: new Set(),
    7: new Set(),
    8: new Set()
  };
  const cols = {
    0: new Set(),
    1: new Set(),
    2: new Set(),
    3: new Set(),
    4: new Set(),
    5: new Set(),
    6: new Set(),
    7: new Set(),
    8: new Set()
  };
  const grids = {
    0: new Set(),
    1: new Set(),
    2: new Set(),
    3: new Set(),
    4: new Set(),
    5: new Set(),
    6: new Set(),
    7: new Set(),
    8: new Set()
  };

  const grid = [0, 1, 2];
  let rowCount = 1;
  for (let i = 0; i < board.length; i++) {
    let colCount = 1;
    if (rowCount === 4) {
      rowCount = 1;
      grid[0] += 3;
      grid[1] += 3;
      grid[2] += 3;
    }
    for (let j = 0; j < board[i].length; j++) {
      const val = board[i][j];
      let gridIdx;
      if (colCount <= 3) gridIdx = 0;
      else if (colCount > 3 && colCount <= 6) gridIdx = 1;
      else if (colCount > 5 && colCount <= 9) gridIdx = 2;
      colCount++;
      if (val === '.') continue;
      if (rows[i].has(val) || cols[j].has(val) || grids[grid[gridIdx]].has(val)) return false;
      rows[i].add(val);
      cols[j].add(val);
      grids[grid[gridIdx]].add(val);
    }
    rowCount++;
  }
  return true;
};

board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board));


// var isValidSudoku = function(board) {
//   if (!validRows(board) || !validCols(board)) return false

//   for (let rowStart = 0; rowStart < board.length; rowStart+= 3) {
//       for (let colStart = 0; colStart < board.length; colStart += 3) {
//           if (!validBox(board, rowStart, colStart)) return false
//       }
//   }

//   return true
// };


// const validBox = (board, rowStart, colStart) => {
//   const seen = new Set()
//   for (let row = rowStart; row < rowStart + 3; row++) {
//       for (let col = colStart; col < colStart + 3; col++) {
//           let val = board[row][col]
//           if (val !== ".") {
//               if (seen.has(val)) {
//                   return false
//               }
//               seen.add(val)
//           }
//       }
//   }
//   return true
// }

// const validRows = (board) => {
//   for (let i = 0; i < board.length; i++) {
//       let row = board[i]
//       const seen = new Set()
//       for (let val of row) {
//           if (val !== ".") {
//               if (seen.has(val)) return false
//               seen.add(val)
//           }
//       }
//   }
//   return true
// }

// const validCols = (board) => {
//   for (let col = 0; col < board[0].length; col++) {
//       const seen = new Set();
//       for (let row = 0; row < board.length; row++) {
//           const val = board[row][col]
//           if (val !== ".") {
//               if (seen.has(val)) {
//                   return false
//               }
//               seen.add(val)
//           }
//       }
//   }
//   return true
// }