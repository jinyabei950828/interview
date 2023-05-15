class MyPromise{
  constructor(excutor){
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.successCB = []
    this.failCB = []

    let resolve = (value)=>{
      if(this.state==='pending'){
        this.state = 'fulfulled'
        this.value = value
        this.successCB.forEach(f=>f())
      }
    }

    let reject = (reason)=>{
      if(this.state==='pending'){
        this.state = 'rejected'
        this.reason = reason
        this.successCB.forEach(f=>f())
      }
    }

    try{
      excutor(resolve,reject)
    }catch(error){
      reject(error)
    }
  }

  then(onFulFilled,onRejected){
    if(this.state==='fulfilled'){
      onFulFilled(this.value)
    }
    if(this.state==='rejected'){
      onRejected(this.reason)
    }
    if(this.state==='pending'){
      this.successCB.push(()=>{onFulFilled(this.value)})
      this.failCB.push(()=>{onRejected(this.reason)})
    }
  }
}

Promise.all = function(promises){
  let list = []
  let count = 0;
  function handler(i,data){
    list[i] = data
    count++
    if(count===promises.length){
      return resolve(list)
    }
  }
  return new Promise((resolve,reject)=>{
    if(!Array.isArray(arr)){
      throw new Error(`${arr} must be a array`)
    }
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(res=>{
        return handler(i,res)
      }).catch(err=> {
        return reject(err)
      })
    }
  })
}

/**
 * promise.retry:执行一个函数，如果不成功最多可以尝试times次
 * @param {所要执行的函数} fn 
 * @param {尝试的次数} times 
 * @param {延迟的时间} delay 
 */
Promise.retry = function (fn,times,delay){
  return new Promise(function(resolve,reject){
    var error;
    var attempt = function(){
      if(times==0){
        reject(error)
      }else{
        fn().then(resolve).catch(function(e){
          time--
          error = e
          setTimeout(function(){
            attempt()
          },delay)
        })
      }
    }
  })
}

//同步的callback包装成promise形式
function promisify(fn,context){
  return (...args)=>{
    return new Promise((resolve,reject)=>{
      fn.apply(context,[...args,(err,res)=>{
        return err?reject(err):resolve(res)
      }])
    })
  }
}