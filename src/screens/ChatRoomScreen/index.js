import React from 'react';
import {
    View, Text, TouchableOpacity,
    ImageBackground, FlatList, StyleSheet,
    TextInput
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { ChatLineHolder } from './components/ChatLineHolder';
import firebase from 'react-native-firebase';

const IMAGE_BACKGROUND = require('../../assets/images/background.jpg')

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatData: [],
            chatInputContent: '',
            username: ''
        }
        this._sendMessage = this._sendMessage.bind(this);
        this._onChangeChatInput = this._onChangeChatInput.bind(this);
        this._renderChatLine = this._renderChatLine.bind(this);
    };
    static navigationOptions = {
        title: 'Phòng Chat',
    };

    _sendMessage = () => {
        firebase.database().ref('/chatRoom/NhamNhi').push({
            userName: this.state.username,
            chatContent: this.state.chatInputContent,

        });
        this.setState({
            chatInputContent: ''
        });
    }
    _onChangeChatInput = (text) => {
        this.setState({
            chatInputContent: text
        });
    }
    _renderChatLine = (item) => {
        if (item.userName === this.state.username) {
            return (
                <View style={{ alignItems: 'flex-end' }} >
                    <ChatLineHolder sender="YOU" chatContent={item.chatContent} />
                </View>
            );
        }
        return (
            <ChatLineHolder sender={item.userName} chatContent={item.chatContent} />
        );
    };

    async componentDidMount() {
        let username = await AsyncStorage.getItem('name');
        this.setState({ username })
        firebase.database().ref('/chatRoom/NhamNhi').on("value", snapshot => {
            if (snapshot.val() !== undefined && snapshot.val() !== null) {
                this.setState({
                    chatData: Object.values(snapshot.val())
                });
            } else {
                this.setState({ chatData: [] })
            }
        });
    }

    render() {
        return (
            <View style={styles.container} >
                <ImageBackground
                    imageStyle={styles.opacity04}
                    source={IMAGE_BACKGROUND}
                    style={styles.imageBackground} >
                    <FlatList
                        data={this.state.chatData}
                        renderItem={({ item }, index) => this._renderChatLine(item)}
                    />
                </ImageBackground>
                <View style={styles.flex1} >
                    <View style={styles.bottomView}  >
                        <View style={styles.flex9} >
                            <TextInput
                                style={styles.inputChatText}
                                placeholder="Nhập nội dung chat"
                                value={this.state.chatInputContent}
                                onChangeText={(text) => this._onChangeChatInput(text)}
                            />
                        </View>
                        <View style={styles.flex1} >
                            <TouchableOpacity
                                onPress={() => this._sendMessage()}
                            >
                                <Text style={styles.textButton} >
                                    Gửi
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
};
export default ChatRoom;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    opacity04: {
        opacity: 0.4
    },
    imageBackground: {
        flex: 0.9,
        backgroundColor: '#A5A5A5',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    flex1: {
        flex: 0.1
    },
    flex9: {
        flex: 0.9
    },
    bottomView: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 2
    },
    inputChatText: {
        height: 100,
        fontSize: 18
    },
    textButton: {
        color: '#0099ff',
        fontSize: 14,
        marginRight: 15
    }
})