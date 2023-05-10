//1.flat 
arr.flat(Infinity)

//2.递归实现
function flatArr(arr,res){
  for(let item of arr){
    if(typeof item==='number'){
      res.push(item)
    }else{
      flatArr(item,res)
    }
  }
}

//3.正则实现
var str =JSON.stringify(arr)
var res = str.replace(/\[|\]/g,'')
res = '['+res+']'
res = JSON.parse(res)
console.log(res)

//4.reduce
var myFlatten = arr => arr.reduce((res,cur)=>{
  return res.concat(Array.isArray(cur)?myFlatten(cur):cur)
},[])