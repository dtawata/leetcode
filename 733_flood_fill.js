const floodFill = (image, sr, sc, color) => {
  const visited = {};
  const target = image[sr][sc];
  const traverse = (r, c) => {
    image[r][c] = color;
    visited[`${r}:${c}`] = true;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (const [r1, c1] of directions) {
      const row = r + r1;
      const col = c + c1;
      if (!image[row] || image[row][col] === undefined || image[row][col] !== target || visited[`${row}:${col}`]) continue;
      traverse(row, col);
    }
  };
  traverse(sr, sc);
  return image;
};

image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2 //
console.log(floodFill(image, sr, sc, color));