import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import JoinChatRoomScreen from "../screens/JoinChatRoomScreen";
import HomeScreen from "../screens/HomeScreen";
import SellScreen from "../screens/SellScreen";
import ResultScreen from "../screens/ResultScreen";
import StatisticalScreen from "../screens/StatisticalScreen";
import RevenueScreen from "../screens/RevenueScreen";

const AppScreen = createAppContainer(createStackNavigator(
    {
        Login: {
            screen: JoinChatRoomScreen
        },
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
        Revenue: {
            screen: RevenueScreen
        },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
));

export default AppScreen;