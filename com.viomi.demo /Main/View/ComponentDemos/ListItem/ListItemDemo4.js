import React, { Component } from 'react';
import { NavigationBar } from '../../../../Viomi-plugin-sdk/Components/NavigationBar';
import {
    AppRegistry,
    StyleSheet,
    FlatList,
    Text,
    Image,
    View,
    ListView,
    PixelRatio,
    StatusBar,
    TouchableOpacity,
    Platform,
    DeviceEventEmitter,
    Dimensions,
    toString,
    ImageBackground,
    TouchableHighlight
} from 'react-native';
import { ListItem, ListItemWithTopItem, ListItemWithSwitch } from '../../../../Viomi-plugin-sdk/Components/ListItem/index';


const { width } = Dimensions.get('screen');
export default class ListItemWrap extends Component {
    static navigationOptions = ({ navigation }) => {
        let featureView = <View style={{}} >
            {/*  <ListItem title={"测试1"} />
            <ListItemWithSwitch />
            <ListItem title={"测试2"} showSeparator={false} /> */}
        </View>
        return {
            header: <NavigationBar
                type={NavigationBar.TYPE.LIGHT}
                navigation={navigation}
                checkUpdate={true}
                title="设置"
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
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View >
                <ListItemWithTopItem topTitle={'顶部标题'} title={'标题'} topImageSource={require('../../../../Resources/Images/icon_check.png')}></ListItemWithTopItem>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width
    },
    label: {
        width,
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 16
    },
});