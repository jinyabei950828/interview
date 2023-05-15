function jsonp(obj){
  const {url,data} = obj
  if(!url)return
  return new Promise((resolve,reject)=>{
    const cbFn = `jsonp_${Date.now()}`
    data.callback = cbFn

    const head = document.querySelector("head")
    const script = docuemnt.querySelector('script')

    const src = `${url}?${data2Url(data)}`
    script.src = src

    head.appendChild(script)

    windoww[cbFn] = function(res){
      res?resolve(res):reject('error')
      head.removeChild(script)
      window[cbFn] = null
    }
  })
}

function data2Url(data){
  return Object.keys(data).reduce((acc,cur)=>{
    acc.push(`${cur}=${data[cur]}`)
    return acc
  },[]).join('&')
}