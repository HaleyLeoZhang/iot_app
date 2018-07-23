//++++++++++++++++++++++++++++++++++++++++++++++++++
//  Author: 云天河Blog       http://www.hlzblog.top/
//++++++++++++++++++++++++++++++++++++++++++++++++++


/**
* 视图页：
*   调起相机、剪裁图片
*/
import React, { Component } from 'react';  // 导入默认组件，与非默认组件

import ImagePicker from 'react-native-image-crop-picker';
import upload from './upload';


export default class picker extends Component {
  static pic_edit_url = false;  // post 请求修改对应图片地址的接口


  /**
  * 调起相册：选一张图片，并截图上传到图床
  */
  open_one_picker(){
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true
    }).then(img => {
      // 上传图片 
      upload.pic_edit_url = this.pic_edit_url; // 修改图片的接口地址
      upload.upload_image(img.path, img.mime);
    });
  }


  /**
  * 调起相册：选一张图片，并回调
  * @param function func  回调函数
  */
  static upload_one_pic( func ){
    ImagePicker.openPicker({
      multiple: false,
      cropping: false
    }).then(img => {
      // 上传图片 
      this.upload_image(img.path, img.mime, func);
    });
  }



  // 调起相册：选多张图片
  open_mul_picker() {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images);
    });
  }
  // 调起相机：
  open_camera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }
  // 剪裁图片
  crop_pic() {
    ImagePicker.openCropper({
      path: 'my-file-path.jpg',
      width: 300,
      height: 400
    }).then(image => {
      console.log(image);
    });
  }
}