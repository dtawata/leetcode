const containsDuplicate = (nums) => {
  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) return false;
    map.set(num, true);
  }
  return true;
};