//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++

/**
* 逻辑类 --- 基类
*/
export default class Base {
  constructor(pointer){
    this.p = pointer ; // 存储对应视图组件的 this指针
  }
  //++++++++++++++++++++++++++++++++++++++++++++++++++
  //                     本地逻辑
  //++++++++++++++++++++++++++++++++++++++++++++++++++

  /**
  * 弹出消息
  * @param string msg  消息内容
  */
  __toast( msg ){
    // 假设人的正常阅读速度为 3个字每秒 计算时间 --- 考虑纯汉字
    let time = Math.ceil(msg.length / 3);
    this.p.refs.toast.show(msg, time * 1000);
  }

  /**
  * 点击顶部导航条返回按钮的回调函数
  * @param callback func 回调函数
  */
  __header_callback(func=false){
    if( false === func ){
      let { goBack } = this.p.props.navigation;
      log('点击了返回');
      log('this.p.props');
      log(this.p.props);
      goBack();
    }else{
      func();
    }
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++++
  //                    涉及网络
  //++++++++++++++++++++++++++++++++++++++++++++++++++

}