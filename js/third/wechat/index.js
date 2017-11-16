/**
* 配置 react-native-wechat 的集成功能
*/
import * as WeChat from 'react-native-wechat'; // 教程 http://www.cnblogs.com/tangyuanby2/p/5589836.html
import toast from '../../tool/toast';

// 需初始化配置 AppId
WeChat.registerApp(env.wechat_appid);

// 模块内部     -    工具类
class toolsForWechat {
  /**
  * 判断是否安装，并依据功能回调
  * @param function func 回调函数 
  */
  static check_install( func ){
    WeChat.isWXAppInstalled()
      .then((isInstalled) => {
        if (isInstalled) {
          func();
        } else {
          toast.run('没有安装微信软件，请您安装微信之后再试');
        }
      });
  }

  /**
  * 生成随机字符串
  * @param bool flag 是否是任意长度
  * @param int  min 任意长度最小值
  * @param int  max 任意长度最大值
  * @return string 
  */
  static random_str(flag, min, max) {
    let str = "";
    let index = "";
    let range = min;
    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b',
      'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
      'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
      'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    //min,max范围内随机的一个数
    if (flag) {
      range = Math.floor(Math.random() * (max - min + 1) + min);
    }
    for (let i = 0; i < range; i++) {
      index = Math.round(Math.random() * (arr.length - 1));
      str += arr[index];
    }
    return str;
  }

}

// 核心
class wechatModule {
  /**
  * 微信分享 - 文本
  * @param int    option 分享到   1. 好友   2. 朋友圈
  * @param string msg  具体内容
  */
  shart_text( option, msg='云天河Blog & 少年锦时 - 物联网毕业设计' ){
    toolsForWechat.check_install( ()=>{
      // 统一配置
      let __conf__ = {
        type: 'text',
        description: msg
      };
      switch(option){
        case 1:
          WeChat.shareToSession(__conf__)
            .catch((error) => { toast.run( error.message ); });
          break;
        // 朋友圈
        case 2:
          WeChat.shareToTimeline(__conf__)
            .catch((error) => { toast.run( error.message ); });
          break;
      }
    });
  }

  /**
  * 微信好友分享 - 链接
  * @param int    option 分享到   1. 好友   2. 朋友圈
  * @param string title         分享标题
  * @param string description   描述
  * @param string thumbImage    封面图
  * @param object webpageUrl    跳转到的页面地址
  */
  share_link(
    option,
    title = '云天河Blog & 少年锦时 - 物联网毕业设计', 
    description = '云天河Blog & 少年锦时',
    thumbImage  = 'http://oqx3r2n98.bkt.clouddn.com/17-9-20/91709393.jpg',
    webpageUrl = 'http://www.hlzblog.top/'){
    // 开始
    toolsForWechat.check_install( ()=>{
      // 统一配置
      let __conf__ = {
        'title': title,
        'description': description,
        'thumbImage': thumbImage,
        'type': 'news',
        'webpageUrl': webpageUrl
      };
      switch(option){
        case 1:
          WeChat.shareToSession(__conf__)
            .catch((error) => { toast.run( error.message ); });
          break;
        // 朋友圈
        case 2:
          WeChat.shareToTimeline(__conf__)
            .catch((error) => { toast.run( error.message ); });
          break;
      }
    });
    // 结束
  }

  /**
  * 微信登录
  * @param function func  闭包登录成功后的逻辑函数
  */
  login(func){
    // 需配置：后端处理微信登录接口
    let __conf__ = {
      url : http.url('v1/wechat/login?code=') ,
      callback: func,
      state : toolsForWechat.random_str(true, 4, 6), // 随机生成的码
    };

    //判断微信是否安装
    toolsForWechat.check_install( ()=>{
      // WeChat.sendAuthRequest("snsapi_userinfo", __conf__.state) // TODO
      WeChat.sendAuthRequest("snsapi_userinfo")
        .then(res => {
          switch( parseInt(res.errCode) ){
            // 用户换取access_token的code，仅在ErrCode为0时有效
            case 0:
              // 验证此次操作是用户自己进行的，否则结束操作
              // if (res.state != __conf__.state) {
              //   toast.run('这里state不正确');
              //   return;
              // }
              // 请求后端，登录操作
              http.get(__conf__.url + res.code, (d) =>{
                __conf__.callback(d); // 运行回调函数
              });
              break;
            default:
              // code...;
          }

        })
        .catch((error) => { toast.run( error.message ); });
    });
  }

  /**
  * 微信支付
  * @param object pre_order  后端传来的数据
  * @param function func  成功后回调操作，无传入参数
  */
  pay( pre_order, func=false ){
    toolsForWechat.check_install(() =>{
      // 这里面参数必须全是字符串，不能有整型
      let __conf__ = {
        appId:    pre_order.appid, // 应用id
        partnerId:pre_order.partnerid, // 商家向财付通申请的商家id
        prepayId: pre_order.prepayid, // 预支付订单
        nonceStr: pre_order.noncestr, // 随机串，防重发
        timeStamp:pre_order.timestamp, // 时间戳，注意：一定得是字符串形式！！！！！！！！
        package:  pre_order.package, // 商家根据财付通文档填写的数据和签名
        sign:     pre_order.sign, // 这堆除签名外的数据，进行签名，生成的它
      };
      console.log('__conf__');
      console.log(__conf__);
      console.log('微信支付测试开始');

      WeChat.pay(__conf__)
        .then(requestJson =>{
          toast.run('微信支付成功');
          if( func!==false ){
            func(); // 执行回调
          }
        }).catch (err =>{
          if( -2 === parseInt(err.code)  ){
            toast.run( '已取消下单' );
          }
        });
    });
  }
}

export wechat = new wechatModule();