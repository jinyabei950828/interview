### axios如何实现二次封装

1.设置请求超时时间

2.通过validateStatus定义HTTP响应状态码返回多少是请求成功

```javascript
// 返回的状态码
service.defaults.validateStatus = function(status){
  return status >= 200 && status <= 500
}
```

3.设置取消请求全局数组，并在请求拦截器（http request拦截）中设置cancelToken 

```javascript
// 取消请求全局数组
window._axiosPromiseArr = []

service.interceptors.request.use(
  config => {
    // request拦截设置cancel token
    config.cancelToken = new axios.CancelToken(cancel => {
      window._axiosPromiseArr.push({ cancel })
    })
    return config
  }
）
```

4. 项目中封装了加载进度条，在点击中止加载时同时取消当前未完成的请求

```javascript
this.$confirm('是否取消操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window._axiosPromiseArr.forEach((ele, index) => {
          // 清空（终止）页面正在请求的内容
          ele.cancel() 
          // 清空请求的参数 清空请求的参数
          delete window._axiosPromiseArr[index]
        })
      })
```

5.在请求拦截器中，判断Cookies是否存有token，让每个请求（config.headers）都携带token

```scss
if (getToken()) {
    config.headers[website.tokenHeader] = 'bearer ' + getToken()
}
复制代码
```

6.在响应拦截器（http request拦截）中，根据和后端协商好的约定做拦截的默认统一处理和个性化定制*例如状态码返回401表示登录失效，让用户进行登出操作，跳转至登录页，并清除token、菜单之类的用户相关信息

```dart
// http response 拦截
service.interceptors.response.use(
  async response => {
  // 获取状态码
  const status = response.status || res.code
  if (status === 401) {
    MessageBox.confirm('您已被登出，请重新登录！', '确认登出', {
          confirmButtonText: '登出',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
        store
            .dispatch('LogOut')
            .then(() => {
              resetRouter()
              sessionStorage.removeItem('noTenantId')
              window.location.href = window.origin + (process.env.PRO_NAME ? '/' + 
              process.env.PRO_NAME : '') + '/#/'
            })
            .catch(() => {
              Message({
                type: 'error',
                message: '退出失败'
              })
            })
        })
  }，
error => {
    return Promise.reject(new Error(error))
  }
}
复制代码
```

**状态码非200，做默认统一处理**

```javascript
if (status !== 200) {
      // 如果请求为非200做默认统一处理
      Message({
        message: message,
        type: 'error'
      })
      return Promise.reject(new Error(message))  
}
```

**还有些个性化的定制，比如如果请求是下载文件，就直接返回数据，不做状态码的判断。**

```arduino
if (response.config.downFile) {
      return response
}
```



