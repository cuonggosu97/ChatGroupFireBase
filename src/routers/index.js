import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import JoinChatRoomScreen from "../screens/JoinChatRoomScreen";
import HomeScreen from "../screens/HomeScreen";
import SellScreen from "../screens/SellScreen";
import ResultScreen from "../screens/ResultScreen";
import StatisticalScreen from "../screens/StatisticalScreen";
import UserScreen from "../screens/UserScreen";
import OTPScreen from "../commons/OTPScreen";
import LoginScreen from "../screens/LoginScreen";
import LoadingScreen from "../screens/LoadingScreen";

const StackApp = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Sell: {
            screen: SellScreen
        },
        Result: {
            screen: ResultScreen
        },
        Statistical: {
            screen: StatisticalScreen
        },
        User: {
            screen: UserScreen
        },
        OTP: {
            screen: OTPScreen
        },
        Login: {
            screen: LoginScreen
        },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);
const AppScreen = createAppContainer(createSwitchNavigator(
    {
        Loading: {
            screen: LoadingScreen
        },
        Login: {
            screen: LoginScreen
        },
        Home: {
            screen: HomeScreen
        },
        StackApp: StackApp
    },
    {
        initialRouteName: 'Loading',
        headerMode: 'none'
    }
))

export default AppScreen;