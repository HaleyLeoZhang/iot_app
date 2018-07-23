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
import TestWebview_rn_bridgeScreen from '../core_screen/test/webview_rn_bridge';

//+++++++++++++++++++++++++++++++++++++++++++++
//              引入组件文件
//+++++++++++++++++++++++++++++++++++++++++++++
class IndexRouter extends TestWebview_rn_bridgeScreen{

}



// -------------------------------------------//
// ------------------注册 APP-----------------//
// -------------------------------------------//
AppRegistry.registerComponent('hlzblog_iot', () => IndexRouter);