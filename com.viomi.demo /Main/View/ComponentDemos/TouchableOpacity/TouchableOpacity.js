'use strict';

import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationBar } from '../../../../Viomi-plugin-sdk/Components/NavigationBar';
import TouchableOpacity from '../../../../Viomi-plugin-sdk/Components/TouchableOpacity';

export default class TouchableOpacityDemo extends React.Component {
    static navigationOptions = ({ navigation }) => {
        let featureView = <View style={{}} >
        </View>
        return {
            header: <NavigationBar
                type={NavigationBar.TYPE.LIGHT}
                navigation={navigation}
                checkUpdate={true}
                title="TouchableOpacity样式展示操作"
                subtitle=""
                left={[{
                    source: NavigationBar.ICON.BACK,
                    onPress: () => { navigation.goBack() },
                }]}
                right={[{
                    source: NavigationBar.ICON.MORE,
                    onPress: () => {
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
    }
    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
        }

    }

    changeDisabled = () => {
        this.setState(({ disabled }) => ({
            disabled: !disabled
        }))
    }

    render() {
        const { disabled } = this.state;

        return (
            <View>
                <View style={{ marginBottom: 100 }}>
                    <Button
                        onPress={this.changeDisabled}
                        title={`disabled：${disabled}`}
                    />

                </View>
                <View style={{ padding: 10 }}>
                    <TouchableOpacity
                        onPress={this.changeDisabled}
                        disabled={disabled}
                        style={[{ backgroundColor: 'red' }, { padding: 10 }]}
                    >
                        <View>
                            <Text>TouchableOpacity</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

