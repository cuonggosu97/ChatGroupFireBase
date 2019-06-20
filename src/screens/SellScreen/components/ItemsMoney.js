import React, { Component } from 'react'
import {
    Text, StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class ItemsTitle extends Component {
    render() {
        const { item, index, onPress } = this.props
        return (
            <TouchableOpacity
                style={[styles.items, { backgroundColor: item.choosed ? 'red' : 'white' }]}
                onPress={() => onPress(item)}
            >
                <Text style={styles.title}>
                    {item.number}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    items: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        margin: 5
    },
    title: {
        fontSize: 16
    }
})
