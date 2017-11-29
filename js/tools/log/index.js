//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++


/**
 * 日志形式输出
 * @param string|array|obj  info 日志
 * @param int  level 日志等级  1 Debug ２ Info  3 Warn  4 Error
 */
const log = (info, level=1) => {
  // 检查开关
  if (0 === env.log_switch) {
    return;
  }

  // 是否在日志等级内
  if (  level<1 || level >4 ) {
    console.warn('日志等级设置错误');
    return;
  }

  // 输出日志等级是否达到要求
  if (level < env.log_least_level) {
    return;
  }

  // 获取数据类型
  switch (typeof info){
    case "string": // 字符串
      switch(level){
        case 1:
          console.log(info);
          break;
        case 2:
          console.info(info);
          break;
        default:
          console.warn(info);
      }
      break;
    case "object": // 数组、Json对象...
      console.table(info);
      break;
    default:
      console.log(info);
  }
}

export default log;