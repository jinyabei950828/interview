function throttle(handler,delay){
  var preTime = Date.now()
  let timer;
  return function(){
    const _args = arguments
    const _self = this

    let nowTime = Date.now()
    if(nowTime-preTime>=delay){
      timer&&clearTimeout(timer)
      handler.apply(_self,_args)
      preTime = Date.now()
    }else{
      timer&&clearTimeout(timer)
      timer = setTimeout(()=>{
        handler.apply(_self,_args)
      },2000)
    }
  }
}