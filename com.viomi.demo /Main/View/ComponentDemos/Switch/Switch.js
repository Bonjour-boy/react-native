'use strict';

import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationBar } from '../../../../Viomi-plugin-sdk/Components/NavigationBar';
import { Switch } from '../../../../Viomi-plugin-sdk/Components/Switch';

export default class SwitchDemo extends React.Component {
    static navigationOptions = ({ navigation }) => {
        let featureView = <View style={{}} >
        </View>
        return {
            header: <NavigationBar
                type={NavigationBar.TYPE.LIGHT}
                navigation={navigation}
                checkUpdate={true}
                title="Switch样式展示操作"
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
            disabled: false,
            value: false
        }
    }

    changeAbled = () => {
        this.setState(({ disabled }) => ({
            disabled: !disabled
        }))
    }
    changeValue = () => {
        this.setState(({ value }) => ({
            value: !value
        }))
    }

    render() {
        const { value,
            disabled
        } = this.state;

        return (
            <View>
                <Button style={styles.button} onPress={this.changeAbled} title={'disabled： ' + `${disabled}`}></Button>
                <Button style={styles.button} onPress={this.changeValue} title={'value :' + `${value}`}></Button>

                <View style={{ backgroundColor: "white", height: 50, alignItems: "center", justifyContent: 'center' }}>
                    <Switch value={value} disabled={disabled} onValueChange={() => this.changeValue()}></Switch>
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
