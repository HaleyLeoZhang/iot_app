/**
* HTTP请求
*/
import React, {
  NetInfo
}
from 'react-native';

import networkTool from './networkTool';
import handle from './handle';

/** 默认配置
 * @param String    url      请求的地址，不带 get 参数
 * @param Function  func     回调函数
 * @param Json      get      GET参数
 * @param Json      post     POST参数
 * @param JSon      header   http 请求头，POST默认 表单形式提交
 * @param bool      token    需要token身份吗？true->是  false->否
 */

class http{
  /**
  * Router 依据配置的host拼接
  * @param String router 请求的接口路由
  * @return 拼接域名或IP的地址
  */
  static router( path ){
    return env.router_host + path;
  }
  /**
  * 网络请求
  */
  static request( ini ){
    networkTool.is_connect(()=>{
      // 如果需要token
      if( undefined !== ini.token  ){
        networkTool.get_token(()=>{
          handle.run(ini);
        });
      }else{
        // 如果不需要token
        handle.run(ini);
      }
    });
  }
}

export default http;