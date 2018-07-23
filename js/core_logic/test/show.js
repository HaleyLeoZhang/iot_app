/**
* 逻辑类
*/
import Base from '../../core_logic/Base'; // ---基类
export default class coreLogic extends Base{
  constructor(p){
    super(p); // 已存储对应视图组件的 this指针 到 this.p
  }
  //++++++++++++++++++++++++++++++++++++++++++++++++++
  //                    本地逻辑
  //++++++++++++++++++++++++++++++++++++++++++++++++++
  
  //++++++++++++++++++++++++++++++++++++++++++++++++++
  //                    涉及网络
  //++++++++++++++++++++++++++++++++++++++++++++++++++

  get_list(){
    let it = this.p;
    let __conf = {
      url : http.router('user/info'),
      func: (d)=>{
        it.setState({
            "list": d.data,
        });
        // 这里是回调函数，d是Http请求后收到的参数

      },
      token: true,
    }; 
    http.request(__conf);
  }
}