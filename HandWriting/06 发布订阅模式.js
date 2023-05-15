class Event{
  constructor(){
    this.events = {}
  }

  on(type,handler){
    if(!this.events[type]){
      this.events[type] = []
    }
    this.events[type].push(handler)
  }

  emit(type,...params){
    if(!this.events[type]){
      return new Error("未注册")
    }

    this.events[type].forEach(handler => {
      handler(...params)
    });
  }

  off(type,handler){
    if(!this.events[type]){
      return new Error("无效事件")
    }

    if(!handler){ // 没有指明handler，移除type
      delete this.events[type]
    }else{
      const idx = this.events[type].findIndex(ele=>ele===handler);
      if(idx===undefined){
        return new Error('no')
      }
      this.events[type].splice(idx,1)
      if(this.events[type].length===0){
        delete this.events[type]
      }
    }
  }

  once(type,handler){
    function fn(){
      handler()
      this.off(type,handler)
    }
    this.on(type,fn)
  }
}