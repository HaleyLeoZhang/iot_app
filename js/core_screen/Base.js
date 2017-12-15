//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++

// 官方组件
import React, { Component } from 'react'; // render需要
import {
  View,
  ScrollView,
  Image,
  Text,
}
from 'react-native';
// 第三方组件
import Button from 'react-native-button'; // 按钮
import Toast, { DURATION } from 'react-native-easy-toast'; // 弹出提示消息
// 基础组件
import coreStyle from '../core_style/Base'; // ----样式

export default class Base extends Component {
  constructor(p) {
    super(p);
    this.nav_name = ''; // 设置导航栏目名字
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
  __separate(set_heigh = 10) {
    return(
      <View style={[coreStyle.__separate,{height:set_heigh}]}></View>
    );
  }

  /**
   * 头部导航栏
   * @param string title 导航栏标题
   */
  __header() {
    let it = this;
    return(
      <View style={[coreStyle.__header,coreStyle.__flex_outer]}>
          <Button onPress={()=>{it.logic.__header_callback();}}>
            <View style={coreStyle.__header_arrow}>
              <Image 
                style={[coreStyle.__header_arrow_img,Image.strech]}
                source={require('../img/back.png')}>
              </Image>
            </View>
          </Button>
          <View style={coreStyle.__header_title}>
            <Text style={coreStyle.__header_title_text}>{this.nav_name}</Text>
          </View>
          <View style={coreStyle.__header_arrow}>
            <Text>{this.__header_right()}</Text>
          </View>
      </View>
    );
  }

  /**
   * 头部右侧view --- 可覆盖
   * @param string title 导航栏标题
   */
  __header_right() {
    return;
  }

  /**
   * 加载层
   * @param bool status 加载层开关的状态值  false->加载结束 true->加载中
   */
  __loading(status = false) {
    if(status === true) {
      return(
        <View style={coreStyle.__loading}>
          <Image
            source={require('../img/loading.gif')}
            style={coreStyle.__loading_gif}
          ></Image>
        </View>
      );
    } else {
      return(<View></View>);
    }
  }

  /**
   * 消息层
   * this.p.refs.toast.show('输出的文字');
   */
  __toast() {
    return(
      <Toast
        ref='toast'
        position='bottom'
        style={{backgroundColor:'#2b2b2b'}}
        fadeInDuration={500}
        fadeOutDuration={500}
        opacity={0.8}
      />
    );
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++
  //    各种导航栏，在render函数中使用
  //+++++++++++++++++++++++++++++++++++++++++++++++++++

  /**
   * 带顶部导航栏 栏目高 40
   * @param View render_view 待渲染的视图组件
   */
  __render(render_view) {
    return(
      <View style={coreStyle.__container}>
        {/* header 高 40 */}
        {this.__header()}
        <View style={coreStyle.__render}>
          {render_view}
        </View>
        {this.__toast()}
      </View>
    );
  }

  /**
   * 带顶部导航栏 栏目高 40
   * 带底部导航栏 栏目高 50
   * @param View render_view 待渲染的容器部分视图
   * @param View footer_view 待渲染的底部视图
   */
  __render_with_footer(render_view, footer_view) {
    return(
      <View style={coreStyle.__container}>
        {/* header 高 40 */}
        {this.__header()}
        <View style={{height:env.height - 60 -50 }}>
          {render_view}
        </View>
        {/* footer 高 50 */}
        <View style={coreStyle.__footer}>
          {footer_view}
        </View>
        {this.__toast()}
      </View>
    );
  }

}