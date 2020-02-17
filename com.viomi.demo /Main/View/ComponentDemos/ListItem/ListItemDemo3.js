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
                <ListItem showSeparator={'true'} title={'标题14pt'} subtitle={'每个设计师、工程师都有自己的习惯、美学倾向和工作流我们希望设计师能够从重复的劳动中获得解脱'}></ListItem>
                <ListItem showSeparator={'true'} subtitle={'每个设计师、工程师都有自己的习惯、美学倾向和工作流'} value={'说明文字'}
                ></ListItem>
                <ListItem title={'我们希望打破设计师与工程师的隔阂，让大家的协作变得更流畅和高效'} showSeparator={'true'}
                    subtitle={'每个设计师、工程师都有自己的习惯'}
                ></ListItem>
                <ListItem title={'我们希望打破设计师与工程师的隔阂，让大家的协作变得更流畅和高效'} showSeparator={'true'}
                    subtitle={'每个设计师、工程师都有自己的习惯'} value={'说明文字'}
                ></ListItem>
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