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
      resolve(list)
    }
  }
  return Primise((resolve,reject)=>{
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(res=>{
        handler(i,res)
      },err=>reject(err))
    }
  })
}