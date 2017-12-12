//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++


export default class helper{
  /*
  * 生成随机字符串
  * @param int len  获取字符串的长度
  */
  static rand_str(len = 16) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  
    let maxPos = chars.length;  
    let token = '';
　　for (i = 0; i < len; i++) {
      token += chars.charAt(Math.floor(Math.random() * (maxPos+1)));  
　　}  
　　return token;  
  }
  /**
  * 将单位分的整型，转换为元的字符串格式
  * @param int money 待格式化的数
  * @return string 
  */
  static format_money(money){
    let rel_money = parseInt(money);
    if( isNaN(rel_money)  ){
      rel_money = 0;
    }
    let str_rmb = Math.floor(rel_money/100);
    let str_dot = rel_money % 100;
    // 小于10自动补零
    if( str_dot<10 ) {
      str_dot = "0"+str_dot +"";
    }
    return str_rmb + '.' + str_dot;
  }
  /**
  * 获取格式化后的时间
  *    如： format_time("Y-m-d") 输出 2017-12-8
  * @param string str 待格式化的时间
  * @return string 
  */
  static format_time(str){
    let date = new Date();
    let Y = date.getFullYear(),
        m = date.getMonth(),
        d = date.getDate(),
        h = date.getHours(),
        i = date.getMinutes(),
        s = date.getSeconds();
    str = str.replace("Y", Y);
    str = str.replace("m", m);
    str = str.replace("d", d);
    str = str.replace("h", h);
    str = str.replace("i", i);
    str = str.replace("s", s);
    return str;
  }
}