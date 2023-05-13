function isObject(val){
  return typeof val==='object'&&val!=null
}

// 递归可能爆栈的问题
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

function cloneLoop(x){
  const root = {}
  const loopList = [
    {
      parent:root,
      key:undefined,
      data:x
    }
  ]
  while(loopList.length){
    //深度优先
    const node = loopList.pop()
    const {parent,key,data} = node
    
    let anoPar = parent
    if(typeof key!='undefined'){
      anoPar = parent[key] = {}
    }

    for (const k in data) {
      if (data.hasOwnProperty(k)) {
        if(typeof data[key]==='object'){
          loopList.push({
            parent:anoPar,
            key:k,
            data:data[k]
          })
        }else{
          anoPar[k] =data[k]
        }
      }
    }
  }
  return root
}