/**
 * @todo 和为 K 的子数组
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  //pre[i]-pre[i-1] = nums[i]
  const mp = new Map()
  //和为0的只有一个
  mp.set(0,1)
  //总数和，当前的值
  let count=0,pre=0;
  for(const x of nums){
    pre +=x;
    if(mp.has(pre-k)){
      count+=mp.get(pre-k)
    }
    if(mp.has(pre)){
      mp.set(pre,mp.get(pre)+1)
    }else{
      mp.set(pre,1)
    }
  }
  return count
};