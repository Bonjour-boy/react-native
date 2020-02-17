'use strict';

import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { IconTextButton } from '../../../../Viomi-plugin-sdk/Components/Button';
import { NavigationBar } from '../../../../Viomi-plugin-sdk/Components/NavigationBar';

export default class ButtonDemo extends React.Component {
    static navigationOptions = ({ navigation }) => {
        let featureView = <View style={{}} >
        </View>
        return {
            header: <NavigationBar
                type={NavigationBar.TYPE.LIGHT}
                navigation={navigation}
                checkUpdate={true}
                title="Button样式展示操作"
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
            num: 0,
            size: undefined,
            value: false,
            disabled: false,
            text: '我是标题',
            subText: '你好我是副标题',
            iconSource: false,
            borderRadiusSize: undefined,
            isLoading: false
        }
    }

    changeSize = () => {
        const sizeBox = ['xl', 'lg', 'md', 'sm', 'xs'];
        this.setState(({ size }) => ({
            size: sizeBox[(sizeBox.findIndex((v) => v === size) + 1) % sizeBox.length]
        }))
    }

    addFunc = () => {
        this.setState(({ num }) => ({
            num: ++num
        }))
    }

    changeValue = () => {
        this.setState(({ value }) => ({
            value: !value
        }))
    }

    changeDisabled = () => {
        this.setState(({ disabled }) => ({
            disabled: !disabled
        }))
    }

    changeText = () => {
        this.setState(({ text }) => ({
            text: text ? '' : '我是标题'
        }))
    }

    changeSubText = () => {
        this.setState(({ subText }) => ({
            subText: subText ? '' : '你好我是副标题'
        }))
    }

    changeIconSource = () => {
        this.setState(({ iconSource }) => ({
            iconSource: !iconSource
        }))
    }

    changeBorderRadiusSize = () => {
        this.setState(({ borderRadiusSize }) => ({
            borderRadiusSize: borderRadiusSize ? undefined : 5
        }))
    }

    changeIsLoading = () => {
        this.setState(({ isLoading }) => ({
            isLoading: !isLoading
        }))
    }

    render() {
        const { num, value, disabled, size, text, subText, iconSource, borderRadiusSize, isLoading } = this.state;

        return (
            <View>
                <Button style={styles.button} onPress={this.changeSize} title={'大小(size)： ' + `${size}`}></Button>
                <Button style={styles.button} onPress={this.changeValue} title={'选中(value)： ' + `${value}`}></Button>
                <Button style={styles.button} onPress={this.changeDisabled} title={'禁用(disabled)： ' + `${disabled}`}></Button>
                <Button style={styles.button} onPress={this.changeText} title={'文字(text)： ' + `${text}`}></Button>
                <Button style={styles.button} onPress={this.changeSubText} title={'副文字(subText)： ' + `${subText}`}></Button>
                <Button style={styles.button} onPress={this.changeIconSource} title={'图标(text)： ' + `${iconSource}`}></Button>
                <Button style={styles.button} onPress={this.changeBorderRadiusSize} title={'边框弧度(borderRadiusSize)： ' + `${borderRadiusSize}`}></Button>
                <Button style={styles.button} onPress={this.changeIsLoading} title={'加载中(isLoading)： ' + `${isLoading}`}></Button>
                <Text style={styles.text}>按钮点击次数：{num}</Text>
                <View style={{ padding: 10 }}>
                    <IconTextButton
                        size={size}
                        value={value}
                        disabled={disabled}
                        text={text}
                        subText={subText}
                        iconSource={iconSource ? require('../../../../Resources/Images/icon_check.png') : null}
                        onPress={this.addFunc}
                        borderRadiusSize={borderRadiusSize}
                        isLoading={isLoading}
                    />
                </View>
                <View style={{ alignItems: 'center', padding: 10 }}>
                    <IconTextButton
                        size={size}
                        value={value}
                        disabled={disabled}
                        text={text}
                        subText={subText}
                        iconSource={iconSource ? require('../../../../Resources/Images/icon_check.png') : null}
                        onPress={this.addFunc}
                        borderRadiusSize={borderRadiusSize}
                        isLoading={isLoading}
                    />
                </View>
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
