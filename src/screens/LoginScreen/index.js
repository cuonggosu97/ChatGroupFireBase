import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    StatusBar,
    TextInput,
    SafeAreaView,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    Alert
} from "react-native";

import Amplify, { Auth } from 'aws-amplify'
import config from '../../../aws-exports'
Amplify.configure(config)

const { width, height } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            user: {},

        }
    }

    _onChangText = (key, extracted) => {
        this.setState({
            [key]: extracted
        })
    }

    signIn() {
        const { username, password } = this.state
        Auth.signIn(username, password)
            .then(user => {
                this.setState({ user })
                console.log('user sign in success!!')
                alert(user)
            })
            .then(() => {
                this.props.navigation.navigate(
                    'OTP',
                    {
                        screen: '1',
                        user: this.state.user
                    }
                )
            })
            .catch(err => Alert.alert('Lỗi đăng nhập', err))
    }

    testSentData = () => {
        alert(this.state.username)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='dark-content' />
                <KeyboardAvoidingView
                    behavior={(Platform.OS === 'ios') ? "padding" : null}
                    keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
                    style={styles.container}>
                    <TouchableWithoutFeedback
                        style={styles.container}
                        onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={styles.viewLogo}>
                                <View style={styles.logo}>

                                </View>
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.txtLogin}>
                                    Tên đăng nhập:
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize='none'
                                    clearButtonMode='always'
                                    underlineColorAndroid='transparent'
                                    keyboardType='default'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                    onChangeText={(val) => {
                                        this._onChangText('username', val)
                                    }}
                                />
                                <Text style={styles.txtLogin}>
                                    Mật khẩu:
                                </Text>
                                <TextInput
                                    ref={'txtPassword'}
                                    style={styles.input}
                                    autoCapitalize='none'
                                    clearButtonMode='always'
                                    underlineColorAndroid='transparent'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    onChangeText={(val) => {
                                        this._onChangText('password', val)
                                    }}
                                />
                                <TouchableOpacity
                                    style={styles.buttonContainer}
                                    onPress={this.signIn.bind(this)}
                                >
                                    <Text style={styles.buttonText}>
                                        Đăng nhập
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewLogo: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: 90,
        height: 90,
        borderRadius: 12,
        backgroundColor: 'rgba(138, 191, 252, 0.8)',
    },
    infoContainer: {
        flex: 2,
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
        paddingTop: 20
    },
    txtLogin: {
        fontSize: 16,
        marginBottom: 5
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 10,
        paddingLeft: 5,
        paddingLeft: 5,
        borderRadius: 10,
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15,
        marginTop: 20
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32,53,70)',
        fontWeight: 'bold',
        fontSize: 18
    }
}) 