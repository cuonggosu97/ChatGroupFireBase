import React, { Component } from "react";
import {
    StyleSheet, TouchableOpacity,
    Text, View, Image,
} from "react-native";

class ItemLT extends Component {
    render() {
        const { item, index } = this.props
        return (
            <View style={styles.container}>
                <Text>
                    {item}
                </Text>
            </View>
        );
    }
}

export default ItemLT;

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey'
    }
})
