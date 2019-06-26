import React, { Component } from 'react'
import {
    Text, StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class ItemsTitle extends Component {
    render() {
        const { item, index, onPress, onSetType } = this.props
        return (
            <TouchableOpacity
                style={[styles.items, { backgroundColor: item.choosed ? 'rgb(22, 108, 242)' : ' rgb(231, 235, 239)' }]}
                onPress={() => {
                    onPress(item)
                    onSetType(index)
                }}
            >
                <Text style={[styles.title, { color: item.choosed ? 'white' : 'black' }]}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    items: {
        paddingHorizontal: 20,
        height: 30,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20
    }
})
