//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++

/**
* 消息弹出层，各种方式
*    一般用于调试
*/
import {
  ToastAndroid,
  AlertIOS,
} from 'react-native';

class toast{
  /**
  * 弹出消息提示，一段时间后自动消息
  * @param string  msg 消息
  * @param int     option   0-> 短时间  1 -> 长时间  
  */
  static run (msg, option=1){
    if( false === env.is_ios ){
      switch( option ){
        case 0:
          ToastAndroid.show(msg, ToastAndroid.SHORT);
          break;
        case 1:
          ToastAndroid.show(msg, ToastAndroid.LONG);
          break;
      }
    }else{
      AlertIOS.alert('临时消息', msg);
    }
  }

}


export default toast;