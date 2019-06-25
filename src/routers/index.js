import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import JoinChatRoomScreen from "../screens/JoinChatRoomScreen";
import HomeScreen from "../screens/HomeScreen";
import SellScreen from "../screens/SellScreen";

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
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
));

export default AppScreen;