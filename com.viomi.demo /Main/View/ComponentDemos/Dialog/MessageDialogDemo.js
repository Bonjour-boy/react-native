'use strict';

import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import {
    MessageDialog,
    SliderDialog,
    SliderMultiDialog,
    InputDialog,
    CheckBoxPickerDialog,
    DatePickerDialog,
    WheelPickDialog,
    TimePickerDialog,
} from '../../../../Viomi-plugin-sdk/Components/Dialog';

import { NavigationBar } from '../../../../Viomi-plugin-sdk/Components/NavigationBar';

export default class MessageDialogDemo extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: <NavigationBar
            type={NavigationBar.TYPE.LIGHT}
            title="弹窗展示页"
            left={[{
                source: NavigationBar.ICON.BACK,
                onPress: () => { navigation.goBack() },
            }]}
        />
    });

    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            selected: [
                { key: 2, value: 2 }
            ],
        }
    }

    handleEvent1 = () => {
        this.refs.dialog1 && this.refs.dialog1.show(null, "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内。");
    }
    handleEvent2 = () => {
        this.refs.dialog2 && this.refs.dialog2.show("弹窗标题", "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内。");
    }
    handleEvent3 = () => {
        this.refs.dialog3 && this.refs.dialog3.show("弹窗标题", "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内。");
    }
    handleEvent4 = () => {
        this.refs.dialog4 && this.refs.dialog4.show("弹窗标题", "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内。");
    }

    render() {
        const { selected } = this.state;

        return (
            <View>
                <Button title="详情" onPress={this.handleEvent1} />
                <Button title="标题+详情" onPress={this.handleEvent2} />
                <Button title="标题+详情+图标" onPress={this.handleEvent3} />
                <Button title="标题+详情+图标+链接" onPress={this.handleEvent4} />
                <View height={200} />
                <MessageDialog
                    ref="dialog1"
                    canBackgroundDismiss={true}
                    onPress={(index) => { alert(index) }}
                ></MessageDialog>
                <MessageDialog
                    ref="dialog2"
                    onPress={(index) => { this.refs.dialog2 && this.refs.dialog2.hide() }}
                ></MessageDialog>
                <MessageDialog
                    ref="dialog3"
                    icon={require('../../../../Resources/Images/icon_check.png')}
                    iconSize={{ width: 50, height: 50 }}
                    onPress={(index) => { this.refs.dialog3 && this.refs.dialog3.hide() }}
                ></MessageDialog>
                <MessageDialog
                    ref="dialog4"
                    icon={require('../../../../Resources/Images/icon_check.png')}
                    link="链接内容"
                    onLinkPress={v => { alert('你点击了链接') }}
                    onPress={(index) => { this.refs.dialog4 && this.refs.dialog4.hide() }}
                ></MessageDialog>
                <MessageDialog
                    icon={require('../../../../Resources/Images/icon_check.png')}
                    iconSize={{ width: 50, height: 50 }}
                    link="链接"
                    onLinkPress={v => { alert('你点击了链接') }}
                    ref="dialog"
                    onPress={(...v) => { console.log('onpress', v); this.refs.dialog.hide() }}
                    onShow={(...v) => { console.log('onShow', v) }}
                    onDismiss={(...v) => { console.log('onDismiss', v) }}
                    onAndroidRequestClose={(...v) => { console.log('onAndroidRequestClose', v); this.refs.dialog.hide() }}
                ></MessageDialog>
            </View >
        );
    }
}
