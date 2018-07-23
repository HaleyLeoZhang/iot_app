/**
 * 检测网络
 */

import React, {
  NetInfo
}
from 'react-native';

import toast from '../toast';

class networkTool{
  /**
  * 检查网络链接状态
  * @param function callback 回调函数
  */
  static is_connect(callback){
    NetInfo.isConnected.fetch()
      .done(
        isConnected => {
          // 如果连接成功
          if( isConnected ){
            callback();
          }else{
            toast.run('请检测网络');
          }
        }
      );
  }
  /**
  * 获取token
  * @param function func 获取 token
  */
  static get_token(func){
    storage.load({
      key: 'token'
    }).then(token => {
      func(token);
    }).catch(err => {
      // 如果没有找到数据且没有sync方法
      toast.run('身份已过期，请先登录');
    });
  }

}



export default networkTool;
