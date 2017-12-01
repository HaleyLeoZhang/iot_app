/**
* 逻辑类
*/

export default class coreLogic{
  constructor(pointer){
    this.p = pointer ; // 存储对应视图组件的 this指针
  }
  //++++++++++++++++++++++++++++++++++++++++++++++++++
  //                     本地逻辑
  //++++++++++++++++++++++++++++++++++++++++++++++++++

  /***
   * Step 1  ---获取webview内部高度
   */
  get_webview_h_height(){
    const invoke_js = `
      (function() {
        var height = null;
        function changeHeight() {
          if (document.body.scrollHeight != height) {
            height = document.body.scrollHeight;
            if (window.postMessage) {
              window.postMessage(JSON.stringify({
                type: 'set_webview_height',
                height: height,
              }))
            }
          }
        }
        setInterval(changeHeight, 500);
      }())
    `;
    // log('invoke_js');
    // log(invoke_js);
    return invoke_js;
  }

  // Step 2  ---接收webview_h发送过来的交互消息
  msg_from_webview_h(event) {
    let it = this.p; // 视图指针
    log('msg_from_webview_h -> event');
    log(event);
    let get_data = JSON.parse(event.nativeEvent.data);
    if (get_data.type === 'set_webview_height' && get_data.height > 0) {
      it.setState({
        webview_h: get_data.height
      })
    }
  }
  
  //++++++++++++++++++++++++++++++++++++++++++++++++++
  //                    涉及网络
  //++++++++++++++++++++++++++++++++++++++++++++++++++

}