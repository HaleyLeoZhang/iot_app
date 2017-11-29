/**
* 测试新功能，写新视图专用入口
* 请修改 /js目录下的的index.js中
  注释掉 import './router_list/__index'; // 路由入口 --- 生产环境
  运行   import './router_list/__test';  // 路由入口 --- 测试环境
*/
import React from 'react';  // 导入默认组件，与非默认组件
import {
  Text,
  View,
  AppRegistry,
} from 'react-native';


// import Base from '../core_screen/Base';
// import TestWebview_rn_bridgeScreen from '../core_screen/test/webview_rn_bridge';
import TestEsp_touchScreen from '../core_screen/test/esp_touch';
//+++++++++++++++++++++++++++++++++++++++++++++
//              引入组件文件
//+++++++++++++++++++++++++++++++++++++++++++++
class IndexRouter extends TestEsp_touchScreen{
  // // 析构函数
  // constructor( props ){
  //   super( props );
  //   // 测试http请求
  //   this.test_get();
  //   this.test_post();
  // }

  // // 测试 http get 请求
  // test_get(){
  //   let __conf = {
  //     url:'http://www.hlzblog.top/Api?con=Common_reply&act=reply_info&floor_id=32&to_page=1',
  //     get:{
  //       'aa': 'b',
  //     },
  //     func:(d)=>{
  //       log('get测试');
  //     }
  //   };
  //   http.request(__conf);
  // }

  // // 测试 http post 请求
  // test_post(){
  //   let __conf = {
  //     url:'http://testwx.pzshlife.com/lab/curtain/status/set?code=AB5C&pwd=xxx',
  //     post:{
  //       "status":"1",
  //     },
  //     func:(d)=>{
  //       log('post测试');
  //     }
  //   }
  //   http.request(__conf);
  // }

  // render(){
  //   return(
  //     <View style={{flex:1,backgroundColor:'#fff'}}>
  //       <Text>测试时间 2017年11月6日 23:14:38 </Text>
  //     </View>
  //   );
  // }
}



// -------------------------------------------//
// ------------------注册 APP-----------------//
// -------------------------------------------//
AppRegistry.registerComponent('hlzblog_iot', () => IndexRouter);