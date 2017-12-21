// 官方组件
import React from 'react'; // render需要
import {
  ScrollView, 
  View,
  Text,
}from 'react-native';
// 第三方组件
import Button from 'react-native-button';
// 基础引入
import coreStyle from '../../core_style/test/show'; // 样式
import coreLogic from '../../core_logic/test/show'; // 逻辑
import Base from '../../core_screen/Base'; // 基类

export default class TestShowScreen extends Base{
  constructor(p){
    super(p);
    this.state = {
      list:{},
    };
    this.logic = new coreLogic(this);
  }


  render(){
    this.nav_name = '这里是导航栏名字'; // 设置导航栏名称
    let it = this;
    // 带顶部导航栏的输出方式
    return this.__render(
      <View>
      </View>
    );
  }
}