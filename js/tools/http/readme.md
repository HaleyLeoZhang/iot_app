封装 http 的 GET 请求 与 POST请求，具体用法，看文中

### 以JSON格式配置

     String    url      请求的地址，不带 get 参数
     Function  func     回调函数
     Json      get      GET参数
     Json      post     POST参数
     JSon      header   http 请求头，POST默认 表单形式提交
     bool      token    需要token身份吗？true->是  false->否

### 示例请求
###### POST请求

    let __conf = {
      url : http.router('user/login/api'),
      func: (d)=>{
        // 这里是回调函数，d是Http请求后收到的参数
      },
      post: {
        'name':'hlzblog',
        'password':'123456789',
      },
    }; 
    http.request(__conf);

###### GET请求

    let __conf = {
      url : http.router('user/info'),
      func: (d)=>{
        // 这里是回调函数，d是Http请求后收到的参数
      },
      token: true,
    }; 
    http.request(__conf);