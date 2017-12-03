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
import coreStyle from '../../core_style/home/view'; // 样式
import coreLogic from '../../core_logic/home/view'; // 逻辑
import Base from '../../core_screen/Base'; // 基类

export default class HomeViewScreen extends Base{
  constructor(p){
    super(p);
    this.logic = new coreLogic(this);
    this.state = {
    };
  }


  render(){
    this.nav_name = 'HomeViewScreen';
    let it = this;
    return this.__render(
      <View>
        <Button onPress={()=>{it.logic.__toast('云天河厉害得不得了')}}>
          <Text>测试按钮</Text>
        </Button>
      </View>
    );
  }

}