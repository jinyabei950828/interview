function insertSort(arr){
  //默认第一个已经拍好序
  for (let i = 1; i < arr.length; i++) {
    if(arr[i]<arr[i-1]){
      let temp = arr[i]
      arr[i] = arr[i-1]
      var j = i-1
      while(j>=0&&arr[j]>temp){
        arr[j+1] = arr[j]
        j--
      }
      arr[j+1] = el
    }
  }
}