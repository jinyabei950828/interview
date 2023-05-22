/**
 * @todo 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let set = new Set()
  const len = s.length;
  //右指针，相当于左边界，还没开始移动
  let rightKey = -1,max = 0;
  for(let i=0;i<len;i++){
    //i表示左指针(从左往右移动的时候,删除一个元素)
    if(i!=0){
      set.delete(s.charAt(i-1))
    }
    //不断移动右指针
    while(rightKey+1<len&&!set.has(s.charAt(rightKey+1))){
      set.add(s.charAt(rightKey+1))
      ++rightKey
    }
    max = Math.max(max,rightKey-i+1)
  }
  return max
};