/**
 * @todo 最大子数组和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let len = nums.length
  //当前值和最大值(防止第一位是负数，出现判断失误)
  let pre = 0,maxAns=nums[0]
  for(let i=0;i<len;i++){
    pre = Math.max(pre+nums[i],nums[i])
    maxAns = Math.max(maxAns,pre)
  }
  return maxAns
}