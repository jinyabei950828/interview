/**
 * @todo 最小覆盖子串
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  //计算需要的字母数量
  let need = {}
  //在窗口中的字母数量
  let window = {}

  //计算需要的字母数量
  for(let a of t){
    need[a] = (need[a]||0)+1
  }

  let left=0,right = 0

  //验证符合条件的字母数量
  let valid = 0
  
  //最小覆盖子串的起始索引及长度
  let start = 0,len = Number.MAX_VALUE

  while(right<s.length){
    //即将移入窗口的字符
    let c = s[right]
    right++

    if(need[c]){
      window[c]= (window[c]||0)+1
      if(window[c]===need[c]){
        valid++
      }
    }

    //需要的和验证的一致时，收缩窗口
    while(valid===Object.keys(need).length){
      //更新最小覆盖子串
      while(right-left<len){
        start = left;
        len = right-left
      }
      //即将移除窗口的子串
      let d = s[left]
      left++
      if(need[d]){
        if(window[d]===need[d]){
          valid--
        }
        window[d]--
      }
    }
  }
  return len == Number.MAX_VALUE ? "" : s.substr(start, len);
};