//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++


export default class helper {
  /*
   * 生成随机字符串
   * @param int len  获取字符串的长度
   */
  static rand_str(len = 16) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let maxPos = chars.length;
    let token = '';　　
    for(i = 0; i < len; i++) {
      token += chars.charAt(Math.floor(Math.random() * (maxPos + 1)));　　
    }　　
    return token;
  }
  /**
   * 将单位分的整型，转换为元的字符串格式
   * @param int money 待格式化的数
   * @return string 
   */
  static format_money(money) {
    let rel_money = parseInt(money);
    if(isNaN(rel_money)) {
      rel_money = 0;
    }
    let str_rmb = Math.floor(rel_money / 100);
    let str_dot = rel_money % 100;
    // 小于10自动补零
    if(str_dot < 10) {
      str_dot = "0" + str_dot + "";
    }
    return str_rmb + '.' + str_dot;
  }
  /**
   * 获取格式化后的时间
   *    如： format_time("Y-m-d") 输出 2017-12-8
   * @param string str 待格式化的时间
   * @param int timestamp 时间戳， 0为不处理
   * @return string 
   */
  static format_time(str, timestamp = 0) {
    const add_zero = (num) => {
      if(num < 9) {
        return "0" + num;
      } else {
        return "" + num + "";
      }
    }
    timestamp = parseInt(timestamp * 1000);
    let date = timestamp === 0 ? 　new Date() : new Date(timestamp);
    let Y = date.getFullYear(),
      m = add_zero(date.getMonth() + 1),
      d = add_zero(date.getDate()),
      h = add_zero(date.getHours()),
      i = add_zero(date.getMinutes()),
      s = add_zero(date.getSeconds());
    str = str.replace("Y", Y);
    str = str.replace("m", m);
    str = str.replace("d", d);
    str = str.replace("h", h);
    str = str.replace("i", i);
    str = str.replace("s", s);
    return str;
  }
}