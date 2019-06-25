/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppScreen from "./src/routers";
import HomeScreen from "./src/screens/HomeScreen";
import SellScreen from "./src/screens/SellScreen";
import TestDateScreen from "./src/screens/TestDateScreen";
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppScreen);
