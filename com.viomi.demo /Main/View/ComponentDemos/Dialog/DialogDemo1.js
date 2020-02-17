'use strict';

import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import {
    MessageDialog,
    SliderDialog,
    // SliderMultiDialog,
    InputDialog,
    CheckBoxPickerDialog,
    DatePickerDialog,
    WheelPickerDialog,
    TimePickerDialog,
} from '../../../../Viomi-plugin-sdk/Components/Dialog';

import { NavigationBar } from '../../../../Viomi-plugin-sdk/Components/NavigationBar';

export default class DialogDemo extends React.Component {
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
        this.refs.dialog1.showWithValue(15);
    }
    handleEvent2 = () => {
        this.refs.dialog2.showWithValue(20);
    }
    handleEvent21 = () => {
        this.refs.dialog21.showWithValue();
    }
    handleEvent3 = () => {
        this.refs.dialog3.showWithValue("我的速度速度速度速度");
    }
    handleEvent4 = () => {
        this.refs.dialog4.show(['2', 3, 4])
    }
    handleEvent5 = () => {
        this.refs.dialog5.showWithValue("5")
    }
    handleEvent6 = () => {
        this.refs.dialog6.show('2019/3/3', '2022/9/9', '2019/6/1')
    }
    handleEvent7 = () => {
        // this.refs.dialog7.show('00:30:30', '20:20:20', '10:10:10')
        this.refs.dialog7.show('00:00:00', '23:59:59', '00:01:50')
        // this.refs.dialog7.show()
    }

    render() {
        const { selected } = this.state;

        return (
            <View>
                <Button title="SliderDialog1" onPress={this.handleEvent1} />
                <Button title="SliderDialog2" onPress={this.handleEvent2} />
                <Button title="InputDialog" onPress={this.handleEvent3} />
                <Button title="WheelPickerDialog" onPress={this.handleEvent5} />
                <Button title="DatePickerDialog" onPress={this.handleEvent6} />
                <Button title="TimePickerDialog" onPress={this.handleEvent7} />
                <View height={200} />
                <SliderDialog
                    ref="dialog1"
                    title="弹窗标题1"
                    unit="℃"
                    defaultValue={26}
                    step={0.1}
                    minValue={10}
                    maxValue={40}
                    onPress={(index, value) => { alert(index + " " + value) }}
                ></SliderDialog>
                <SliderDialog
                    ref="dialog2"
                    title="弹窗标题2"
                    unit="%"
                    defaultValue={26}
                    minValue={10}
                    maxValue={40}
                    showValue={false}
                    onPress={(index, value) => { alert(index + " " + value) }}
                ></SliderDialog>
                <InputDialog
                    ref="dialog3"
                    title="对话框标题"
                    defaultValue="123"
                    placeholder={"探讨探讨他天天"}
                    showClear={true}
                    onPress={(index, value) => { alert(index + " " + value) }}
                    tips="辅助文字，尽可能控制在一行之内。。。"
                />
                <CheckBoxPickerDialog
                    multiselect
                    data={[
                        { key: 2, value: 2 },
                        { key: 3, value: 3 },
                        { key: 4, value: 4 },
                        { key: 5, value: 5 },
                        { key: 6, value: 6 },
                        { key: 7, value: 7 },
                        { key: 8, value: 8 }
                    ]}
                    defaultSelected={selected}
                    icon={4}
                    title="CheckBoxPickerDialog"
                    ref="dialog4"
                    remember
                    onItemPress={(...v) => { console.log('onItemPress', v); }}
                    onPress={(...v) => { console.log('onpress', v); this.refs.dialog4.hide() }} // 点击底部按钮回调函数，设置的副作用：阻止隐藏
                    onShow={(...v) => { console.log('onShow', v) }}   // 显示的时候回调函数
                    onDismiss={(...v) => { console.log('onDismiss', v) }}    // 隐藏的时候回调函数
                    onAndroidRequestClose={(...v) => { console.log('onAndroidRequestClose', v); this.refs.dialog4.hide() }}    // android 返回键，设置的副作用：阻止隐藏
                />
                <WheelPickerDialog
                    data={[{
                        key: '1',
                        value: '11'
                    }, {
                        key: '2',
                        value: '22'
                    }, {
                        key: '3',
                        value: '33'
                    }, {
                        key: '4',
                        value: '44'
                    }, {
                        key: '5',
                        value: '55'
                    }]}
                    defaultSelected="3"
                    title="对话框标题"
                    ref="dialog5"
                    onPress={(index, value) => { alert(index + " " + value) }}
                    unit="度"
                />
                <DatePickerDialog
                    title="DatePickerDialog"
                    ref="dialog6"
                    onPress={(index, value) => { alert(index + " " + value) }}

                />
                <TimePickerDialog
                    type="mmss"
                    title="TimePickerDialog"
                    ref="dialog7"
                    onPress={(index, value) => { alert(index + " " + value) }} // 点击底部按钮回调函数，设置的副作用：阻止隐藏
                />
            </View >
        );
    }
}
