## 示例用法

    import merge_style from './__driver'; // 驱动程序
    /*** 
    排版原则：
        内部有元素：如，红包： --- 防止自动伸缩导致一屏显示的红包数太少
            高度固定 ---> 内部元素，百分比布局   外部盒子给予横向弹性
    
        无内部元素：如，图片： --- 防止图片因拉伸导致失真
            宽度固定 ---> 高度依据，图片高宽比，来计算
    
        一屏式显示：如，登录页 --- 为适应所有手机尺寸设计
            看设计图 ---> 所有元素都依据其图中所占百分比计算
    
        .... 云天河暂时想不起其他的情况了，有空再更
    */
    let __coreStyle = {
        img_box:{
            width:50,
            height:80,
        },
        img_box_img:{
            width:50 * env.pix,
            height:50* env.pix,
        },
        img_box_img_info:{
            width:50,
            height:30,
        },
    };
    export default coreStyle = merge_style(__coreStyle);