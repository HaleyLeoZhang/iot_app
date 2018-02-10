// 官方组件
import React from 'react';
import {
  View,
  ScrollView,
  WebView,
  Text,
} from 'react-native';
// 第三方组件

// 基础引入
import coreStyle from '../../core_style/test/webview_rn_bridge'; // ---样式
import coreLogic from '../../core_logic/test/webview_rn_bridge'; // ---逻辑
import Base from '../../core_screen/Base'; // ---基类

export default class TestWebview_rn_bridgeScreen extends Base {
  constructor(p) {
    super(p);
    this.state = {
      webview_h: 0 // 初始高度为0
    };
    this.logic = new coreLogic(this);
  }

  //++++++++++++++++++++++++++++++++++++++++++
  // 本地实现 webview
  //++++++++++++++++++++++++++++++++++++++++++

  /**
   * 详情页视图 --- webview资源
   */
  __detail_webview_html() {
    let pics = this.state.data.list3;
    let html = '<style>html,body{width:100%;margin: 0;}img{width:100%; display:block; margin:0;padding:0;}</style>';
    for(let i in pics) {
      html += `<img src="` + pics[i] + `"/>`;
    }
    log('html');
    log(html);
    return html;
  }

  /**
   * 详情页视图 --- webview
   */
  __detail_webview() {
    let it = this;
    // source_obj
    let source_obj = {
      html: it.__detail_webview_html(),
    };
    // style
    let webView_style = { height: it.state.webview_h, width: gScreen.width }
    return(
      <WebView
        ref="hlz_blog_books"
        style={webView_style}
        scrollEnabled={false} 
        javaScriptEnabled={true}  
        injectedJavaScript={it.logic.get_webview_h_height()}
        onMessage={event => {it.logic.msg_from_webview_h(event)}}
        source={source_obj}
      ></WebView>
    );
  }


  //++++++++++++++++++++++++++++++++++++++++++
  // 直接引入网页资源
  //++++++++++++++++++++++++++++++++++++++++++

  // 测试页面
  layer_top() {
    let it = this;
    let source_obj = {};
    source_obj.uri = 'http://www.hlzblog.top/books/';
    return(
      <ScrollView style={coreStyle.layer_top}>

        <Text style={coreStyle.layer_top_text}>测试webview</Text>

        <WebView
          ref="hlz_blog_books"
          style={[coreStyle.webview, {height: it.state.webview_h} ]}
          scrollEnabled={false} 
          javaScriptEnabled={true}  
          injectedJavaScript={it.logic.get_webview_h_height()}
          onMessage={event => {it.logic.msg_from_webview_h(event)}}
          source={source_obj}
        ></WebView>

      </ScrollView>
    );
  }

  // 底部按钮
  layer_bottom() {
    return(
      <View style={coreStyle.layer_bottom}>
        <Text style={coreStyle.layer_bottom_text}>这里是底部导航栏</Text>
      </View>
    );
  }

  // 主渲染输出
  render() {
    return(
      <View style={coreStyle.container}>
        {this.__header()}
        {this.layer_top()}
        {this.layer_bottom()}
      </View>
    );
  }

}