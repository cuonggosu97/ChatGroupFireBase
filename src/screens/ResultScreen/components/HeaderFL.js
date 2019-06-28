import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')

export default class HeaderFL extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { title, de, bacang } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={styles.txtTitle}>
                        {title}
                    </Text>
                </View>
                <View style={styles.viewDe}>
                    <View style={styles.txtDe}>
                        <Text style={styles.txtBold}>
                            Ba càng:
                        </Text>
                    </View>
                    <View style={styles.numberDe}>
                        <Text style={styles.txtRed}>
                            {bacang}
                        </Text>
                    </View>
                </View>
                <View style={styles.viewDe}>
                    <View style={styles.txtDe}>
                        <Text style={styles.txtBold}>
                            Đề:
                        </Text>
                    </View>
                    <View style={styles.numberDe}>
                        <Text style={styles.txtRed}>
                            {de}
                        </Text>
                    </View>
                </View>
                <View style={styles.viewDe}>
                    <View style={styles.txtDe}>
                        <Text style={styles.txtBold}>
                            Lô:
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width,
        paddingVertical: 10
    },
    viewTitle: {
        width,
        alignItems: 'center',
        paddingVertical: 5
    },
    txtTitle: {
        fontWeight: 'bold'
    },
    viewDe: {
        width,
        flexDirection: 'row',
        paddingVertical: 5
    },
    txtDe: {
        flex: 2,
        paddingLeft: 30
    },
    numberDe: {
        flex: 3,
    },
    txtBold: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtRed: {
        fontSize: 16,
        color: 'red'
    }

})
