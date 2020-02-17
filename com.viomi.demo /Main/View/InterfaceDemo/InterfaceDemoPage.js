'use strict';

import React from 'react';
import { View, Text, Button, Image, TextInput, ScrollView } from 'react-native';


import { NavigationBar } from '../../../Viomi-plugin-sdk/Components/NavigationBar';

import CommonAdapter from '../../../Viomi-plugin-sdk/Adapter/CommonAdapter';
import FontAdapter from '../../../Viomi-plugin-sdk/Adapter/FontAdapter';
import PluginFSAdapter from '../../../Viomi-plugin-sdk/Adapter/PluginFSAdapter';
import DataAdapter from '../../../Viomi-plugin-sdk/Adapter/DataAdapter';

export default class DialogDemo extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: <NavigationBar
            type={NavigationBar.TYPE.LIGHT}
            title="SDK接口"
            left={[{
                source: NavigationBar.ICON.BACK,
                onPress: () => { navigation.goBack() },
            }]}
        />
    });

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    onPress(index) {
        switch (index) {
            case 1:
                CommonAdapter.openImagePicker(3, false, () => {

                });
                break;
            case 2:
                CommonAdapter.openImagePickerAndroid(3, [], () => {

                });
                break;
            case 3:
                CommonAdapter.openShopStore("123", "test");
                break;
            case 4:
                CommonAdapter.checkVersion((result) => {
                    alert(JSON.stringify(result));
                });
                break;
            case 5:
                CommonAdapter.getFirmwareInfo((issuccess, result) => {
                    alert(JSON.stringify(result));
                });
                break;
            case 6:
                CommonAdapter.setStorage("mykey", 123);
                break;
            case 7:
                CommonAdapter.getStorage("mykey").then((value) => {
                    alert(value);

                }).catch((error) => {

                });
                break;
            case 8:
                CommonAdapter.getServerName((info) => {
                    alert(JSON.stringify(info));
                })
                break;
            case 9:
                PluginFSAdapter.downloadFile("https://cnbj2.fds.api.xiaomi.com/yunmiapp/%E5%9B%BA%E4%BB%B6%E6%B5%8B%E8%AF%95/8269_module.bin", "8269_module.bin", (success, result) => {
                    alert(success + " " + JSON.stringify(result));
                });
                break;
            case 10:
                PluginFSAdapter.ungzFile("8269_module.bin", (success, base64Content) => {
                    alert(success + " " + base64Content);

                });
                break;
            case 11:
                DataAdapter.fetchProfileProp(["tds"], (success, result) => {
                    alert(success + " " + JSON.stringify(result));
                })
                break;
            case 12:
                DataAdapter.callMethod("get_prop", ["tds"], (success, result) => {
                    alert(success + " " + JSON.stringify(result));
                })
                break;
            case 13:
                {
                    let start_time = parseInt(new Date().getTime() / 1000 - 100000000);
                    let end_time = parseInt(new Date().getTime() / 1000);
                    DataAdapter.getDeviceData('fault_happen', start_time, end_time, 100, (success, data) => {
                        alert(success + JSON.stringify(data));
                    });
                }
                break;
            case 14:
                {
                    let start_time = parseInt(new Date().getTime() / 1000 - 100000000);
                    let end_time = parseInt(new Date().getTime() / 1000);
                    DataAdapter.getStoreData('monthly_record', start_time, end_time, (success, data) => {
                        alert(success + JSON.stringify(data));
                    });
                }

                break;
            case 15:
                {
                    let start_time = parseInt(new Date().getTime() / 1000 - 100000000);
                    let end_time = parseInt(new Date().getTime() / 1000);
                    let params = {
                        key: "wash_record",
                        data_type: "stat_day_v3",
                        time_start: start_time,
                        time_end: end_time,
                        limit: 100
                    }
                    DataAdapter.getStoreDatas(params).then((datas) => {
                        alert(JSON.stringify(datas));
                    }).catch((error) => {
                        alert(JSON.stringify(error));
                    });
                }

                break;


        }
    }

    render() {
        const { selected } = this.state;

        return (
            <ScrollView>
                <Text>-------CommonAdapter-------</Text>
                <View style={{ flexDirection: "row", flexWrap: 'wrap' }}>
                    <Text>
                        {
                            "基础信息:\n" +
                            "deviceId:" + CommonAdapter.deviceId + " " + "deviceName:" + CommonAdapter.deviceName + "\n" +
                            "deviceModel:" + CommonAdapter.deviceModel + " " + "userId:" + CommonAdapter.userId + "\n" +
                            "miToken:" + CommonAdapter.miToken + " " + "ownerId:" + CommonAdapter.ownerId + "\n" +
                            "isShared:" + CommonAdapter.isShared + " " + "viomiId:" + CommonAdapter.viomiId + "\n" +
                            "viomiToken:" + CommonAdapter.viomiToken + " " + "source:" + CommonAdapter.source + "\n" +
                            "pluginVersion:" + CommonAdapter.pluginVersion + " " + "clientId:" + CommonAdapter.clientId() + "\n" +
                            "viomiDebug:" + CommonAdapter.viomiDebug() + "\n" + "language:" + CommonAdapter.language()
                        }
                    </Text>
                    <Button title="打开相册ios 云米" onPress={() => this.onPress(1)} />
                    <Button title="打开相册android 云米" onPress={() => this.onPress(2)} />
                    <Button title="打开商城" onPress={() => this.onPress(3)} />
                    <Button title="检查固件更新" onPress={() => this.onPress(4)} />
                    <Button title="获取最新固件版本" onPress={() => this.onPress(5)} />
                    <Button title="存储信息" onPress={() => this.onPress(6)} />
                    <Button title="获取信息" onPress={() => this.onPress(7)} />
                    <Button title="获取服务器、地区信息" onPress={() => this.onPress(8)} />
                </View>
                <Text>-----------字体-------------</Text>
                <View>
                    <Text style={FontAdapter.fontOfNumber()}>云米云米viomi1234567</Text>
                    <Text style={FontAdapter.fontOfKmedium()}>云米云米viomi1234567</Text>
                    <Text style={FontAdapter.fontOfYS()}>云米云米viomi1234567</Text>
                    <Text style={FontAdapter.fontOfBold()}>云米云米viomi1234567</Text>
                    <Text style={FontAdapter.fontOfLight()}>云米云米viomi1234567</Text>
                    <Text style={FontAdapter.fontOfThin()}>云米云米viomi1234567</Text>
                </View>
                <Text>-----------PluginFSAdapter-------------</Text>
                <Button title="下载文件" onPress={() => this.onPress(9)} />
                <Button title="解压" onPress={() => this.onPress(10)} />
                <Text>-----------DataAdapter-------------</Text>
                <Button title="fetchProfileProp" onPress={() => this.onPress(11)} />
                <Button title="callMethod" onPress={() => this.onPress(12)} />
                <Button title="获取时间上报记录getDeviceData" onPress={() => this.onPress(13)} />
                <Button title="旧版数据统计getStoreData" onPress={() => this.onPress(14)} />
                <Button title="新版数据统计getStoreDatas" onPress={() => this.onPress(15)} />
            </ScrollView>
        );
    }
}
