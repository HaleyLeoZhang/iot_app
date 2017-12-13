//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * 用 wifi模块的 smartconfig 相关技术。绑定设备 功能汇总
 */

// ios & android : 配置wifi
import Smartconfig from 'react-native-smartconfig';
// ios & android : 获取ssid-但需要 react-native link 
import { NetworkInfo } from 'react-native-network-info';


// android 才能直接扫描周围的 wifi
import * as Wifi from 'react-native-android-wifi';


export default class wifi {
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
   *      "success":  ()=>{...}
   *      "error":()=>{...}
   *    }
   */
  static wifi_config_start(__config) {
    let __config__ = {
      type: 'esptouch', // or airkiss, now doesn't not effect
      ssid: __config.ssid,
      bssid: '', // "" if not need to filter (don't use null)
      password: __config.password,
      timeout: 50000 // now doesn't not effect
    };
    Smartconfig.start(__config__)
      // 成功后回调
      .then(results => {
        __config.success(results); // 执行回调
        // Array of device success do smartconfig
        log('bindWifiDeviceModule -> wifi_config_start : success');
        log(results);
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
      }).catch(e => {
        log('bindWifiDeviceModule -> wifi_config_start : error');
        log(e.message);
        __config.error(e);
      });
  }

  /**
   * 配置 wifi --- 中断  
   */
  static wifi_config_stop() {
    Smartconfig.stop(); // interrupt task
  }

  /**
   * 获取当前wifi的SSID，并回调
   * @param callback func 带参回调函数(string)
   */
  static wifi_get_ssid(func) {
    log('正在执行wifi_get_ssid');
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
   * Step 1  先配置好wifi，使其能上网。
   * Step 2  扫描附近是否有规定名称的设备，以当做是物联网设备
   *          wifi组合名称规则[不超过32位]
   *            公司名_产品名_设备编号
   *          示例
   *            hlzblog_light_ADESSC8455
   * Step 3  APP收到 wifi名称以 `hlzblog_` 开头的，解析该wifi名
   *           在搜索列表中依据产品名，显示产品对应的图片
   *           上传设备编号，查看云端是否有该设备
   *               有的话就自动与用户绑定，同时删除设备相关的用户数据
   */
  static wifi_get_list(func) {
    if(!__IOS__) {
      Wifi.loadWifiList(
        wifiStringList => {
          let wifiArray = JSON.parse(wifiStringList);
          func(wifiArray);
        }, error => {
          log(error, 3);
        }
      );
    }
  }

  /**
   * 判断wifi连接状态
   * {
   *   "success":()={..0}
   *   "error":()={..0}
   * }
   */
  static wifi_status(d) {
    if(!__IOS__) {
      Wifi.isEnabled((isEnabled) => {
        if(isEnabled) {
          console.log("wifi service enabled");
          if(undefined !== d.success) {
            d.success();
          }
        } else {
          console.log("wifi service is disabled");
          if(undefined !== d.error) {
            d.error();
          }
        }
      });
    }
  }



}