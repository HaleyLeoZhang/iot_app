class handle{
  // 通过传入参数进行处理
  static run( ini ){

    fetch(  this.get_url(ini), this.conf_http(ini)  )
      .then((response) => {
        let data = response.json(); // 解析数据为 json格式
        return data; // 传递数据给下一步
      })
      .then((json_data) => { // 接收刚刚获取到的数据
        log(json_data, 2);
        // 如果有回调
        if( undefined !== ini.func ){
          ini.func(json_data);
        }
      })
      .catch (error => { // 从fetch开始，到最后一个then，有错误出现，则会捕捉错误。
        log('网络请求异常',4);
        log(error.message, 4);
      });
  }

  // 将get参数与 url 合并
  static get_url( ini ){
    if( null === ini.url.match(/\?/) ){
      return ini.url + '?' + this.package_params(ini.get);
    }else{
      return ini.url + '&' + this.package_params(ini.get);
    }
  }

  // 配置http请求
  static conf_http(ini){
    let res = {
      method: '',
      headers: '',
      body: '',
    };
    if (undefined !== ini.post) {
      log('POST请求', 2);
      res.method = 'POST';
      if (undefined === ini.header) {
        res.headers = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };
      }
      res.body = this.package_params(ini.post);
    } else {
      res = null;
      log('GET请求', 2);
    }
    log('URL ' + this.get_url(ini), 2);
    return res;
  }

  /**
  * 将json数据存放到字符串中
  * @param Json json_data  将json数据中的所有参数转为表单格式
  */
  static package_params(json_data) {
    let body = '';
    if( undefined !== json_data ){
      for (let i in json_data) {
        body += encodeURIComponent(i) + '=' + encodeURIComponent(json_data[i]) + '&';
      }
    }
    return body;
  }
  //
}

export default handle;