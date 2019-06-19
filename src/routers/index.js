import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";

const Screen1Stack = createStackNavigator({ JoinRoom: Screen1 });
const Screen2Stack = createStackNavigator({ ChatRoom: Screen2 });
const AppScreen = createAppContainer(createSwitchNavigator(
    {
        Screen1: {
            screen: Screen1Stack
        },
        Screen2: {
            screen: Screen2Stack
        }
    },
    {
        initialRouteName: 'Screen1',
        headerMode: 'none'
    }
));

export default AppScreen;