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
    │  └─wechat     // 微信登录、分享、支付功能集成
    ├─tools       // 工具目录 --- 比其他目录先加载
    │  ├─helper     // 通用函数库
    │  ├─http     // 网络相关封装
    │  ├─log      // 调试相关 --- 打包时，请在 配置目录 关闭日志输出
    │  ├─storage  // 异步存储
    │  └─toast    // 弹出层
    └─__auto      // 自动化生成对应 core_logic、core_screen、core_style 的脚本

