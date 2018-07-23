/**
* 工具类，导入入口
*/


import storage from './storage';
global.storage = storage;


import log from './log';
global.log = log;

import helper from './helper';
global.helper = helper;


// 基于前两者的
import http from './http';
global.http = http;