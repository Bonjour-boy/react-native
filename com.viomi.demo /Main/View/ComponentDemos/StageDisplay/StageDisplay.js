'use strict';

import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationBar } from '../../../../Viomi-plugin-sdk/Components/NavigationBar';
import { StageDisplay } from '../../../../Viomi-plugin-sdk/Components/StageDisplay';

export default class StageDisplayDemo extends React.Component {
    static navigationOptions = ({ navigation }) => {
        let featureView = <View style={{}} >
        </View>
        return {
            header: <NavigationBar
                type={NavigationBar.TYPE.LIGHT}
                navigation={navigation}
                checkUpdate={true}
                title="StageDisplay样式展示操作"
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
            defaultHeight: null,
            disabled: false,
            isFixed: false,
            containerStyle: {
                backgroundColor: 'red',
                width: 400,
                height: 400
            }
        }
    }

    changeAbled = () => {
        this.setState(({ disabled }) => ({
            disabled: !disabled
        }))
    }
    changeFix = () => {
        this.setState(({ isFixed }) => ({
            isFixed: !isFixed
        }))
    }

    changeHeight = () => {
        this.setState(({ defaultHeight }) => ({
            defaultHeight: defaultHeight ? null : '500'
        }))
    }

    render() {
        const { defaultHeight,
            disabled,
            isFixed,
            containerStyle
        } = this.state;

        return (
            <View>
                <Button style={styles.button} onPress={this.changeAbled} title={'disabled： ' + `${disabled}`}></Button>
                <Button style={styles.button} onPress={this.changeHeight} title={'defaultHeight :' + `${defaultHeight}`}></Button>
                <Button style={styles.button} onPress={this.changeFix} title={'isFixed： ' + `${isFixed}`}></Button>

                <View>
                    <StageDisplay containerStyle={containerStyle} defaultHeight={defaultHeight} disabled={disabled} isFixed={isFixed} ></StageDisplay>
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
