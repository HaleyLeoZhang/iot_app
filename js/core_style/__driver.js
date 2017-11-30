//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++

const header_height = 40; // 头部导航栏的高

// 生成样式 --- 驱动
import { StyleSheet } from 'react-native';
//++++++++++++++++++++++++++++++++++++++++++++++
//            全局样式配置
//++++++++++++++++++++++++++++++++++++++++++++++
let __conf = {
  // 容器部分
  __container: {
    flex:1,
    backgroundColor:'#fff', // 主要是控制当前页面的背景色
  },
  
  // 头部
  __header:{
    height: header_height,
    backgroundColor: '#8AB7FC',
  },
  __header_arrow:{
    height: header_height,
    width: gScreen.width * 0.2,
  },
  __header_arrow_img:{
    marginLeft: 20,
    marginTop: (header_height - 35 * gScreen.onePix)/2, // 计算垂直居中
    height: 35 * gScreen.onePix,
    width: 35 * gScreen.onePix,
  },
  __header_title:{
    height: header_height,
    width: gScreen.width * 0.6,
  },
  __header_title_text:{
    height: header_height,
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
    lineHeight: (header_height - 24 * gScreen.onePix)/2 + 14, // 计算垂直居中
  },


  // 子元素里要横向布局的时候使用

  // └──── 外层大盒子
  __flex_outer:{
    width: env.width, 
    flexDirection:'row',
  },
  //        └────────── 如果需要自动换行
  __flex_mulit:{
    flexWrap:'wrap',
  },
  //        └────────── 内层子元素
  __flex_element:{
    flexDirection: 'column', 
  },

  //----------------------------模块----------------------------------
  
  // 灰色间隙
  __separate: {
    height: 10,
    width: env.width,
    backgroundColor: '#f8f8f8',
  },
  // 加载层
  __loading:{
    width: env.width,
  },
  // └──── 动图
  __loading_gif: {
    width: 45,
    height: 15,
    marginTop:20,
    marginBottom:20,
    alignSelf: 'center',
  },

};


//++++++++++++++++++++++++++++++++++++++++++++++
//            合并样式配置
//++++++++++++++++++++++++++++++++++++++++++++++
const merge_style = ( __coreStyle )=>{
  for (let i in __conf) {
    eval("__coreStyle." + i + " = __conf[i];"); // __coreStyle.item_name = item_value ;
  }
  return StyleSheet.create(__coreStyle);
}

export default  merge_style;