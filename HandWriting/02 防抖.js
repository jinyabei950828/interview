// n秒后在执行该事件，若在n秒内被重复触发，则重新计时
function debounce(handler,delay){
  let timer
  return function(){
    const _self = this
    const _args = arguments
    timer&&clearInterval(timer)
    timer = setTimeout(()=>{
      handler.call(_self,_args)
    },delay)
  }
}

//立即执行防抖函数
function debounce(fn,delay,immediate){
  let timer
  return function(){
    let _self = this
    let _args = arguments
    timer&&clearTimeout(timer)
    if(immediate){
      let callNow = !timer
      timer = setTimeout(()=>{
        timer = null
      },delay)
      if(callNow){fn.apply(_self,_args)}
    }else{
      timer = setTimeout(()=>{
        fn.apply(_self,arguments)
      },delay)
    }

  }
}