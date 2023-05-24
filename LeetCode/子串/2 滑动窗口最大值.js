/**
 * @todo 滑动窗口最大值
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const len = nums.length
  const arr = []
  for(let i=0;i<k;i++){
    //如果当前值比已存入的值大，则重新存入索引
    while(arr.length&nums[i]>=nums[arr[arr.length-1]]){
      arr.pop()
    }
    arr.push(i)
  }

  //获取当当前第一个最大的值
  const ans = [nums[arr[0]]]
  for(let i=k;i<len;i++){
    while(arr.length&&nums[i]>=nums[arr[arr.length-1]]){
      arr.pop()
    }
    arr.push(i)
    //删除第一个元素
    while(arr[0]<=i-k){
      arr.shift()
    }
    ans.push(nums[arr[0]])
  }
  return ans
};