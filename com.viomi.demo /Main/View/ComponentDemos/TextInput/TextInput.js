'use strict';

import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationBar } from '../../../../Viomi-plugin-sdk/Components/NavigationBar';
import { ViomiTextInput } from '../../../../Viomi-plugin-sdk/Components/TextInput';

export default class TextInputDemo extends React.Component {
    static navigationOptions = ({ navigation }) => {
        let featureView = <View style={{}} >
        </View>
        return {
            header: <NavigationBar
                type={NavigationBar.TYPE.LIGHT}
                navigation={navigation}
                checkUpdate={true}
                title="ViomiTextInput"
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
            value: "使用方式与TextInput一致"
        }
    }
    onValueChange(value) {
        this.setState({
            value: value
        });
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ViomiTextInput style={{ width: 200, height: 50, backgroundColor: 'white' }} value={this.state.value}
                    onValueChange={(value) => this.onValueChange(value)} ></ViomiTextInput>
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
