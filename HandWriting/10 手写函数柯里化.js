function add(){
  let outer = [...arguments]
  let sum = function(){
    let inner = [...arguments];
    outer = outer.concat(inner)
    return sum
  }

  sum.toString = function(){
    return outer.reduce((prev,cur)=>{
      prev = prev+cur
      return prev
    },0)
  }

  return sum
}




function currying(fn,...args){
  if(fn.length<=args.length){
    return fn(...args)
  }
  return function(...args1){
    return currying(fn,...args,...args1)
  }
}