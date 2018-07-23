 ## 示例用法

    // 官方组件
    import {
      ScrollView, 
    }from 'react-native';
    // 第三方组件
    
    // 基础引入
    import coreStyle from '../..../core_style/xxxScreen';      // ---样式
    import coreLogic from '../..../core_logic/xxxScreen';     // ----逻辑
    import Base from '../..../core_screen/Base'; // ---基类
    
    export default class xxxScreen extends Base{
      constructor(p){
        super(p);
        this.logic = new coreLogic(this);
      }
      
    
      // 渲染 --- 带导航栏的用这个
      __render(){
        this.nav_name('这是导航栏名字');
        return(<View></View>);
      }
    
      // 渲染 --- 不带导航栏的用这个
      render(){
        return(
          <View style={coreStyle.__container}>
            {this.__toast()}
          </View>
        );
      }
    }