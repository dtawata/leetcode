// let result = Math.max(...nums);
// go back to 721_merge_accounts
// best way to check if something is a number?
const updateMatrix = (mat) => {
  const table = Array.from({length: mat.length}, (val, index) => {
    return Array.from({length: mat[index].length});
  });

  const queue = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        table[i][j] = 0;
      }
    }
  }

  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const [r, c] = queue.shift();
      const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
      for (const [r1, c1] of directions) {
        const row = r + r1;
        const col = c + c1;
        if (row < 0 || row >= mat.length || col < 0 || col >= mat[row].length || mat[row][col] !== 1) continue;
        mat[row][col] = 0;
        table[row][col] = table[r][c] + 1;
        queue.push([row, col]);
      }
    }
  }

  return table;
};