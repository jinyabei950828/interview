/**
 * @todo 接雨水
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const len = height.length
  if(len==0)return 0
  const leftMax = new Array(len).fill(0)
  leftMax[0] = height[0]
  for(let i=1;i<len;i++){
    leftMax[i] = Math.max(leftMax[i-1],height[i])
  }
  const rightMax = new Array(len).fill(0)
  rightMax[len-1] = height[len-1]
  for(let i=len-2;i>=0;i--){
    rightMax[i] = Math.max(rightMax[i+1],height[i])
  }

  let ans = 0
  for(let i=0;i<len;++i){
    //能接雨水的最大高度等与两边的最小值 Math.min(leftMax[i],rightMax[i])
    //此处能接的雨水量 Math.min(leftMax[i],rightMax[i])-height[i]
    ans+=Math.min(leftMax[i],rightMax[i])-height[i]
  }
  return ans
};