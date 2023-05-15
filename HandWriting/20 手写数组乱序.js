function minArr(arr){
  return arr.sort(()=>{
    return Math.random()-0.5
  })
}

//洗牌算法
function shuffle(arr){
  let m = arr.length;
  while(m>1){
    let index = parseInt(Math.random()*m--)
    [arr[index],arr[m]] = [arr[m],arr[index]]
  }
  return arr
}