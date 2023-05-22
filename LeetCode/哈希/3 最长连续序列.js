/**
 * @todo 最长连续序列
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(nums.length===0)return 0;
  nums.sort((a,b)=>a-b)
  let max = 1;
  let count = 1;
  for(let i=0;i<nums.length-1;i++){
    let cur = i,next = i+1
    if(nums[cur]===nums[next])continue
    if(nums[next]-nums[cur]===1){
      count++
    }else{
      count = 1
    }
    max = Math.max(max,count)
  }
  return max
};