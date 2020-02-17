'use strict';

import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { IconTextButton } from '../../../../Viomi-plugin-sdk/Components/Button';
import { NavigationBar } from '../../../../Viomi-plugin-sdk/Components/NavigationBar';
import { SearchBar } from '../../../../Viomi-plugin-sdk/Components/SearchBar';

export default class SearchBarDemo extends React.Component {
    static navigationOptions = ({ navigation }) => {
        let featureView = <View style={{}} >
        </View>
        return {
            header: <NavigationBar
                type={NavigationBar.TYPE.LIGHT}
                navigation={navigation}
                checkUpdate={true}
                title="SeachBar样式展示操作"
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
            autoFocus: false,
            placeholder: '内置提示语',
            defaultValue: '默认值',
            showCover: false,
            value: '',
        }
    }

    changeFocus = () => {
        this.setState(({ autoFocus }) => ({
            autoFocus: !autoFocus
        }))
    }
    changeCover = () => {
        this.setState(({ showCover }) => ({
            showCover: !showCover
        }))
    }

    changePlaceholder = () => {
        this.setState(({ placeholder }) => ({
            placeholder: placeholder ? '' : '内置提示语'
        }))
    }

    changeValue = () => {
        this.setState(({ defaultValue }) => ({
            defaultValue: defaultValue ? '' : '默认值'
        }))
    }
    onChangeText(value) {
        this.setState({
            value: value
        });
    }
    onSearch(value) {
        alert(value);
    }
    onCoverPress() {
        alert(1111);
    }
    onCancelPress() {
        alert(2222);
    }
    render() {
        const { autoFocus,
            placeholder,
            defaultValue,
            showCover } = this.state;

        return (
            <View>
                <Button style={styles.button} onPress={this.changeFocus} title={'聚焦(autoFocus)： ' + `${autoFocus}`}></Button>
                <Button style={styles.button} onPress={this.changePlaceholder} title={'placeholder :' + `${placeholder}`}></Button>
                <Button style={styles.button} onPress={this.changeValue} title={'defaultValue: ' + `${defaultValue}`}></Button>
                <Button style={styles.button} onPress={this.changeCover} title={'showCover： ' + `${showCover}`}></Button>

                <View>
                    <SearchBar autoFocus={autoFocus} placeholder={placeholder} defaultValue={defaultValue} showCover={showCover}
                        onChangeText={(value) => this.onChangeText(value)}
                        onSearch={(value) => this.onSearch(value)}
                        onCoverPress={() => this.onCoverPress()}
                        onCancelPress={() => this.onCancelPress()}
                    ></SearchBar>
                </View>

                <Text>{this.state.value}</Text>
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
