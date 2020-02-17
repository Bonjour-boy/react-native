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
import { IconTextButton } from '../../../../Viomi-plugin-sdk/Components/Button';

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
                <ListItem showSeparator={true} subtitle={'描述文字'} ></ListItem>
                <ListItem value={'说明文字'} showSeparator={true}
                    valueStyle={{ color: '#999999' }} subtitle={'描述文字'}
                ></ListItem>
                <ListItem value={'说明文字'} title={'标题'}
                    valueStyle={{ color: '#999999' }} subtitle={'描述文字'} hideArrow={true}
                ></ListItem>
                <ListItem title={'标题'} subtitle={'描述文字'} showSeparator={true}
                    hasRedPoint={true} valueStyle={{ color: '#999999', fontSize: 13, marginRight: 6 }}
                ></ListItem>
                <ListItemWithSwitch subtitle={'描述文字'} value={true} showSeparator={true}></ListItemWithSwitch>
                <ListItemWithSwitch title='带按钮'
                    onValueChange={(v) => { console.log(v) }}
                    rightContent={
                        <IconTextButton
                            text="小按钮" value={false} unselectedBorderColor='#28BECA' titleStyle={{ color: '#28BECA' }} size='xs' borderRadiusSize={5}
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        flex: 1
    },
    label: {
        width,
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 16
    },
});