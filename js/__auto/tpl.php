<?php


// core_logic模板
$p1_tpl = <<<eof
/**
* 逻辑类
*/
import Base from '{$tool->layer_add}../core_logic/Base'; // ---基类
export default class coreLogic extends Base{
  constructor(p){
    super(p); // 已存储对应视图组件的 this指针 到 this.p
  }
  //++++++++++++++++++++++++++++++++++++++++++++++++++
  //                    本地逻辑
  //++++++++++++++++++++++++++++++++++++++++++++++++++
  
  //++++++++++++++++++++++++++++++++++++++++++++++++++
  //                    涉及网络
  //++++++++++++++++++++++++++++++++++++++++++++++++++

}
eof;





// core_style模板
$p2_tpl = <<<eof
import merge_style from '{$tool->layer_core_style}__driver'; // 驱动程序
// 书写样式
let __coreStyle = {
};
// 合并样式
const coreStyle =  merge_style(__coreStyle);
export default coreStyle ;
eof;




// screen模板
$p3_tpl = <<<eof
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
import coreStyle from '{$tool->layer_add}../core_style/{$tool->router}'; // 样式
import coreLogic from '{$tool->layer_add}../core_logic/{$tool->router}'; // 逻辑
import Base from '{$tool->layer_add}../core_screen/Base'; // 基类

export default class {$class_name}Screen extends Base{
  constructor(p){
    super(p);
    this.state = {
    };
    this.logic = new coreLogic(this);
  }


  render(){
    this.nav_name = '这里是导航栏名字'; // 设置导航栏名称
    let it = this;
    // 带顶部导航栏的输出方式
    return this.__render(
      <View>
      </View>
    );
  }
}
eof;

