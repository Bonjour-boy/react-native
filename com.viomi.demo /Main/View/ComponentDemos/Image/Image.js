'use strict';

import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { IconTextButton } from '../../../../Viomi-plugin-sdk/Components/Button';
import { NavigationBar } from '../../../../Viomi-plugin-sdk/Components/NavigationBar';
import { BaseImage } from '../../../../Viomi-plugin-sdk/Components/Image'

export default class ImageDemo extends React.Component {
    static navigationOptions = ({ navigation }) => {
        let featureView = <View style={{}} >
        </View>
        return {
            header: <NavigationBar
                type={NavigationBar.TYPE.LIGHT}
                navigation={navigation}
                checkUpdate={true}
                title="Image样式展示操作"
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
            ImageSource: false
        }
    }

    changeSource = () => {
        this.setState(({ ImageSource }) => ({
            ImageSource: !ImageSource
        }))
    }

    render() {
        const { ImageSource } = this.state;

        return (
            <View>
                <Button style={styles.button} onPress={this.changeSource} title={'图片uri： ' + `${ImageSource}`}></Button>
                <BaseImage source={ImageSource ? require('../../../../Resources/Images/icon_check.png') : null}></BaseImage>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    text: {
        padding: 10,
        textAlign: 'center'
    },
    button: {
        textAlign: 'left'
    },
})
