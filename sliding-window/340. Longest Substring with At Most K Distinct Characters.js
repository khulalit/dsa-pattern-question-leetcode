// function amkdc(s, k) {
//     const hasKDistinctChar = (s) => {
//         return new Set([...s]).size === k;
//     }

//     let maxlen = 0;
//     for(let i = 0; i < s.length; i++) {
//         for(let j = i+1; j < s.length; j++) {
//             if(hasKDistinctChar(s.substring(i, j+1))) {
//                 console.log('substring is : ', s.substring(i, j+1))
//                 maxlen = Math.max(maxlen, j - i + 1);
//             }
//         }
//     }

//     return maxlen;
// }

function logestSubstrWithAtmostKDistinctChar(s, k) {
  // a hashmap to track the count of char

  const map = new Map();

  let left = 0;
  let i = 0;
  let maxLen = 0;
  while (i < s.length) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);

    while (map.size > k) {
      const count = map.get(s[left]);
      if (count <= 1) map.delete(s[left]);
      else map.set(s[left], count - 1);
      left++;
    }

    maxLen = Math.max(maxLen, i - left + 1);
    i++;
  }
  return maxLen;
}

console.log(amkdc("araaci", 1));
