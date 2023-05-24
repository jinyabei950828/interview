/**
 * @todo 轮转数组
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const len = nums.length
  k = k%len
  reverse(nums,0,len-1)
  reverse(nums,0,k-1)
  reverse(nums,k,len-1)
  return nums
};

let reverse = function(nums,start,end){
  while(start<end){
    [nums[start++],nums[end--]] = [nums[end],nums[start]]
  }
}