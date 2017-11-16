/**
* 视图页：
*   扫描识别：二维码、条形码
*/
import {
  Text,
  View,
} from 'react-native';
import React, { Component } from 'react';

import { QRScannerView } from 'ac-qrcode';
import Button from 'react-native-button'; // 底部按钮

import toast from '../../tool/toast';

import cssStyle from './cssStyle';




export default class qrCodeModule extends Component {


  // 扫描结果
  barcodeReceived(e) {
    let code = e.data;
    console.log(e);
    // 处理逻辑.....
    if( 'QR_CODE' === e.type ){
      toast.run('二维码扫描成功');
      // cod...
    }
  }




  // 底部栏，名称设定
  static navigationOptions = {
    tabBarVisible: false, // 隐藏底部导航栏
    header:null,
  };   

  render() {
    return (
      <QRScannerView
        onScanResultReceived={this.barcodeReceived.bind(this)}
        renderTopBarView={() => this._renderTitleBar()}
        renderBottomMenuView={() => this._renderMenu()}
      />
    )
  }

  _renderTitleBar(){
    return(
      <Text style={cssStyle.set_title}>
        扫描二维码 识别设备
      </Text>
    );
  }

  _renderMenu() {
    return (
      <Button>
        <Text style={cssStyle.btn}>
          点此返回
        </Text>
      </Button>
    );
  }
}