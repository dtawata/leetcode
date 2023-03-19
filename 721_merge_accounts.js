const accountsMerge = (accounts) => {
  const map = {};
  let count = 1;
  for (const account of accounts) {
    const name = account[0];
    const emails = account.slice(1);
    const set = new Set();
    for (const email of emails) {
      if (map[email]) {
        set.add(map[email]);
      }
    }
    const arr = Array.from(set);
    if (arr.length >= 1) {
      const main = arr[0];
      for (const email in map) {
        if (arr.includes(map[email])) {
          map[email] = main;
        }
      }
      for (const email of emails) {
        map[email] = main;
      }
    }
    if (arr.length === 0) {
      for (const email of emails) {
        map[email] = `${name}.${count}`;
      }
    }
    count++;
  }


  const res = {};
  for (key in map) {
    const name = map[key];
    const end = map[key].indexOf('.');
    res[name] = res[name] || [name.slice(0, end)];
    res[name].push(key);
  }

  for (key in res) {
    const sorted = res[key].slice(1).sort();
    res[key] = [res[key][0]].concat(sorted);
  }

  return Object.values(res);
};


accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]

// accounts = [["David","David0@m.co","David1@m.co"],["David","David3@m.co","David4@m.co"],["David","David4@m.co","David5@m.co"],["David","David2@m.co","David3@m.co"],["David","David1@m.co","David2@m.co"]]
console.log(accountsMerge(accounts));


// 0: david0
// 1: david0

// 3: david1
// 4: david1
// 5: david1
// 2: david2
// 3: david2



// [["David","David0@m.co","David1@m.co","David2@m.co"],["David","David3@m.co","David4@m.co","David5@m.co"]]
// Expected
// [["David","David0@m.co","David1@m.co","David2@m.co","David3@m.co","David4@m.co","David5@m.co"]]



// [["David","David2@m.co","David4@m.co"],
// ["John","John3@m.co","John5@m.co","John7@m.co"],
// ["Fern","Fern4@m.co","Fern5@m.co","Fern6@m.co"],
// ["Gabe","Gabe1@m.co","Gabe8@m.co"],
// ["Ethan","Ethan1@m.co","Ethan6@m.co"],
// ["Celine","Celine0@m.co","Celine4@m.co","Celine6@m.co","Celine7@m.co","Celine8@m.co"]]