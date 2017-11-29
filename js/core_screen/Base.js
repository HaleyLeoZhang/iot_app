//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++

// 官方组件
import React, { Component } from 'react';
import {View, ScrollView, Image} from 'react-native';
// 第三方组件

// 基础组件
import coreStyle from '../core_style/Base';  // ----样式
import coreLogic from '../core_logic/Base';  // ----逻辑

export default class Base extends Component{
  constructor(p){
    super(p);
    this.__logic = new coreLogic(this);
  }
  
  // 底部栏，名称设定
  static navigationOptions = {
    title : '', // 这是 StackNavigator 的标题
    header: null, // 隐藏顶部导航栏 ---已自定义样式，返回上一层
    tabBarVisible: false, // 隐藏底部导航栏
  };

  // 隔断层
  __separate(){
    return(
      <View style={coreStyle.__separate}></View>
    );
  }

  // 加载层
  __loading(){
    return(
      <View style={coreStyle.__loading}>
        <Image
          source={require('../img/loading.gif')}
          style={coreStyle.__loading_gif}
        ></Image>
      </View>
    );
  }

  // 顶部导航 --- 自定义样式

  // 主渲染输出， --- 要重写
  render(){
    return(
      <ScrollView style={coreStyle.__container}>
        <View>测试</View>
      </ScrollView>
    );
  }
}