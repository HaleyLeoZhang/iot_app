<?php


// core_logic模板
$p1_tpl = <<<eof
/**
* 逻辑类
*/
export default class coreLogic {
  constructor(pointer){
    this.p = pointer ; // 存储对应视图组件的 this指针
  }
  //++++++++++++++++++++++++++++++++++++++++++++++++++
  //                     本地逻辑
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
}from 'react-native';
// 第三方组件

// 基础引入
import coreStyle from '{$tool->layer_add}../core_style/{$tool->router}';     // ---样式
import coreLogic from '{$tool->layer_add}../core_logic/{$tool->router}';     // ---逻辑
import Base from '{$tool->layer_add}../core_screen/Base'; // ---基类

export default class {$class_name}Screen extends Base{
  constructor(p){
    super(p);
    this.logic = new coreLogic(this);
  }
  

  // 主渲染输出
  render(){
    return(
      <ScrollView style={coreStyle.__container}>
      </ScrollView>
    );
  }
}
eof;

