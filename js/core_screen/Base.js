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
// 第三方组件
import Button from 'react-native-button'; // 按钮
import Toast, {DURATION} from 'react-native-easy-toast'; // 弹出提示消息
// 基础组件
import coreStyle from '../core_style/Base';  // ----样式

export default class Base extends Component{
  constructor(p){
    super(p);
  }
  
  // 底部栏，名称设定
  static navigationOptions = {
    header: null, // 隐藏顶部导航栏 ---已自定义样式，返回上一层
    tabBarVisible: false, // 隐藏底部导航栏
  };

  // 设置导航栏目名字
  static nav_name = '';

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
  __header(){
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
            <Text style={[coreStyle.__header_title_text]}>{this.nav_name}</Text>
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

  /**
  * 消息层
  * this.p.refs.toast.show('输出的文字');
  */
  __toast(){
    return(
      <Toast
        ref='toast'
        position='bottom'
        style={{backgroundColor:'#2b2b2b'}}
        fadeInDuration={500}
        fadeOutDuration={500}
        opacity={0.8}
      ></Toast>
    );
  }

  // 如果想用顶部导航栏，请把要渲染的视图放到这里
  __render(){
    return(<View></View>);
  }


  // 示例主渲染输出， --- 要重写
  render(){
    return(
      <View style={coreStyle.__container}>
        {/* header 高 40 */}
        {this.____header()}
        <View style={{height:env.height - 40 }}>
          {this.__render()}
        </View>
        {this.__toast()}
      </View>
    );
  }
}