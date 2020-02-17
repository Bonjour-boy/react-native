import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { DP, Colors, Layout } from '../../../Viomi-plugin-sdk/Styles';

import { inject, observer } from "mobx-react";

import Stores from "../../Store";

class ControlView extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    onPress(value) {
        Stores.action.setMode(value);
    }

    render() {
        let Mode = Stores.state.Mode;
        console.log("Mode:" + Mode);
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.onPress(1)}>
                    <View style={[styles.button, Mode == 1 ? { backgroundColor: Colors.status.themeGreen } : {}]}>
                        <Text>{"智能模式"}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 15 }} onPress={() => this.onPress(2)}>
                    <View style={[styles.button, Mode == 2 ? { backgroundColor: Colors.status.themeGreen } : {}]}>
                        <Text>{"假日模式"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        height: 150,
        justifyContent: "center",
        backgroundColor: "white",
        paddingBottom: Layout.bottomSaveSpace
    },
    button: {
        marginHorizontal: 20,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderColor: Colors.status.themeGreen,
        borderWidth: 1,
        borderRadius: 10
    }
});

export default observer(ControlView)