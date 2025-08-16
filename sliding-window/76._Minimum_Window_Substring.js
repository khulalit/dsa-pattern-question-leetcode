/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const f = new Map();

  for (let i = 0; i < t.length; i++) {
    f.set(t[i], (f.get(t[i]) || 0) + 1);
  }

  let need = 0;

  for (const [_, value] of f) {
    need = need + value;
  }

  const fs = new Map();
  let have = 0;
  let res = "";
  let left = 0;
  let min = Infinity;

  for (let i = 0; i < s.length; i++) {
    if (f.has(s[i])) {
      if (!fs.get(s[i]) || fs.get(s[i]) < f.get(s[i])) {
        have++;
      }
      fs.set(s[i], (fs.get(s[i]) || 0) + 1);
    }

    while (have == need && left <= i) {
      const len = i - left + 1;
      if (len < min) {
        min = len;
        res = s.substring(left, i + 1);
      }
      if (fs.has(s[left])) {
        if (fs.get(s[left]) <= f.get(s[left])) {
          have--;
        }
        if (fs.get(s[left]) <= 1) {
          fs.delete(s[left]);
        } else {
          fs.set(s[left], fs.get(s[left]) - 1);
        }
      }
      left++;
    }
  }

  return res;
};
