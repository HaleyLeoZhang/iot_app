/**
* 这部分是为了初始化全局存取对象，方便操作
*   用作本地缓存 或 存储永久数据
* @Link  https://github.com/sunnylqm/react-native-storage/blob/master/README-CHN.md
*/
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';


const storage = new Storage({
  // maximum capacity, default 1000 
  size: 1000,

  // Use AsyncStorage for RN, or window.localStorage for web.
  // If not set, data would be lost after reload.
  storageBackend: AsyncStorage,
  
  // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  // defaultExpires: 1000 * 3600 * 24,
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,
  
  // if data was not found in storage or expired,
  // the corresponding sync method will be invoked and return 
  // the latest data.
  sync : {
    // we'll talk about the details later.
  }
});

export default storage;
