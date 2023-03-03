const solution = function(isBadVersion) {
  return function(n) {
    let badVersion;
    let start = 1;
    let end = n;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        badVersion = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return badVersion;
  };
};