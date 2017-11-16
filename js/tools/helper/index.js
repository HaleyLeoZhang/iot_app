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
}