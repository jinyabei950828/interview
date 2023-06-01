function getResult(s,k){
  // 统计各字符数量
  const base = {}
  for(let c of s){
    base[c] = (base[c]||0)+1
  }

  //初始滑窗(长度k)中,各字符的数量
  const count = {}
  for(let i=1;i<=k;i++){
    countNumberChar(i+"",count,true)
  }

  //如果初始就满足要求，说明最小的是1
  if(cmp(base,count))return 1

  for(let i=2;i<=1000-k+1;i++){
    //相较于上一个滑窗失去的数字
    const remove = i-1+""
    countNumberChar(remove,count,false)

    //相较于上一个滑窗新增的数字
    const add = i+k-1+""
    countNumberChar(add,count,true)

    //比较返回
    if(cmp(base,count))return i
  }
  return -1
}

function countNumberChar(num,count,isAdd){
  for(let c of num){
    count[c] = (count[c]||0)+(isAdd?1:-1)
  }
}

function  cmp(base,count){
  for(let c in base){
    if(count[c]===undefined||count[c]!=base[c]){
      return false
    }
  }
  return true
}
