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
import coreStyle from '../../core_style/login/register'; // 样式
import coreLogic from '../../core_logic/login/register'; // 逻辑
import Base from '../../core_screen/Base'; // 基类

export default class LoginRegisterScreen extends Base{
  constructor(p){
    super(p);
    this.logic = new coreLogic(this);
    this.state = {
    };
  }

  // 渲染 --- 带导航
  __render(){
    let it = this;
    this.nav_name('注册');
    return(
      <View>
        <Button onPress={()=>{it.logic.__toast('云天河说话了')}}>
          <Text>点我</Text>
        </Button>
      </View>
    );
  }

}