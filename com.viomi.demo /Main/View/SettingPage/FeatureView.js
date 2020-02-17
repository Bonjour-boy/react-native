import React, { Component } from 'react';

import ProjectAdapter from '../../../Viomi-plugin-sdk/Adapter/ProjectAdapter';

import { ListItem } from '../../../Viomi-plugin-sdk/Components/ListItem';
import {
    AppRegistry,
    StyleSheet,
    FlatList,
    Text,
    Image,
    View,
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

export default class FeatureView extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    onPress(route) {
        this.props.navigation.navigate(route);
    }

    render() {
        return (
            <View>
                <ListItem title={"SDK接口"} onPress={() => this.onPress("InterfaceDemoPage")} isViomiType={ProjectAdapter.isYunmi} />
                <ListItem title={"Button"} onPress={() => this.onPress("Button")} isViomiType={ProjectAdapter.isYunmi} />
                <ListItem title={"Dialog"} onPress={() => this.onPress("Dialog")} isViomiType={ProjectAdapter.isYunmi} />
                <ListItem title={"Image"} onPress={() => this.onPress("Image")} isViomiType={ProjectAdapter.isYunmi} />
                <ListItem title={"ListItem"} onPress={() => this.onPress("ListItem")} isViomiType={ProjectAdapter.isYunmi} />
                <ListItem title={"Loading"} onPress={() => this.onPress("Loading")} isViomiType={ProjectAdapter.isYunmi} />
                <ListItem title={"NavigationBar"} onPress={() => this.onPress("NavigationBar")} isViomiType={ProjectAdapter.isYunmi} />
                <ListItem title={"SearchBar"} onPress={() => this.onPress("SearchBar")} isViomiType={ProjectAdapter.isYunmi} />
                <ListItem title={"StageDisplay"} onPress={() => this.onPress("StageDisplay")} isViomiType={ProjectAdapter.isYunmi} />
                <ListItem title={"Switch"} onPress={() => this.onPress("Switch")} isViomiType={ProjectAdapter.isYunmi} />
                <ListItem title={"Tab"} onPress={() => this.onPress("Tab")} isViomiType={ProjectAdapter.isYunmi} />
                <ListItem title={"Tab"} showSeparator={false} onPress={() => this.onPress()} isViomiType={ProjectAdapter.isYunmi} />
            </View>
        );
    }

}

var styles = StyleSheet.create({

});