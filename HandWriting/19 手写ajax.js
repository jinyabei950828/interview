function ajax(json){
  json.data = json.data||""
  json.contentType = json.contentType||"application/x-www-form-urlencoded"

  var ajax
  if(window.XMLHttpRequest){
    ajax = new XMLHttpRequest()
  }else{
    ajax = new ActiveXObject("Microsoft.XMLHTTP")
  }

  if(json.type.toUpperCase()=='get'.toUpperCase()){
    ajax.open("GET",json.url+"?"+json.data,true)
    ajax.send()
  }else{
    ajax.open("POST",json.url,true)
    ajax.send(json.data)
  }

  ajax.onreadystatechange = function(){
    if(ajax.readyState==4){
      if(ajax.status==200){
        json.success(ajax.response)
      }
    }
  }
}

