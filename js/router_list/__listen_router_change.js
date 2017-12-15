//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++


/**
 * 监听路由变化
 */
import {
  NavigationActions,
}
from 'react-navigation';
// 配置项 ---安卓返回键直接退出的列表
const forbidden_list = [
  // 登录前，及其一级路由
  "LoginBefore",
  "LoginPre",
  // 登录后，及其一级路由
  "LoginAfter",
  "HomeView",
];





export default class __listen_router_change {
  /**
   * 开始监听变化
   * @param StackNavigator IndexRouter 全局路由入口配置
   */
  static run(IndexRouter) {
    // 监听路由变化
    const defaultGetStateForAction = IndexRouter.router.getStateForAction; // 获取将被渲染出来的视图相关信息
    IndexRouter.router.getStateForAction = (action, state) => {
      // 更新视图前 --- 安卓 --- 返回键相关
      if(undefined !== state && env.is_ios === false && action.type === NavigationActions.BACK) {
        let now_router_name = this.get_router_name(state); // 当前路由名

        for(let i in forbidden_list) {
          if(forbidden_list[i] === now_router_name) {
            return null; // 直接退出
          }
        }
      }
      return defaultGetStateForAction(action, state); // return null 可以退出APP
    };
  }
  /**
   * react-navigation监听路获取路由名变化
   * @param json state  路由状态
   * @return string  当前路由名
   */
  static get_router_name(router_info) {
    if(undefined !== router_info.index) {
      return this.get_router_name(
        router_info.routes[router_info.index]
      );
    } else {
      return router_info.routeName;
    }
  }
}