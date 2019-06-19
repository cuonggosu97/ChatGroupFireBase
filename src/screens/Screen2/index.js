import React, { Component } from 'react'
import {
    Text, StyleSheet, SafeAreaView,
    TouchableOpacity
} from 'react-native'

export default class Screen2 extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>
                    Wellcome Screen2
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Text>
                        Go back
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 40,
        width: 120,
        borderWidth: 1,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
