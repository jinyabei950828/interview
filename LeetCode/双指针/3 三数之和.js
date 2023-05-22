/**
 * @todo 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let arr = []
  const len=nums.length;
  if(nums===null||len<3)return arr
  nums.sort((a,b)=>a-b)
  for(let i=0;i<len;i++){
    if(nums[i]>0)break;
    if(i>0&&nums[i]==nums[i-1])continue; //去重
    let left=i+1;right=len-1
    while(left<right){
      const sum = nums[left]+nums[i]+nums[right]
      if(sum==0){
        arr.push([nums[i],nums[left],nums[right]])
        while(left<right&&nums[left]==nums[left+1])left++ //去重
        while(left<right&&nums[right]==nums[right-1])right-- //去重
        left++
        right--
      }else if(sum>0){
        right--
      }else{
        left++
      }
    }
  }
  return arr
};