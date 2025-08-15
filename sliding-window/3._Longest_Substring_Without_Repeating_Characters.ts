function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let left = 0;
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i]);
    } else {
      res = Math.max(res, i - left);
      while (s[left] != s[i] && left <= i) {
        set.delete(s[left]);
        left++;
      }
      left++;
    }
  }

  res = Math.max(res, s.length - left);
  return res;
}
