/**
 * @todo difficult 找到字符串中所有字母异位词
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const sLen = s.length,pLen = p.length
  if(sLen<pLen)return[]
  const arr = []

  const sCount = new Array(26).fill(0)
  const pCount = new Array(26).fill(0)
  for(let i=0;i<pLen;i++){
    ++sCount[s[i].charCodeAt()-'a'.charCodeAt()]
    ++pCount[p[i].charCodeAt()-'a'.charCodeAt()]
  }

  if(sCount.toString()===pCount.toString()){
    arr.push(0)
  }

  for(let i=0;i<sLen-pLen;i++){
    --sCount[s[i].charCodeAt()-'a'.charCodeAt()]
    ++sCount[s[i+pLen].charCodeAt()-'a'.charCodeAt()]

    if(sCount.toString()===pCount.toString()){
      arr.push(i+1)
    }
  }
  return arr
};

var findAnagrams = function(s, p) {
  let need = {} //需要的字符串
  let win = {} //窗口中的字符串
  for(let key of p){//统计异位词的数量
    need[a] = (need[a]||0)+1
  }

  let left = 0,right=0;
  let current = 0;//窗口中与移除异位词中字符种类
  let res = []
  while(right<s.length){
    let c = s[right]
    right++ //右边字符串进入窗口
    //当前字符串在need中,更新窗口的字符数量
    if(need[c]){
      win[c] = (win[c]||0)+1
      if(win[c]==need[c]){
        current++;
      }
    }
    while(right-left>=p.length){//出窗口
      if(current==Object.keys(need).length){//如果是异位词，则加入res
        res.push(left)
      }
      let d = s[left]
      left++ //出窗口
      if(need[d]){//更新数量
        if (win[d]==need[d]) {
          current--
        }
        win[d]--
      }
    }
  }
}