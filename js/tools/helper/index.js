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
}