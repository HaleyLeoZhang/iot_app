import {AppRegistry} from 'react-native';
import {
  StackNavigator, 
  NavigationActions,
}
from 'react-navigation';
// 只用在路由入口引入  // 路由组件: https://reactnavigation.org/docs/intro/
import __listen_router_change from './__listen_router_change'; // 监听路由变化
//+++++++++++++++++++++++++++++++++++++++++++++
//              引入组件文件
//+++++++++++++++++++++++++++++++++++++++++++++
import LoginBeforeScreen from './LoginBeforeScreen';  // 登录前
import LoginAfterScreen from './LoginAfterScreen';    // 登录后

//+++++++++++++++++++++++++++++++++++++++++++++
//                书写路由  
//+++++++++++++++++++++++++++++++++++++++++++++

// TODO 我们可以尝试 判断登录状态， 更新视图到我们想要的那个
    // 如果成功，用户多次按返回键就不会跳转到APP启动界面了，这层的导航也就可以取消掉了

const IndexRouter = StackNavigator({
  // 配置规则，   前缀名:{screen: 前缀名+Screen } 有点像框架中 Controller 这种写法
  LoginBefore : { screen: LoginBeforeScreen }, // 进入首页前的登录，注册等准备页面
  LoginAfter  : { screen: LoginAfterScreen },  // 进入首页后的页面，需要显示底部导航栏
}, {
  headerMode:'none', // 隐藏头
  initialRouteName: 'LoginBefore', // 设置默认的页面组件
});

__listen_router_change.run(IndexRouter); // 监听全局路由变化，注：登录前后，不让用户看到去登录界面的按钮



// -------------------------------------------//
// ------------------注册 APP-----------------//
// -------------------------------------------//
AppRegistry.registerComponent('hlzblog_iot', () => IndexRouter); // 大小写与IOS中名字保持一致
