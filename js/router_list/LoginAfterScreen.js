import React, { Component } from 'react';  // 导入默认组件，与非默认组件
import { StackNavigator } from 'react-navigation'; // 配置路由 文档：http://www.jianshu.com/p/8b38d1b654f9

//+++++++++++++++++++++++++++++++++++++++++++++
//              引入组件文件
//+++++++++++++++++++++++++++++++++++++++++++++
import HomeViewScreen from '../core_screen/home/view'; // 样式

//+++++++++++++++++++++++++++++++++++++++++++++
//                书写路由  
//+++++++++++++++++++++++++++++++++++++++++++++
// TabNavigator(RouteConfigs,TabNavigator)   // 路由配置,导航配置  
const LoginAfterScreen = StackNavigator({
  // 路由配置
  HomeView: { screen: HomeViewScreen },
}, {
  swipeEnabled: false,
  initialRouteName: 'HomeView', // 设置默认的页面组件
  lazy: true, // 在app打开的时候将底部标签栏全部加载，默认false,推荐改成true
  animationEnabled: false, // tab之间切换，是否用动画 这个会影响性能，建议关闭
});



export default LoginAfterScreen;
