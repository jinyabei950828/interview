// 1.indexof
function removeDup(arr){
  let arrNew = []
  for(let item of arr){
    if(arrNew.indexOf(item)===-1){
      arrNew.push(item)
    }
  }
  return arrNew
}


//2.includes
function removeDup(arr){
  let arrNew = []
  for(let item of arr){
    if(!arrNew.includes(item)){
      arrNew.push(item)
    }
  }
  return arrNew
}

//3.set
[...new Set(arr)]
Array.form(new Set(arr))

//4.Map
function removeDup(arr){
  let map = new Map()
  let arrNew = []
  for(let item of arr){
    if(!map.has(item)){
      arrNew.push(item)
      map.set(item,true)
    }
  }
  return arrNew
}

//5.filter+indexof
function removeDup(arr){
  return arr.filter((item,index,arr)=>{
    // 判断item第一次出现的位置与当前位置是否一致
    return arr.indexOf(item,0)===index
  })
}


//6. indexof--o(n^2)
function removeDup(arr){
  for(let i=1;i<arr.length;i++){
    for(let j=i-1;j>=0;j--){
      if(arr[i]==arr[j]){
        arr.splice(i,1)
        i = i-1
      }
    }
  }
}

//7.利用排序
function removeDup(arr){
  arr.sort()
  let arrNew=[arr[0]]
  for(let i=1;i<arr.length;i++){
    if(arr[i]!=arr[i-1]){
      arrNew.push(arr[i])
    }
  }
  return arrNew
}