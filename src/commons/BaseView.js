import React, { PureComponent } from 'react'
import {
    StyleSheet, SafeAreaView,
    View, TouchableOpacity,
    Image, Text
} from 'react-native'

class BaseView extends PureComponent {

    render() {
        const { leftIcon, rightIcon, title, onLeftPress, onRightPress, children } = this.props;
        return (
            <View style={styles.viewHeader}>
                <TouchableOpacity
                    onPress={onLeftPress}
                    style={styles.viewIcon}
                    activeOpacity={0.7}
                >
                    <Image
                        source={leftIcon || Icons.back}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <Text style={styles.title}>
                    {title}
                </Text>

                <TouchableOpacity
                    onPress={onRightPress}
                    style={styles.viewIcon}
                    activeOpacity={0.7}
                >
                    <Image
                        source={rightIcon}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                {children}
            </View>

        )
    }

}

export default BaseView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    viewHeader: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderColor: '#7c7c7c'
    },
    viewIcon: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    viewLogo: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',

    }
})