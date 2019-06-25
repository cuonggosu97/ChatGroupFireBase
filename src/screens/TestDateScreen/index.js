import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class TestDateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date()
        }
    }
    render() {
        const today = this.state.currentDate.toJSON()
        return (
            <View style={styles.container}>
                <Text> {today} </Text>
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
