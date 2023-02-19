const numIslands = (grid) => {
  let island = 0;

  const traverse = (r, c) => {
    grid[r][c] = '0';
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (const [r1, c1] of directions) {
      const row = r + r1;
      const col = c + c1;
      if (!grid[row] || !grid[row][col] || grid[row][col] !== '1') continue;
      traverse(row, col);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== '1') continue;
      island++;
      traverse(i, j);
    }
  }

  return island;
};

const grid = [
  ['1','1','1','1','0'],
  ['1','1','0','1','0'],
  ['1','1','0','0','0'],
  ['0','0','0','0','0']
]; // 1
console.log(numIslands(grid));