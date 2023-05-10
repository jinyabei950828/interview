/**
 * 快排实现:
 * 选择一个基准元素,然后将数组中的元素分为小于基准元素和大于基准元素的两部分，再对这两部分分别进行排序
 */
function quickSort1(arr){
  quick_sort_helper(arr,0,arr.length-1)
}

function quick_sort_helper(arr,l,r){
  while(l<r){
    var mid = partition(arr,l,f);
    quick_sort_helper(arr,0,mid-1)
    quick_sort_helper(arr,mid+1,r)
  }
}

function partition(arr,l,r){
  var target = arr[l]
  var i=l,j=r;
  while(i<j){
    while(j>i&&arr[j]>=target)j--
    arr[i]=arr[j]
    while(j>i&&arr[i]<=target)i++
    arr[j] = arr[i]
  }
  arr[i] = target;
  return i;
}

//实现快排方法2：
function quickSort2(arr){
  if(arr.length<2)return arr
  const cur = arr[arr.length-1]
  const left = arr.filter((item,index)=>item<cur&&index!=arr.length-1)
  const right = arr.filter(item=>item>cur)
  return [...quickSort2(left),cur,...quickSort2(right)]
}


