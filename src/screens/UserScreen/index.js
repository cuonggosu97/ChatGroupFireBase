import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native'

import BaseView from "../../commons/BaseView";
import { ICON_BACK } from '../../commons/IconManagers'

export default class UserScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BaseView
                    leftIcon={ICON_BACK}
                    onLeftPress={() => this.props.navigation.navigate('Home')}
                    title={'Tài khoản'}
                />

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})