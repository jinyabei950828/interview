
const arr = [
  {key:'a',value:'1'},
  {key:'b',value:'2'}
]

// 将一个由键值对对象组成的数组转换成一个键为对象中key属性值、值为value属性值的对象
const change = (arr)=>{
  return arr.reduce((pre,{key,value})=>{
    pre[key] = value;
    return pre
  },{})
}

console.log(change(arr))