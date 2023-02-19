const orangesRotting = (grid) => {
  let fresh = 0;
  const rotten = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const state = grid[i][j];
      if (state === 1) fresh++;
      else if (state === 2) rotten.push([i, j]);
    }
  }

  let minutes = 0;
  while (fresh && rotten.length) {
    const length = rotten.length;
    for (let i = 0; i < length; i++) {
      const [r, c] = rotten.shift();
      const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
      for (const [r1, c1] of directions) {
        const row = r + r1;
        const col = c + c1;
        if (!grid[row] || !grid[row][col] || grid[row][col] !== 1) continue;
        grid[row][col] = 2;
        fresh--;
        rotten.push([row, col]);
      }
    }
    minutes++;
  }

  return fresh ? -1 : minutes;
};

const grid = [[2,1,1],[1,1,0],[0,1,1]]; // 4
console.log(orangesRotting(grid));