import React, { Component } from "react";
import {
    StyleSheet, TouchableOpacity,
    Text, View, Image,
    Dimensions
} from "react-native";

const { width, height } = Dimensions.get('window')
class ItemsHome extends Component {
    render() {
        let { title, color, icons, onButton } = this.props
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={onButton}
            >
                <View style={[styles.viewLogo,
                {
                    backgroundColor: color,
                }]}>
                    <Image
                        source={icons}
                        style={styles.icon}
                    />
                </View>
                <Text>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default ItemsHome;

const styles = StyleSheet.create({
    item: {
        width: width / 2 - 30,
        height: width / 2 - 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        margin: 10
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
