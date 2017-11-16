进入真正的首页前，预留一个进入APP后的通知层，一般是给数据，判断是否有新页面，然后用webview打开 

    // 有消息，打开webview，并记录为当前id已查看，当用户返回时，跳向登录页面
    {
      id: 10,
      has_webview: 1,
      url: 'http://xxxx',
    }
    
    // 没有消息，路由走向登录页
    {
      has_webview: 0,
      url: '',
    }