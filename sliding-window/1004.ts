function longestOnes(nums: number[], k: number): number {
  let left = 0;
  let count = 0;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count++;

    if (count <= k) {
      res = Math.max(res, i - left + 1);
    } else {
      if (nums[left] === 0) count--;
      left++;
    }
  }

  return res;
}
