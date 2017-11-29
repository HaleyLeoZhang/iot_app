//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++

import toast from '../../tool/toast';

default class upload{

  static pic_edit_url = false;  // post 请求修改对应图片地址的接口
  /***
   * 示例
   * @api  http://test.com/api?token=xxxxx
   * @FormData
   *    url: 'http://xxxxxx'
   * @response  成功：
   *    {"code":200, "data":[], "detail":"success"}
   */


  /***
  * 上传图片
  * @param string pic_path  图片本地地址
  * @param string mine   MIME类型
  * @param string func   回调函数，默认带有图片的url
  */
  static upload_image(pic_path, mime, func=false){
    let formData = new FormData();
    const upload_api = 'https://sm.ms/api/upload'; // 目前使用第三方图床
    let file_name = helper.rand_str()+'.jpg';
    formData.append('smfile', {
      uri: pic_path,
      name: file_name,
      type: mime
    });
    // 表单信息
    fetch(upload_api,{
      method:'POST',  
      headers:{
        'Content-Type': 'multipart/form-data;charset=utf-8',
        'origin': 'https://sm.ms',
        'referer': 'https://sm.ms',
        'user-agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.221 Safari/537.36 SE 2.X MetaSr 1.0',
      },  
      body:formData,
    })  
    .then(response => {
      return response.json();
    })  
    .then(d=>{  
      if( d.code==="success" ){
        log('图片修改成功');
        // 请求修改 数据库中对应图片地址的接口，post方式请求
        this.edit_pic_url(d.data.url);
        if(false !== func){
          func(d.data.url);
        }
      }
      //
    }).catch (error => {
      log('图片上传出错', 3);
      log(error.message, 3);
    });
  }

  /***
  * 修改上传图片的地址
  * @param string set_url  上传后，图片的地址
  * @param string set_url  上传后，图片的地址
  */
  static edit_pic_url(set_url){
    // 请求修改对应链接
    if( this.pic_edit_url!==false ){
      let __conf = {
        url:  set_url,
        post: {
          "url": set_url,
        },
        func: (d)=>{
          if( parseInt(d.code) === 200 ){
            toast.run('图片上传成功', 0);
          }else{
            toast.run(b.detail);
          }
        },
      };
      http.request(__conf);
    }
  }
}