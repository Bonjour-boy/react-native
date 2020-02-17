'use strict';

import React from 'react';

import {
	View,
	Platform,
} from 'react-native';


import { createStackNavigator } from 'react-navigation';
import BaseApp from '../Viomi-plugin-sdk/BaseApp';
import { Navigation } from "../Viomi-plugin-sdk/Util";
import { NavigationBar } from '../Viomi-plugin-sdk/Components/NavigationBar';

// 导入所有的页面
import MainPage from './MainPage';
import CommonPages from '../Viomi-plugin-sdk/CommonPages';


//引入UI组件页
import { ButtonWrap, ButtonDemo1 } from './View/ComponentDemos/Button/index';
import { DialogWrap, MessageDialogDemo, DialogDemo1 } from './View/ComponentDemos/Dialog/index';
import { ListItemWrap, ListItemDemo1, ListItemDemo2, ListItemDemo3, ListItemDemo4 } from './View/ComponentDemos/ListItem/index';
import NavigationPage from './View/ComponentDemos/Navigation/Navigation';
import ImageDemo from './View/ComponentDemos/Image/Image';
import LoadingDemo from './View/ComponentDemos/Loading/Loading';
import SearchBarDemo from './View/ComponentDemos/SearchBar/SearchBar';
import StageDisplayDemo from './View/ComponentDemos/StageDisplay/StageDisplay';
import SwitchDemo from './View/ComponentDemos/Switch/Switch';
import TabDemo from './View/ComponentDemos/Tab/Tab';
import TextInputDemo from './View/ComponentDemos/TextInput/TextInput';
import TouchableOpacityDemo from './View/ComponentDemos/TouchableOpacity/TouchableOpacity';


import InterfaceDemoPage from './View/InterfaceDemo/InterfaceDemoPage';



//store
import Stores from './Store';
import { Provider } from 'mobx-react';
import { configure } from 'mobx';
configure({ enforceActions: 'observed' })



const RootStack = createStackNavigator(
	{
		MainPage: MainPage,
		...CommonPages,

		InterfaceDemoPage:InterfaceDemoPage,
		//UI组件路由
		Button: ButtonWrap,
		ButtonDemo1: ButtonDemo1,
		Dialog: DialogWrap,
		DialogDemo1: DialogDemo1,
		MessageDialogDemo: MessageDialogDemo,
		ListItem: ListItemWrap,
		ListItemDemo1: ListItemDemo1,
		ListItemDemo2: ListItemDemo2,
		ListItemDemo3: ListItemDemo3,
		ListItemDemo4: ListItemDemo4,
		NavigationBar: NavigationPage,
		Image: ImageDemo,
		Loading: LoadingDemo,
		SearchBar: SearchBarDemo,
		StageDisplay: StageDisplayDemo,
		Switch: SwitchDemo,
		Tab: TabDemo,
		TextInput: TextInputDemo,
		TouchableOpacity: TouchableOpacityDemo
	},
	{
		initialRouteName: 'MainPage',
		navigationOptions: ({ navigation }) => {
			return {
				header: <NavigationBar />
			};
		},
		transitionConfig: () => {
			if (Platform.OS === 'android') {
				return {
					screenInterpolator: Navigation.interpolator,
				}
			}
		},
	}
);

export default class App extends BaseApp {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<Provider stores={Stores}>
				<View style={{ flex: 1 }}>
					<RootStack />
				</View>
			</Provider>
		)

	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}
}



