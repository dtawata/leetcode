const updateMatrix = (mat) => {
 const matrix = Array.from({ length: mat.length }, (val, i) => {
  return Array.from({ length: mat[i].length });
 });

 const queue = [];
 for (let i = 0; i < mat.length; i++) {
  for (let j = 0; j < mat[i].length; j++) {
    if (mat[i][j] === 0) {
      matrix[i][j] = 0;
      queue.push([i, j]);
    }
  }
 }

 while (queue.length) {
    const [r, c] = queue.shift();
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (const [r1, c1] of directions) {
      const row = r + r1;
      const col = c + c1;
      if (!mat[row] || !mat[row][col]) continue;
      mat[row][col] = 0;
      matrix[row][col] = matrix[r][c] + 1;
      queue.push([row, col]);
    }
 }

 return matrix;
};

// mat = [[0,0,0],[0,1,0],[0,0,0]]
mat = [[0,0,0],[0,1,0],[1,1,1]]
console.log(updateMatrix(mat));