'use strict';

import {
    AppRegistry,
} from 'react-native';


import App from "./Main";


import { Package, Entrance } from "miot";

Package.entry(App, _ => {});

// AppRegistry.registerComponent('WaterPurifier', () => App);