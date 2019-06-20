/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppScreen from "./src/routers";
import HomeScreen from "./src/screens/HomeScreen";
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppScreen);
