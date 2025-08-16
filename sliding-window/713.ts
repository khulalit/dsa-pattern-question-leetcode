function numSubarrayProductLessThanK(nums: number[], k: number): number {
  // first increase the window size till the condition and then shrink the window to update the number of subarrays

  if (k <= 1) return 0;

  let res = 0;
  let left = 0;
  let prod = 1;

  for (let i = 0; i < nums.length; i++) {
    prod = prod * nums[i];
    while (prod >= k) {
      prod = prod / nums[left];
      left++;
    }

    res = res + (i - left + 1);
  }
  return res;
}
