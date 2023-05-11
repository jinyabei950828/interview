Function.prototype.myApply = function(context){
  if(typeof this!=='function'){
    throw new Error('type error')
  }
  context = context||window
  const fn = symbol("fn")
  context[fn] = this
  let result = null
  const args = arguments[1]
  if(args){
    result = context[fn](...args)
  }else{
    result = context[fn]()
  }
  delete context[fn]
  return result
}

Function.prototype.myCall = function(context,...args){
  if(typeof this!=='function'){
    throw new Error('type error')
  }
  context = context||window
  const fn = Symbol("fn")
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}

Function.prototype.myBind = function(context,...args){
  if(typeof this!=='function'){
    throw new Error("type error")
  }
  context = context||window
  const fn = Symbol("fn")
  context[fn] = this

  let _this = this
  
  //done：注意该部分结构
  const result = function(...innnerArgs){
    if(this instanceof _this === true){
      this.fn = _this
      this[fn](...[...args,...innnerArgs])
    }else{
      context[this](...[...args,...innnerArgs])
    }
  }
  result.prototype = Object.create(this.prototype)
  return result
}
