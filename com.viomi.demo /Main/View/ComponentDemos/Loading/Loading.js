'use strict';

import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationBar } from '../../../../Viomi-plugin-sdk/Components/NavigationBar';
import LoadingEffect from '../../../../Viomi-plugin-sdk/Components/Loading/Loading'

export default class LoadingDemo extends React.Component {
    static navigationOptions = ({ navigation }) => {
        let featureView = <View style={{}} >
        </View>
        return {
            header: <NavigationBar
                type={NavigationBar.TYPE.LIGHT}
                navigation={navigation}
                checkUpdate={true}
                title="Loading样式展示操作"
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
            isVisible: true
        }
    }

    changeShow = () => {
        this.setState(({ isVisible }) => ({
            isVisible: !isVisible
        }))
    }

    render() {
        const { isVisible } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <Button style={styles.button} onPress={this.changeShow} title={'是否(Loading)： ' + `${isVisible}`}></Button>

                <View style={{ flex: 1 }}>
                    <LoadingEffect visible={isVisible}></LoadingEffect>
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
