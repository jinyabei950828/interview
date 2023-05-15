//sleep 函数的作用就是延迟指定时间后再执行接下来的函数
function sleep(time){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(true)
    },time*1000)
  })
}