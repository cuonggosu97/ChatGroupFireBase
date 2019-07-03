import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
    Dimensions,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    SafeAreaView,
    Alert
} from 'react-native'
import TextInputMask from "react-native-text-input-mask";

import Amplify, { Auth } from 'aws-amplify'
import config from '../../aws-exports'
Amplify.configure(config)

import BaseView from "./BaseView";
import { ICON_BACK } from './IconManagers'

const { width, height } = Dimensions.get('window')

export default class OTPScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.navigation.state.params,
            authCode: '',
            isButton: false
        }
    }

    _onChangText = (extracted) => {
        this.setState({
            authCode: extracted
        })
        if (extracted.length === 6) {
            this.setState({ isButton: true })
        } else {
            this.setState({ isButton: false })
        }
    }

    confirmOTP = () => {
        if (this.state.data.screen === 1) {
            Auth.confirmSignIn(this.state.data.user, this.state.authCode)
                .then(() => this.props.navigation.navigate('Home'))
                .catch(err => Alert.alert('Lỗi xác nhận OTP', err))
        } else {
            Auth.confirmSignUp(this.state.username, this.state.authCode)
                .then(() => this.props.navigation.navigate('User'))
                .catch(err => Alert.alert('Lỗi xác nhận OTP', err))
        }

    }

    _onPressAlert = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    behavior={(Platform.OS === 'ios') ? "padding" : null}
                    keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
                    style={styles.container}
                >
                    <TouchableWithoutFeedback
                        style={styles.container}
                        onPress={Keyboard.dismiss}
                    >
                        <View style={styles.container}>
                            <BaseView
                                leftIcon={ICON_BACK}
                                onLeftPress={() => this.props.navigation.goBack()}
                                title={'Xác nhận OTP'}
                            />
                            <View style={styles.viewContent}>
                                <Text style={styles.txtOTP}>
                                    Chúng tôi đã gửi mã OTP đến số điện thoại
                            </Text>
                                <Text>
                                    {this.state.data.user.phone_number}
                                </Text>
                            </View>
                            <View style={styles.viewContent}>
                                <TextInputMask
                                    refInput={ref => { this.input = ref }}
                                    textAlign={'center'}
                                    style={styles.input}
                                    autoCapitalize='none'
                                    underlineColorAndroid='transparent'
                                    placeholder={'● ● ● ● ● ●'}
                                    placeholderTextColor='rgba(190,190,190, 0.8)'
                                    keyboardType='number-pad'
                                    autoCorrect={false}
                                    onChangeText={(text) => { this._onChangText(text) }}
                                    value={this.state.otp}
                                    onChangeText={(formatted, extracted) => {
                                        this._onChangText(extracted)
                                    }}
                                    mask={'[0] [0] [0] [0] [0] [0]'}
                                />
                            </View>
                            <View style={styles.viewContent}>
                                <TouchableOpacity
                                    disabled={this.state.isButton ? false : true}
                                    style={[styles.button, { opacity: this.state.isButton ? 1 : 0.5 }]}
                                    onPress={this.confirmOTP}
                                >
                                    <Text style={styles.txtButton}>
                                        Xác nhận
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
        flex: 1
    },
    viewContent: {
        width,
        alignItems: 'center',
        marginTop: 50
    },
    txtOTP: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3
    },
    input: {
        height: 40,
        width: 150,
        backgroundColor: 'white',
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
    },
    button: {
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(211,211,211)',
    },
    txtButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
})
