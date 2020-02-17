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

export default class ButtonWrap extends Component {
    static navigationOptions = ({ navigation }) => {
        let featureView = <View style={{}} >
        </View>
        return {
            header: <NavigationBar
                type={NavigationBar.TYPE.LIGHT}
                navigation={navigation}
                checkUpdate={true}
                title="Dialog样式集合"
                subtitle=""
                left={[{
                    source: NavigationBar.ICON.BACK,
                    onPress: () => { navigation.goBack() },
                }]}
            />
        };
    }

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state = {
            dataSource: ds.cloneWithRows(
                [
                    { name: '消息弹窗', router: 'MessageDialogDemo' },
                    { name: '弹窗样式', router: 'DialogDemo1' }
                ]),
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView style={styles.list} dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)} />
            </View>
        );
    }
    _renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight underlayColor='#838383' onPress={() => this._pressRow(rowData.router)}>
                <View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>{rowData.name}</Text>
                        <Image style={styles.subArrow} source={require('../../../../Resources/Images/sub_arrow.png')} />
                    </View>
                    <View style={styles.separator}></View>
                </View>
            </TouchableHighlight>
        );
    }

    _pressRow(rowData, messageDialog = {}) {
        console.log('row' + rowData + 'clicked!');
        this.props.navigation.navigate(rowData);
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: '#f1f1f1',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginBottom: 0,
        marginTop: 0,
    },
    rowContainer: {
        height: 52,
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingLeft: 23,
        paddingRight: 23,
        alignItems: 'center',
        flex: 1,
    },
    list: {
        alignSelf: 'stretch',
    },
    title: {
        fontSize: 15,
        color: '#333333',
        alignItems: 'center',
        flex: 1,
    },
    subArrow: {
        width: 7,
        height: 14,
    },
    separator: {
        height: 1 / PixelRatio.get(),
        backgroundColor: '#e5e5e5',
        marginLeft: 20,
    },
});