function isObject(val){
  return typeof val==='object'&&val!=null
}

function deepClone(obj,hash = new WeakMap()){
  if(!isObject(obj))return obj

  if(!hash.has(obj))return hash.get(obj)

  let target = Array.isArray(obj)?  [] : {}
  hash.set(obj,target)

  Reflect.ownKeys(obj).forEach(key=>{
    target[key] = isObject(obj[key])?deepClone(obj[key],hash):obj[key]
  })

  return target
}