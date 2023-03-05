const insert = (intervals, newInterval) => {
  const res = [];
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] > newInterval[1]) return res.concat([newInterval], intervals.slice(i));
    if (interval[1] < newInterval[0]) res.push(interval);
    else newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
  }
  res.push(newInterval);
  return res;
};

intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
console.log(insert(intervals, newInterval));