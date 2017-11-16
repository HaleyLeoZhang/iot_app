import merge_style from '../__driver'; // 驱动程序

let bottom_h = 40;

// 书写样式
let __coreStyle = {
  // 容器部分
  container: {
    flex:1,
    backgroundColor:'#fff', // 主要是控制当前页面的背景色
  },
  // 测试滑动，上部
  layer_top: {
    height: env.height - bottom_h,
    backgroundColor: '#111111',
    width: env.width,
  },
  layer_top_text:{
    color:'#fff',
  },
  layer_bottom: {
    width: env.width,
    height: bottom_h,
    backgroundColor: 'silver',
  },
  layer_bottom_text:{
    color:'#2b2b2b',
  },
  // webview
  webview:{
    width: env.width,
  },
};
// 合并样式
const coreStyle =  merge_style(__coreStyle);
export default coreStyle ;