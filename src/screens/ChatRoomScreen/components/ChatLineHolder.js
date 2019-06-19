import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ChatLineHolder = (props) => {
    return (
        <View style={styles.container} >
            <Text style={styles.chatText} >{props.sender}</Text>
            <Text>{props.chatContent}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '50%',
        alignItems: 'flex-start',
        padding: 8,
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    },
    chatText: {
        color: '#005ce6',
        marginBottom: 5
    }
})