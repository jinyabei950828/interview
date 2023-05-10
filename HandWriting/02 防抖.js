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