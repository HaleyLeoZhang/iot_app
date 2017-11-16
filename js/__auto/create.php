<?php
// 自动生成一个screen所需文件及其对应目录
// $argv[1] 是命令行第三个参数
 
if( !isset($argv[1]) ){
  echo '输入示例:  php create.php home/list';
}



require __DIR__.'/lib.php';

$tool = new \Tool($argv[1]);

$p1 = $tool->create_dir('core_logic');
$p2 = $tool->create_dir('core_style');
$p3 = $tool->create_dir('core_screen');

$class_name = $tool->get_clas_name();

require __DIR__.'/tpl.php'; // 模板文件

$tool->create_file($p1, $p1_tpl);
$tool->create_file($p2, $p2_tpl);
$tool->create_file($p3, $p3_tpl);