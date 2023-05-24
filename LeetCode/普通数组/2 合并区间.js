/**
 * @todo 合并区间
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let arr = []
  intervals.sort((a,b)=>a[0]-b[0])

  let pre = intervals[0]
  for(let i=1;i<intervals.length;i++){
    let cur = intervals[i]
    //重合
    if(pre[1]>=cur[0]){
      pre[1] = Math.max(cur[1],pre[1])
    }else{
      arr.push(pre)
      pre = cur
    }
  }
  
  arr.push(pre)
  return arr
};