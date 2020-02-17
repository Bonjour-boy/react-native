'use strict';

import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationBar } from '../../../../Viomi-plugin-sdk/Components/NavigationBar';
import {
    BorderRadiusTabView,
    ButtonTab
} from '../../../../Viomi-plugin-sdk/Components/Tab';

export default class TabDemo extends React.Component {
    static navigationOptions = ({ navigation }) => {
        let featureView = <View style={{}} >
        </View>
        return {
            header: <NavigationBar
                type={NavigationBar.TYPE.LIGHT}
                navigation={navigation}
                checkUpdate={true}
                title="Tab样式展示操作"
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

        this.state = {

        }

    }


    onChangeTab(key) {
        alert(key);
    }
    render() {

        return (
            <View>
                <View style={{ alignItems: 'center', padding: 10 }}>
                    <BorderRadiusTabView onChangeTab={(key) => this.onChangeTab(key)}>
                        <View style={{ height: 200, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} tabLabel="1111" >
                            <Text>11111</Text>
                        </View>
                        <View style={{ height: 200, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} tabLabel="2222" >
                            <Text>22222</Text>
                        </View>
                        <View style={{ height: 200, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} tabLabel="3333" >
                            <Text>33333</Text>
                        </View>
                        <View style={{ height: 200, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} tabLabel="4444" >
                            <Text>444444</Text>
                        </View>
                    </BorderRadiusTabView>
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={{ marginBottom: 20 }}>下面组件还存在问题，需要完善</Text>
                    <ButtonTab
                        data={[
                            { key: 1, title: 111 },
                            { key: 2, title: 2222 },
                            { key: 3, title: 3333 },
                        ]}
                        defaultSelected={2}
                        onChangeTab={(key) => this.onChangeTab(key)}
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
