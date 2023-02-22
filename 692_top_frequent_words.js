const topKFrequent = (words, k) => {
  const res = new Array(k).fill(null);
  const map = {};
  for (const word of words) {
    map[word] = map[word] || 0;
    map[word]++;
  }
  for (const word in map) {
    const countA = map[word];
    for (let i = 0; i < k; i++) {
      if (res[i] === null) {
        res[i] = word;
        break;
      }
      const countB = map[res[i]];
      if (countA > countB) {
        res.splice(i, 0, word);
        break
      } else if (countA === countB) {
        const isFirst = lexicalOrder(word, res[i]);
        if (isFirst) {
          res.splice(i, 0, word);
          break;
        }
      }
    }
  }
  return res.slice(0, k);
};

const lexicalOrder = (word1, word2) => {
  let i = 0;
  while (true) {
    const char1 = word1.charCodeAt(i);
    const char2 = word2.charCodeAt(i);
    if (isNaN(char1)) return true;
    else if (isNaN(char2)) return false;
    else if (char1 < char2) return true;
    else if (char1 > char2) return false;
    i++;
  }
};

// words = ['i','love','leetcode','i','love','coding'], k = 2 // ['i','love']
words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4 //
console.log(topKFrequent(words, k));


// const topKFrequent = (words, k) => {
//   let res = [];

//   const map = {};
//   for (const word of words) {
//     map[word] = map[word] || 0;
//     map[word]++;
//   }

//   const frequency = {};
//   let max = -Infinity;
//   for (const word in map) {
//     const count = map[word];
//     max = Math.max(max, count);
//     frequency[count] = frequency[count] || [];
//     frequency[count].push(word);
//   }

//   for (let i = max; i >= 0; i--) {
//     if (!frequency[i]) continue;
//     const sorted = mergeSort(frequency[i]);
//     res = res.concat(sorted.slice(0, k));
//     k -= sorted.length;
//     if (k <= 0) break;
//   }

//   return res;
// };

// const mergeSort = (arr) => {
//   if (arr.length <= 1) return arr;
//   const mid = Math.ceil(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// };

// const merge = (arr1, arr2) => {
//   if (lexicalOrder(arr1[arr1.length - 1], arr2[0])) return arr1.concat(arr2);
//   else if (lexicalOrder(arr2[arr2.length - 1], arr1[0])) return arr2.concat(arr1);
//   const res = [];
//   let i = 0;
//   let j = 0;
//   while (arr1[i] && arr2[j]) {
//     const word1 = arr1[i];
//     const word2 = arr2[j];
//     if (lexicalOrder(word1, word2)) {
//       res.push(word1);
//       i++;
//     } else {
//       res.push(word2);
//       j++;
//     }
//   }
//   if (arr1[i]) return res.concat(arr1.slice(i));
//   else return res.concat(arr2.slice(j));
// };

// const lexicalOrder = (word1, word2) => {
//   let i = 0;
//   while (true) {
//     const char1 = word1.charCodeAt(i);
//     const char2 = word2.charCodeAt(i);
//     if (isNaN(char1)) return true;
//     else if (isNaN(char2)) return false;
//     else if (char1 < char2) return true;
//     else if (char1 > char2) return false;
//     i++;
//   }
// };