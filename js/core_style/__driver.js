//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++

const distance_android = 25; // 注：苹果的APP是全屏的，安卓的大概会少25的高度

const header_h = 40; // 头部导航栏的高
const footer_h = 50; // 头部导航栏的高

const __render_body_h = env.height - header_h;
const __render_with_footer_body_h =  env.height - header_h - footer_h - distance_android;

// 生成样式 --- 驱动
import { StyleSheet } from 'react-native';
//++++++++++++++++++++++++++++++++++++++++++++++
//            全局样式配置
//++++++++++++++++++++++++++++++++++++++++++++++
let __conf = {
  // 容器部分
  __container: {
    flex: 1,
    backgroundColor: '#fff', // 主要是控制当前页面的背景色
  },

  // 头部
  __header: {
    marginTop: env.is_ios?distance_android:0,
    height: header_h,
    backgroundColor: '#8AB7FC',
  },
  __header_arrow: {
    height: header_h,
    width: env.width * 0.2,
    paddingTop: (header_h - 35 * env.pix) / 2, // 计算垂直居中
  },
  __header_arrow_img: {
    marginLeft: env.width * 0.05,
    height: 35 * env.pix,
    width: 35 * env.pix,
  },
  __header_title: {
    width: env.width * 0.6,
    paddingTop: (header_h - 20) / 2, // 计算垂直居中
  },
  __header_title_text: {
    height: header_h,
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  // 底部
  __footer: {
    width: env.width,
    height: footer_h,
    backgroundColor: "#2b2b2b",
  },

  // 只有 `头部 + 容器` 的渲染
  __render:{
    height: __render_body_h,
  },
  // `头部 + 容器 + 底部` 的渲染
  __render_with_footer:{
    height: __render_with_footer_body_h,
  },


  // 子元素里要横向布局的时候使用

  // └──── 外层大盒子
  __flex_outer: {
    width: env.width,
    flexDirection: 'row',
  },
  //        └────────── 如果需要自动换行
  __flex_mulit: {
    flexWrap: 'wrap',
  },
  //        └────────── 内层子元素
  __flex_element: {
    flexDirection: 'column',
  },

  //----------------------------模块----------------------------------

  // 灰色间隙
  __separate: {
    width: env.width,
    backgroundColor: '#f8f8f8',
  },
  // 加载层
  __loading: {
    width: env.width,
  },
  // └──── 动图
  __loading_gif: {
    width: 45 * env.pix,
    height: 15 * env.pix,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },

};


//++++++++++++++++++++++++++++++++++++++++++++++
//            合并样式配置
//++++++++++++++++++++++++++++++++++++++++++++++
const merge_style = (__coreStyle) => {
  // for(let i in __conf) {
  //   // eval("__coreStyle." + i + " = __conf[i];"); // __coreStyle.item_name = item_value ;
  //   __coreStyle[i] = __conf[i];
  // }
  Object.assign(__coreStyle, __conf);
  return StyleSheet.create(__coreStyle);
}

export default merge_style;