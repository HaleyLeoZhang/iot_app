/**
* 用 wifi模块的esptouch技术。绑定设备 功能汇总
*/

// ios & android : 配置wifi
import Smartconfig from 'react-native-smartconfig';
// android 才能直接扫描周围的 wifi
import * as Wifi from 'react-native-android-wifi'; 
// ios & android : 获取ssid-但需要 react-native link 
import { NetworkInfo } from 'react-native-network-info';


export default class wifi{

  //++++++++++++++++++++++++++++++++++++++
  //      IOS & Android   通用部分
  //++++++++++++++++++++++++++++++++++++++

  /**
  * 配置 wifi --- 开始 ---Smartconfig技术
  * @param json __config 回调函数 
  *   -------  示例传参  --------
  *    {    
  *      "ssid": "wifi名称",
  *      "password": "wifi密码"
  *    }
  */
  static wifi_config_start(__config){
    let __config__ = {
      type: 'esptouch', // or airkiss, now doesn't not effect
      ssid: __config.ssid,
      bssid:'',        // "" if not need to filter (don't use null)
      password: __config.password,
      timeout: 50000  // now doesn't not effect
    };
    Smartconfig.start(__config__)
      // 成功后回调
      .then(results => {
        // Array of device success do smartconfig
        console.log('testScreen -> test : success');
        console.log(results);
        /* 示例返回数据
          [
            {
              'bssid': 'device-bssi1', //device bssid
              'ipv4': '192.168.1.11' //local ip address
            },
            {
              'bssid': 'device-bssi2', //device bssid
              'ipv4': '192.168.1.12' //local ip address
            },
            ...
          ]
        */
      }).catch(error => {
        console.log('testScreen -> test : error');
        console.log(error);
      });
  }

  /**
  * 配置 wifi --- 中断  
  */
  static wifi_config_stop(){
    Smartconfig.stop(); // interrupt task
  }

  /**
  * 获取当前wifi的SSID，并回调
  * @param callback func 带参回调函数(string)
  */
  static wifi_get_ssid(func){
    NetworkInfo.getSSID(ssid => {
      func(ssid);
    });
  }


  //++++++++++++++++++++++++++++++++++++++
  //      Android   部分
  //++++++++++++++++++++++++++++++++++++++

  /**
  * 获取wifi列表，并回调
  * @param callback func 带参回调函数(array)
  * -------------  说明  ---------------
  Step 1  先配置好wifi，使其能上网。
  Step 2  扫描附近是否有规定名称的设备，以当做是物联网设备
            wifi组合名称规则[不超过32位]
              公司名_产品名_设备编号
            示例
              hlzblog_light_ADESSC8455
  Step 3  APP收到 wifi名称以 `hlzblog_` 开头的，解析该wifi名
            在搜索列表中依据产品名，显示产品对应的图片
            上传设备编号，查看云端是否有该设备
                有的话就自动与用户绑定，同时删除设备相关的用户数据
  */
  static wifi_get_list(func) {
    Wifi.loadWifiList(
      wifiStringList => {
        let wifiArray = JSON.parse(wifiStringList);
        func(wifiArray);
      }
      , error => {
        console.log(error, 3);
      }
    );
  }



}