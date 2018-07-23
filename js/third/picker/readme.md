### 视图页

调起相机、剪裁图片、上传图片

##### 示例使用

    import '../third/picker';
    picker.pic_edit_url = http.url('v1/post/set/headpic') + '?token=' + token; // 修改对应图片的接口地址
    picker.open_one_picker(); // 剪裁图片并上传