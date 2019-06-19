import React from 'react';
import {
    View, Text, TextInput,
    TouchableOpacity, StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
class JoinRoom extends React.Component {
    constructor(props) {
        this.state = {
            name: ''
        }
        this._onChangeName = this._onChangeName.bind(this);
        this._toChatRoom = this._toChatRoom.bind(this);
    }
    static navigationOptions = {
        title: 'Welcome to Chat Group',
    };

    _onChangeName = (text) => {
        this.setState({
            name: text
        });
    };
    _toChatRoom = () => {
        firebase.auth().signInAnonymously().then((user) => {
            AsyncStorage.setItem('name', this.state.name);
            this.props.navigation.navigate('ChatRoom');
        }).catch((err) => alert(err));
    }
    render() {
        return (
            <View style={styles.container} >
                <Text>
                    ENTER YOUR NAME :
                </Text>
                <TextInput
                    style={styles.inputname}
                    placeholder=""
                    onChangeText={(text) => this._onChangeName(text)}
                />
                <TouchableOpacity
                    onPress={() => this._toChatRoom()}
                >
                    <Text style={styles.textButoon} >
                        Join Now
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
};
export default JoinRoom;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        paddingBottom: 15
    },
    inputname: {
        borderColor: "#A5A5A5",
        borderWidth: 0.5,
        padding: 8,
        width: '100%',
        marginBottom: 15,
        marginTop: 15
    },
    textButoon: {
        fontWeight: 'bold'
    }
})