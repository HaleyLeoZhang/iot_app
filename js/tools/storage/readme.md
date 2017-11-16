
> 示例中会用到的变量，这个表示 key 的名字  
> 注意，尽量用驼峰法命名 ---中间不能有下划线  

    let token_name = 'testToken';

### 异步存入数据

    storage.save({
      key: token_name, // 注意:请不要在key中使用_下划线符号!
      data: test_data, // JSON数据
      expires: 1000 * 60 // 缓存
    });

### 异步读取数据

    static asyncData(){
      //load 读取
      storage.load({
        key: token_name
      }).then((ret) => {
        // 如果找到数据，则在then方法中返回
        console.log('token_name的值为:');
        console.log(ret);
      }).catch(err => {
        // 如果没有找到数据且没有sync方法，
        // 或者有其他异常，则在catch中返回
        console.warn(err.message);
      })
    }

### 删除单个数据

    storage.remove({
        key: 'token'
    });