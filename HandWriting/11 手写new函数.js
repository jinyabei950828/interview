function objectFactory(){
  let constructor = Array.prototype.shift.call(arguments)

  if(typeof constructor!=='function'){
    throw new Error("type error")
  }

  let newObject = Object.create(constructor.prototype)
  let result = constructor.apply(newObject,arguments)

  let flag = result&&(typeof result==='object'||typeof result ==='function')

  return flag?result:newObject
}