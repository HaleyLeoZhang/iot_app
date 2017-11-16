/**
 * 平台判断
 */
import { Platform } from 'react-native';
if (Platform.OS === 'ios') {
  global.__IOS__ = true;  // 苹果系统
} else {
  global.__IOS__ = false; // 安卓系统
}
import './js'; // 程序入口