'use strict';

import React, { Component } from 'react';
import MessageDialog from '../Viomi-plugin-sdk/Components/Dialog/MessageDialog'
import {
    AppRegistry,
    StyleSheet,
    FlatList,
    Text,
    Image,
    View,
    PixelRatio,
    StatusBar,
    TouchableOpacity,
    Platform,
    DeviceEventEmitter,
    Dimensions,
    toString,
    ImageBackground,
    TouchableHighlight,
    NativeModules
} from 'react-native';

import CommonAdapter from '../Viomi-plugin-sdk/Adapter/CommonAdapter';
import DataAdapter from '../Viomi-plugin-sdk/Adapter/DataAdapter';

import DataManager from '../Viomi-plugin-sdk/DataManager/Spec';
import ProfileDataManager from '../Viomi-plugin-sdk/DataManager/Profile';

import { NavigationBar } from '../Viomi-plugin-sdk/Components/NavigationBar';
import LegalsUtil from '../Viomi-plugin-sdk/Util/LegalsUtil';

import YMDataAnalyticsManager from '../Viomi-plugin-sdk/Adapter/viomi/YMDataAnalyticsManager';
import ErrorPromptBar from '../Viomi-plugin-sdk/CommonPages/ErrorPage/ErrorPromptBar';
import I18nUnit from '../Viomi-plugin-sdk/Util/I18n/index';
import zhErrorJson from '../Resources/Lang/zhErrorJson.json';
import enErrorJson from '../Resources/Lang/enErrorJson.json';

import Config from './Config';

import FeatureView from './View/SettingPage/FeatureView';
import ControlView from './View/MainPage/ControlView';
import InfoView from './View/MainPage/InfoView';

import { inject, observer } from "mobx-react";
import Stores from "./Store";

//添加故障翻译文本
I18nUnit.addErrorDatas({
    zh: zhErrorJson,
    en: enErrorJson,
});

class MainPage extends Component {
    static navigationOptions = ({ navigation }) => {
        /* 
        *导航栏使用注意点：
        *1、每个页面实现一个NavigationBar
        *2、导航栏的实现统一放在这里，不要放在render实现（页面跳转时不太友好），需要全屏的，可以通过设置render的view的marginTop:-100
        *3、内置了固件更新红点逻辑，在MagePage，如果需要显示红点，需要设置navigation和checkUpdate属性
        *4、
        */
        let featureView = <FeatureView navigation={navigation} />;
        return {
            header: <NavigationBar
                type={NavigationBar.TYPE.LIGHT}
                navigation={navigation}
                checkUpdate={true}
                title="设备插件Demo"
                subtitle=""
                left={[{
                    source: NavigationBar.ICON.BACK,
                    onPress: () => { CommonAdapter.exit(); },
                }]}
                right={[{
                    source: NavigationBar.ICON.MORE,
                    onPress: () => {
                        /* 
                        *设置页跳转
                        *1、index引入CommonPages
                        *2、功能设置模块，通过传递一个FeatureView来支持，FeatureView的功能属性等，随具体业务
                        */
                        navigation.navigate('SettingPage', {
                            featureView: featureView, //设置页面的自定义功能模块，没有，则为null，或不写
                            showUpdate: true,//是否显示固件更新
                            showAuto: false,//是否显示自动化（智能）
                            showShare: true,//是否显示共享设备
                        });
                    },
                }]}
            />
        };
    };
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    componentDidMount() {
        let params = {
            key: "waterpurifier",
            dataType: "DAY",
            // startTime:
            // endTime:
            limit: 20
        }

        DataAdapter.getStoreDatas(params).then((datas) => {
            alert(JSON.stringify(datas));
        }).catch((error) => {
            alert(JSON.stringify(error));
        });

        // DataAdapter.callMethod("get_properties", [{ "did": CommonAdapter.deviceId, "siid": 4, "piid": 4 }]).then((datas) => {
        //     alert(JSON.stringify(datas));
        // }).catch((error) => {
        //     alert(JSON.stringify(error));
        // });

        // DataAdapter.getProfilePropertiesValue(["tds", "mode"]).then((datas) => {
        //     alert(JSON.stringify(datas));
        // }).catch((error) => {
        //     alert(JSON.stringify(error));
        // });

        // DataAdapter.getPropertiesValue([{ "did": CommonAdapter.deviceId, "siid": 9, "piid": 4 }, { "did": CommonAdapter.deviceId, "siid": 9, "piid": 3 }]).then((datas) => {
        //     alert(JSON.stringify(datas));
        // }).catch((error) => {
        //     alert(JSON.stringify(error));
        // });

        // DataAdapter.setPropertiesValue([{ "did": CommonAdapter.deviceId, "siid": 40, "piid": 4, "value": 1 }]).then((datas) => {
        //     alert(JSON.stringify(datas));
        // }).catch((error) => {
        //     alert(JSON.stringify(error));
        // });

        // DataAdapter.doAction([{ "did": CommonAdapter.deviceId, "siid": 40, "aiid": 1, "in": [{ "piid": 1, "value": 10 }] }]).then((datas) => {
        //     alert(JSON.stringify(datas));
        // }).catch((error) => {
        //     alert(JSON.stringify(error));
        // });



        // //隐私协议授权（云米默认返回同意）
        // LegalsUtil.showLicense(() => {
        //     //已同意隐私协议
        // DataManager.startPropsLoop({
        //     props: Config.props,
        //     interval: 100,
        //     specConfig: Config.specConfig,
        //     toObject: true,
        //     log: true,
        //     propsEvent: true,
        //     callback: (result) => {
        //         alert("Result:" + JSON.stringify(result));
        //         if (result.status === 0) {
        //             let datas = result.datas;
        //             Stores.action.setData(datas);
        //         }
        //     },
        // })

        // }, () => {
        //     //取消隐私授权，如果有存储数据，需要清理
        // });


        // ProfileDataManager.startPropsLoop({
        //     props: ["tds"],
        //     interval: 100,
        //     toObject: true,
        //     log: true,
        //     propsEvent: true,
        //     callback: (result) => {
        //         alert("Result:" + JSON.stringify(result));
        //         if (result.status === 0) {
        //             let datas = result.datas;
        //             Stores.action.setData(datas);
        //         }
        //     },
        // })

    }

    componentWillUnmount() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        let update = true;
        return update;
    }

    componentWillReact() {
        console.log("I will re-render, since the todo has changed!")
    }

    render() {
        // 方法一
        let error = 7;

        // 方法二
        let errorList =
            [{ title: "应该有异常", detail: "设备故障，请联系客服", pic: require('../Resources/Images/error_pic_example.png') },
            { title: "感觉有异常", detail: "设备故障，请联系客服", pic: require('../Resources/Images/error_pic_example.png') },
            { title: "全都是异常", detail: "设备故障，请联系客服", pic: require('../Resources/Images/error_pic_example.png') },];

        return (
            <View >
                {/* <ErrorPromptBar
                    // 方法一
                    // error={error}
                    // navigation={this.props.navigation}>

                    // 方法二
                    errorList={errorList}
                    navigation={this.props.navigation}>
                </ErrorPromptBar> */}
                <View style={styles.container}>
                    <InfoView />
                    <ControlView />
                </View>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});


export default MainPage
//inject("stores")(observer(MainPage))


