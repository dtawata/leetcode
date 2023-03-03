const addBinary = (a, b) => {
  let string = '';
  let carry = 0;
  let = aIdx = a.length - 1;
  let bIdx = b.length - 1;
  while (aIdx >= 0 || bIdx >= 0) {
    const valA = a[aIdx] || 0;
    const valB = b[bIdx] || 0;
    const sum = Number(valA) + Number(valB) + carry;
    carry = 0;
    string = (sum % 2) + string;
    if (sum >= 2) carry++;
    aIdx--;
    bIdx--;
  }
  return  carry ? carry + string : string;
};

a = '11', b = '1' // '100'
console.log(addBinary(a, b));