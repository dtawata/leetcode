const uniquePaths = (m, n) => {
  const matrix = Array.from({ length: m }, () => {
    return Array.from({ length: n }).fill(1);
  });

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }

  return matrix[m - 1][n - 1];
};

m = 3, n = 7
console.log(uniquePaths(m, n));