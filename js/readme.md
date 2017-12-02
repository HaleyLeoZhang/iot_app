### 目录结构
> 每个目录具体的功能及其用法，请看对应的类文件或者readme.md文件

    ├─core_logic  // 逻辑目录 --- 负责书写对应的screen视图的逻辑
    │  └─test       // 测试目录 
    ├─core_screen // 视图目录 --- 负责书写对应的screen视图结构的书写，并引入写好的 logic 与 style
    │  └─test       // 测试目录 
    ├─core_style  // 样式目录 --- 负责书写对应的screen的视图的样式
    │  └─test       // 测试目录 
    ├─img         // 图片目录 --- 存放一些本地预先加载的图片
    ├─ini         // 配置目录 --- 填写配置信息
    ├─router_list // 路由目录 --- 负责书写screen视图跳转的规则
    ├─third       // 插件目录 --- 负责第三方组件的功能集成
    │  ├─picker     // 图片单张或者批量上传，并且可以完成截图功能
    │  ├─qrCode     // 可完成对二维码的扫描、解析
    │  ├─wechat     // 微信登录、分享、支付功能集成
    │  └─wifi       // 配置 wifi、获取当前wifi的SSID、获取wifi列表...
    ├─tools       // 工具目录 --- 比其他目录先加载
    │  ├─helper     // 通用函数库
    │  ├─http       // 网络相关封装
    │  ├─log        // 调试相关 --- 打包时，请在 配置目录 关闭日志输出
    │  ├─storage    // 异步存储
    │  └─toast      // 消息提示层
    └─__auto      // 自动化生成对应 core_logic、core_screen、core_style 的脚本

> android/app/src/main/AndroidManifest.xml 请添加如下权限

    <manifest xmlns:android="http://schemas.android.com/apk/res/android">
    
        <!-- React Native Camera -->
        <uses-permission android:name="android.permission.RECORD_AUDIO"/>
        <uses-permission android:name="android.permission.RECORD_VIDEO"/>
        <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        <!-- Esptouch  -->
        <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
        <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />
        <uses-permission android:name="android.permission.CHANGE_WIFI_MULTICAST_STATE" />
    
        <application>

          <!-- Wechat 登录、支付 -->
          <activity android:name=".wxapi.WXEntryActivity" android:label="@string/app_name" android:exported="true"/>
          <activity android:name=".wxapi.WXPayEntryActivity" android:label="@string/app_name" android:exported="true"/>
    
        </application>
    
    </manifest>
