import React, { Component } from "react";
import {
    StyleSheet, TouchableOpacity,
    Text, View, Image,
    Dimensions
} from "react-native";

const { width, height } = Dimensions.get('window')
class ItemsHome extends Component {
    render() {
        const { item, index, onPress } = this.props
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => onPress(index)}
            >
                <View style={[styles.viewLogo,
                {
                    backgroundColor: item.color,
                }]}>
                    <Image
                        source={item.icons}
                        style={styles.icon}
                    />
                </View>
                <Text>
                    {item.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default ItemsHome;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        // backgroundColor: 'red'
    },
    viewLogo: {
        width: 100,
        height: 100,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    icon: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
})
