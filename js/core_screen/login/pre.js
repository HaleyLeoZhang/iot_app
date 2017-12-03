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
import coreStyle from '../../core_style/login/pre'; // 样式
import coreLogic from '../../core_logic/login/pre'; // 逻辑
import Base from '../../core_screen/Base'; // 基类

export default class LoginPreScreen extends Base{
  constructor(p){
    super(p);
    this.logic = new coreLogic(this);
    this.state = {
    };
  }



  // 渲染 --- 不带导航栏
  render(){
    let {navigate} = this.props.navigation;
    return(
      <View style={coreStyle.__container}>
        <Text>APP启动页</Text>
        <Button onPress={()=>{navigate('HomeView')} }>
          <Text>点击跳转</Text>
        </Button>
        {this.__toast()}
      </View>
    );
  }
}