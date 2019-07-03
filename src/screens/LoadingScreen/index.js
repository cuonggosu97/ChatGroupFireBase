import React, { Component } from 'react'
import {
    Text, StyleSheet, View,
    ActivityIndicator
} from 'react-native'

import Amplify, { Auth } from 'aws-amplify'
import config from '../../../aws-exports'
Amplify.configure(config)

export default class LoadingScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate(Auth.user ? 'Home' : 'Login')
        }, 1000)
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    size='large'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
