function minSubArrayLen(target: number, nums: number[]): number {
    let res = Infinity;
    let left = 0;
    let curSum = 0;
    for(let i = 0; i < nums.length; i++) {
        curSum = curSum + nums[i];

        while(curSum >= target && left <= i){
            res = Math.min(res, i - left + 1);
            curSum -= nums[left]
            left++;
        }
        
    }

    return res === Infinity ? 0 : res;
};