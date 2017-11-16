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
     
      // 主渲染输出， --- 要重写
      render(){
        return(
          <ScrollView style={coreStyle.__container}>
            <View>测试</View>
          </ScrollView>
        );
      }
    }