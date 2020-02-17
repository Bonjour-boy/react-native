import React, { Component } from 'react';
import { NavigationBar } from '../../../../Viomi-plugin-sdk/Components/NavigationBar';
import {
    ScrollView,
    scrollView,
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
import { ListItem, ListItemWithTopItem, ListItemWithSwitch, ListItemWithButton } from '../../../../Viomi-plugin-sdk/Components/ListItem';
import { IconTextButton } from '../../../../Viomi-plugin-sdk/Components/Button';

const { width } = Dimensions.get('screen');
export default class ListItemWrap extends Component {
    static navigationOptions = ({ navigation }) => {
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
            />
        };
    }

    constructor(props) {
        super(props)
        this.state = {
            value: false
        }
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <ListItem />
                <ListItem title={'单行列表'} value={'5/正常显示'} />
                <ListItem title={'单行列表'} value={'禁用'} disabled={true} />
                <ListItem title={'单行列表'} value={'正常'} subtitle={"子标题"} />
                <ListItem title={'标题'} value={'说明文字'} hideArrow={true} />
                <ListItem title={'单行列表'} value={'需要强调'} valueStyle={{ color: '#C84545' }} />
                <ListItem title={'标题'} hasRedPoint={true}></ListItem>
                <ListItem title={'标题'} hasRedPoint={true} value={'说明文字'} ></ListItem>
                <ListItemWithSwitch title={'带开关-关闭'} value={this.state.value} onValueChange={() => {
                    this.setState({
                        value: !this.state.value
                    });
                }} />
                <ListItemWithSwitch title={'带开关-关闭'} value={this.state.value} onValueChange={() => {
                    this.setState({
                        value: !this.state.value
                    });
                }} disabled={true} />
                <ListItemWithButton title='带按钮'
                    onPress={() => { alert("点击test") }}
                />
                <ListItemWithButton title='带按钮' subtitle={"子标题"}
                    onPress={() => { alert("点击test") }}
                />
                <ListItemWithButton title='带按钮 disabled' disabled={true}
                    onPress={() => { alert("点击test") }}
                />
                <ListItem title={'标题14pt'} subtitle={'每个设计师、工程师都有自己的习惯、美学倾向和工作流我们希望设计师能够从重复的劳动中获得解脱'}></ListItem>
                <ListItem subtitle={'每个设计师、工程师都有自己的习惯、美学倾向和工作流'} value={'说明文字'}
                ></ListItem>
                <ListItem title={'我们希望打破设计师与工程师的隔阂，让大家的协作变得更流畅和高效'}
                    subtitle={'每个设计师、工程师都有自己的习惯'}
                ></ListItem>
                <ListItem title={'我们希望打破设计师与工程师的隔阂，让大家的协作变得更流畅和高效'}
                    subtitle={'每个设计师、工程师都有自己的习惯'} value={'说明文字'}
                ></ListItem>

            </ScrollView>



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