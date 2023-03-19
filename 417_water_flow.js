// // const pacificAtlantic = (heights) => {
// //   const res = [];
// //   const traverse = (r, c) => {

// //     const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
// //     for (const [r1, c1] of ) {
// //       const row = r + r1;
// //       const col = c + c1;

// //       if (!grid[row] || !grid[row][col] || grid[row][col] === 2) continue;

// //     }
// //   };


// // };

// const pacificAtlantic = (heights) => {
//   const res = [];
//   const pacific = Array.from({ length: heights.length }, (item, i) => {
//       return Array.from({ length: heights[i].length });
//   });
//   const atlantic = Array.from({length: heights.length}, (item, i) => {
//     return Array.from({ length: heights[i].length });
//   });

//   for (let i = 0;i < pacific.length; i++) {
//     pacific[i][0] = true;
//   }

//   for (let j = 0; j < pacific[0].length; j++) {
//     pacific[0][j] = true;
//   }

//   for (let i = 1; i < heights.length; i++) {
//     for (let j = 1; j < heights[i].length; j++) {
//       const val = heights[i][j];
//       pacific[i][j] = (pacific[i - 1][j] && val >= heights[i - 1][j]) ||
//       (pacific[i][j - 1] && val >= heights[i][j - 1]);
//     }
//   }

//   for (let i = 0; i < atlantic.length; i++) {
//     atlantic[i][atlantic[i].length - 1] = true;
//   }

//   for (let j = 0; j < atlantic[atlantic.length - 1].length; j++) {
//     atlantic[atlantic.length - 1][j] = true;
//   }

//   for (let i = heights.length - 2; i >= 0; i--) {
//     for (let j = heights.length - 2; j >= 0; j--) {
//       if (!pacific[i][j]) continue;
//       const val = heights[i][j];
//       atlantic[i][j] = (atlantic[i + 1][j] && val >= heights[i + 1][j]) ||
//       (pacific[i][j + 1] && val >= heights[i][j + 1]);
//       if (atlantic[i][j]) res.push([i, j]);
//     }
//   }

//   return res;
// };

// const pacificAtlantic = (heights) => {
//   const res = [];
//   const pacific = Array.from({ length: heights.length }, (item, i) => {
//       return Array.from({ length: heights[i].length });
//   });
//   const atlantic = Array.from({length: heights.length}, (item, i) => {
//     return Array.from({ length: heights[i].length });
//   });

//   const traverseAtlantic = (i, j) => {
//     const val = atlantic[i][j];
//     if (atlantic[i + 1][j] === false && heights[i][j] <= heights[i + 1][j]) {
//       atlantic[i + 1][j] = true;
//       traverseAtlantic(i + 1, j);
//     }

//     if (atlantic[i][j + 1] === false && heights[i][j] <= heights[i][j + 1]) {
//       atlantic[i][j + 1] = true;
//       traverseAtlantic(i, j + 1);
//     }
//   };

//   const traversePacific = (i, j) => {
//     const val = pacific[i][j];
//     if (pacific[i - 1][j] === false && heights[i][j] <= heights[i - 1][j]) {
//       pacific[i - 1][j] = true;
//       traversePacific(i - 1, j);
//     }

//     if (pacific[i][j - 1] === false && heights[i][j] <= heights[i][j - 1]) {
//       pacific[i][j - 1] = true;
//       traversePacific(i, j - 1);
//     }
//   };

//   for (let i = 0;i < pacific.length; i++) {
//     pacific[i][0] = true;
//   }

//   for (let j = 0; j < pacific[0].length; j++) {
//     pacific[0][j] = true;
//   }

//   for (let i = 1; i < heights.length; i++) {
//     for (let j = 1; j < heights[i].length; j++) {
//       const val = heights[i][j];
//       const up = pacific[i - 1][j] && val >= heights[i - 1][j];
//       const left = pacific[i][j - 1] && val >= heights[i][j - 1];
//       pacific[i][j] = up || left;
//       if (pacific[i][j]) {
//         traversePacific(i, j);
//       }
//     }
//   }

//   for (let i = 0; i < atlantic.length; i++) {
//     atlantic[i][atlantic[i].length - 1] = true;
//   }

//   for (let j = 0; j < atlantic[atlantic.length - 1].length; j++) {
//     atlantic[atlantic.length - 1][j] = true;
//   }

//   for (let i = heights.length - 2; i >= 0; i--) {
//     for (let j = heights[i].length - 2; j >= 0; j--) {
//       // if (!pacific[i][j]) continue;
//       const val = heights[i][j];
//       const down = atlantic[i + 1][j] && val >= heights[i + 1][j];
//       const right = atlantic[i][j + 1] && val >= heights[i][j + 1];
//       atlantic[i][j] = down || right;
//       if (atlantic[i][j]) {
//         traverseAtlantic(i, j);
//       }
//     }
//   }

//     for (let i = 0; i < heights.length; i++) {
//     for (let j = 0; j < heights[i].length; j++) {
//       if (pacific[i][j] && atlantic[i][j]) res.push([i, j]);
//     }
//   }

// //   return [pacific, atlantic];
//   return res;
// };



const pacificAtlantic = (heights) => {
  const res = [];
  const pacific = new Set();
  const atlantic = new Set();

  for (let i = 0; i < heights.length; i++) {
    pacific.add(`${i},0`);
  }

  for (let j = 0; j < heights[0].length; j++) {
    pacific.add(`0,${j}`);
  }

  for (let i = 0; i < heights.length; i++) {
    atlantic.add(`${i},${heights[i].length - 1}`);
  }

  for (let j = 0; j < heights[heights.length - 1].length; j++) {
    atlantic.add(`${heights.length - 1},${j}`);
  }

  const traverse = (r, c) => {
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    for (const [r1, c1] of directions) {
      const row = r + r1;
      const col = c + c1;
      if (!heights[row] || heights[row][col] === undefined ||
        heights[row][col] < heights[r][c] || pacific.has(`${row},${col}`)) continue;
      pacific.add(`${row},${col}`);
      traverse(row, col);
    }
  };

  for (const str of [...pacific]) {
    const coma = str.indexOf(',');
    const r = Number(str.slice(0, coma));
    const c = Number(str.slice(coma + 1));
    traverse(r, c);
  }

  const traverseAtlantic = (r, c) => {
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    for (const [r1, c1] of directions) {
      const row = r + r1;
      const col = c + c1;
      if (!heights[row] || heights[row][col] === undefined ||
        heights[row][col] < heights[r][c] || atlantic.has(`${row},${col}`)) continue;
      atlantic.add(`${row},${col}`);
      traverseAtlantic(row, col);
    }
  };

  for (const str of [...pacific]) {
    const coma = str.indexOf(',');
    const r = Number(str.slice(0, coma));
    const c = Number(str.slice(coma + 1));
    traverse(r, c);
  }

  for (const str of [...atlantic]) {
    const coma = str.indexOf(',');
    const r = Number(str.slice(0, coma));
    const c = Number(str.slice(coma + 1));
    traverseAtlantic(r, c);
  }

  const intersect = new Set([...pacific].filter(i => atlantic.has(i)));
  for (const str of [...intersect]) {
    const coma = str.indexOf(',');
    const r = Number(str.slice(0, coma));
    const c = Number(str.slice(coma + 1));
    res.push([r,c]);
  }

  return res;
};

heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
console.log(pacificAtlantic(heights));