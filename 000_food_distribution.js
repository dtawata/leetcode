const foodDistribution = (arr) => {
  const food = arr[0];
  const hungers = arr.slice(1);
  let diff = getDifferences(hungers);
  if (!food || !diff) return diff;
  const i = getOptimalIdx(hungers);
  console.log('i', i);
  arr[0] -= 1;
  arr[i + 1] -= 1;
  return foodDistribution(arr);
};

const getDifferences = (hungers) => {
  let total = 0;
  for (let i = 0; i < hungers.length - 1; i++) {
    const a = hungers[i];
    const b = hungers[i + 1];
    total += Math.abs(a - b);
  }
  return total;
};

const getOptimalIdx = (hungers) => {
  let idx;
  let max = false;
  for (let i = 1; i < hungers.length - 1; i++) {
    const curr = hungers[i];
    const prev = hungers[i - 1];
    const post = hungers[i + 1];
    let a;
    let b;

    if (curr - prev > 0) a = 1;
    else if (curr - prev < 0) a = -1;
    else a = 0;

    if (curr - post > 0) b = 1;
    else if (curr - post < 0) b = -1;
    else b = 0;

    if (a + b === 1) {
      idx = i;
    } else if (a + b === 2) {
      idx = i;
      max = true;
      break;
    }
  }
  if (!max) {
    const first = hungers[0] - hungers[1] > 0 ? true : false;
    if (first) idx = 0;
    const last = hungers[hungers.length - 1] - hungers[hungers.length - 2] > 0 ? true : false;
    if (last) idx = hungers.length - 1;
  }
  return idx;
};

const arr = [1, 3, 2, 2, 2, 9];
console.log(foodDistribution(arr));