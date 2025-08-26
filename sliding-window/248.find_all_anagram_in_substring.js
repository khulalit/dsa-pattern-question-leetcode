/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const freqCount_s = new Array(26).fill(0);
  const freqCount_p = new Array(26).fill(0);
  const slen = s.length;
  const plen = p.length;

  for (let i = 0; i < plen; i++) {
    freqCount_p[p.charCodeAt(i) - 97] += 1;
    freqCount_s[s.charCodeAt(i) - 97] += 1;
  }

  const res = [];

  for (let i = 0; i < slen - plen; i++) {
    if (compareAllTrue(freqCount_s, freqCount_p)) {
      res.push(i);
    }

    // adding the new element
    freqCount_s[s.charCodeAt(i) - 97]--;
    // sliding window to next and decrementing the removed char count
    freqCount_s[s.charCodeAt(i + plen) - 97]++;
  }

  // for final remaing check
  if (compareAllTrue(freqCount_s, freqCount_p)) {
    res.push(slen - plen);
  }

  return res;
};

/// utility function
function compareAllTrue(a, b) {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
