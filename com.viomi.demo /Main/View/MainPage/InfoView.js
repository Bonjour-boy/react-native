import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Colors } from '../../../Viomi-plugin-sdk/Styles';

import { inject, observer } from "mobx-react";
import Stores from "../../Store";

class InfoView extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let Mode = Stores.state.Mode;
        return (
            <View style={styles.container}>
                <Text>
                    {Mode}
                </Text>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.backgroundColor
    }
});

export default observer(InfoView)