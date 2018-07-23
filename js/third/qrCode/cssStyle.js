import {
  StyleSheet
} from 'react-native';
// 初始化样式
const cssStyle = StyleSheet.create({
  // 按钮
  btn:{
    width: gScreen.width - 20,
    height: 40,
    lineHeight: 30,
    textAlign: 'center',
    fontSize: 18,
    margin: (4, 10 ,4, 10),
    color: 'white',
    backgroundColor: '#27A9D4',
  },
  // 头部标题
  set_title:{
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 12,
    paddingTop: 30,
    textAlignVertical:'center', 
  },
});

export cssStyle;