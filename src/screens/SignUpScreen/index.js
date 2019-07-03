import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Button,
    ScrollView
} from 'react-native'

import Amplify, { Auth } from 'aws-amplify'
import config from '../../../aws-exports'
Amplify.configure(config)

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            phone_number: '',
            password: '',
            authCode: '',
            acces: '',
            coefficient: '',
            user: {}
        }
    }

    onChangText = (key, extracted) => {
        this.setState({
            [key]: extracted
        })
    }

    signUp() {
        const { username, password, email, phone_number, acces, branch, coefficient } = this.state
        console.log(username)
        Auth.signUp({
            username,
            password,
            attributes: {
                phone_number,
            },
            acces,
            coefficient
        })
            .then(() => console.log('user sign up success!!'))
            .catch(err => console.log('error signing up user: ', err))
    }


    confirmSignUp() {
        Auth.confirmSignUp(this.state.username, this.state.authCode)
            .then(() => console.log('confirm user sign up success!!'))
            .catch(err => console.log('error confirming singning up user: ', err))
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    placeholder={'Username'}
                    onChangeText={(val) => {
                        this.onChangText('username', val)
                    }}
                />
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    placeholder={'Password'}
                    onChangeText={(val) => {
                        this.onChangText('password', val)
                    }}
                />
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    placeholder={'Phone number'}
                    onChangeText={(val) => {
                        this.onChangText('phone_number', val)
                    }}
                />
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    placeholder={'Acces'}
                    onChangeText={(val) => {
                        this.onChangText('acces', val)
                    }}
                />
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    placeholder={'Coefficient'}
                    onChangeText={(val) => {
                        this.onChangText('coefficient', val)
                    }}
                />
                <Button
                    title='Sign Up'
                    onPress={this.signUp.bind(this)}
                />
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    placeholder={'Confirmation Code'}
                    onChangeText={(val) => {
                        this.onChangText('authCode', val)
                    }}
                />
                <Button
                    title='Confirm Sign Up'
                    onPress={this.confirmSignUp.bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: 'grey',
        margin: 10
    }
});
