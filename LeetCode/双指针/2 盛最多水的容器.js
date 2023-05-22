/**
 * @todo 盛最多水的容器
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0
  let left = 0,right = height.length
  while(left<right){
    //i和j对应的较小的向内移动
    const minHeight = height[left]<height[right-1]?height[left++]:height[--right]
    const area = (right-left)*minHeight
    max = Math.max(max,area)
  }
  return max
}