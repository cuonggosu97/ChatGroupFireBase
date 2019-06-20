import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import JoinChatRoomScreen from "../screens/JoinChatRoomScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";

const JoinChatStack = createStackNavigator({ JoinRoom: JoinChatRoomScreen });
const ChatRoomStack = createStackNavigator({ ChatRoom: ChatRoomScreen });
const AppScreen = createAppContainer(createSwitchNavigator(
    {
        Join: {
            screen: JoinChatStack
        },
        ChatRoom: {
            screen: ChatRoomStack
        }
    },
    {
        initialRouteName: 'Join',
    }
));

export default AppScreen;