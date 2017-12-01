//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++

// 官方组件
import React, { Component } from 'react';
import {
  View, 
  ScrollView, 
  Image,
  Text,
}
from 'react-native';
import Button from 'react-native-button';
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
    header: null, // 隐藏顶部导航栏 ---已自定义样式，返回上一层
    tabBarVisible: false, // 隐藏底部导航栏
  };

  /**
  * 灰色隔断层
  * @param int set_heigh 隔断高度
  */
  __separate(set_heigh=10){
    return(
      <View style={[coreStyle.__separate,{height:set_heigh}]}></View>
    );
  }

  /**
  * 头部
  * @param string title 导航栏标题
  */
  __header(title='请输入标题'){
    let { goBack } = this.props.navigation; // 配置此项，让模板中可设置跳转到的 route
    return(
        <View style={[coreStyle.__header,coreStyle.__flex_outer]}>
          <Button onPress={()=>{goBack();}}>
            <View style={coreStyle.__header_arrow}>
              <Image 
                style={[coreStyle.__header_arrow_img,Image.strech]}
                source={require('../img/back.png')}>
              </Image>
            </View>
          </Button>
          <View style={coreStyle.__header_title}>
            <Text style={[coreStyle.__header_title_text]}>{title}</Text>
          </View>
        </View>
    );
  }

  /**
  * 加载层
  * @param bool status 加载层开关的状态值  false->加载结束 true->加载中
  */
  __loading(status=false){
    if( status === true ){
      return(
        <View style={coreStyle.__loading}>
          <Image
            source={require('../img/loading.gif')}
            style={coreStyle.__loading_gif}
          ></Image>
        </View>
      );
    }else{
      return (<View></View>);
    }
  }

  // 示例主渲染输出， --- 要重写
  render(){
    return(
      <View style={coreStyle.__container}>
        {this.____header('这里是导航栏标题')}
        <View style={{height:env.height - 40 }}>
          <ScrollView>测试</ScrollView>
        </View>
      </View>
    );
  }
}