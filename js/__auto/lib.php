<?php
class Tool{


  // 解析路由
  public function __construct($router){
    $router = strtolower($router);
    $this->router = $router;
    $this->router_arr = explode('/', $router);
    $this->router_count = count($this->router_arr);
    $this->root_path = realpath(__DIR__.'/../');
  }

  // 生成对应目录下，多级目录
  public function create_dir($dir_name){

    $this->layer_add = '';
    $this->layer_core_style = './';

    
    $tmp_path = $this->root_path. '/' .$dir_name;
    // 生成目录
    if( $this->router_count>1 ){
      for($i=0; $i< $this->router_count-1 ;$i++){
        // 增加层级
        $this->layer_add .= '../';
        // 创建目录
        $tmp_path .= '/'.$this->router_arr[$i];
        if(  !is_dir($tmp_path)  ){
          mkdir($tmp_path);
        }
      }
      $this->layer_core_style = $this->layer_add;
      $file_path = $tmp_path.'/'.$this->router_arr[$this->router_count-1] . '.js';
    }else{
      $file_path = $tmp_path.'/'.$this->router_arr[0] . '.js';
    }
    return $file_path; // 生成文件的路径
  }

  // 生成类名 --- OK
  public function get_clas_name(){
    $name = '';
    for($i=0; $i< $this->router_count ;$i++){
      $name_chars = str_split($this->router_arr[$i]);
      $name_chars[0] = strtoupper($name_chars[0]); // 每个首字母大写
      $name .= implode('', $name_chars);
    }
    return $name;
  }

  // 依据模板生成文件
  public function create_file($file_name, $tpl){
    if( !file_exists($file_name) ){
      $fp = fopen($file_name, 'a++');
      fwrite($fp, $tpl);
      fclose($fp);
    }else{
      echo 'Exists: '.$file_name;
    }
  }

}