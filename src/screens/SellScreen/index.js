import React, { Component } from 'react'
import {
    Text, StyleSheet, View,
    FlatList, SafeAreaView,
    Dimensions, TextInput
} from 'react-native'

import data from "../../datas/dataDT";
import ItemsTitle from "./components/ItemsTitle";
import ItemsMoney from "./components/ItemsMoney";

const { width, height } = Dimensions.get('window')

export default class SellComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: data,
            money: data[0].money,
            cardNumber: ''
        }
    }

    _onPressTitle = (item) => {
        data.map((e) => {
            if (item.title === e.title) {
                return { ...e.choosed = true }
            } else {
                return { ...e.choosed = false }
            }
        })
        this.setState({ dataList: data })
        this.setState({ money: item.money })
        console.log(this.state.dataList)

    }

    _onPressMoney = (item) => {
        data[item].money.map((e) => {
            if (item.title === e.title) {
                return { ...e.choosed = true }
            } else {
                return { ...e.choosed = false }
            }
        })
        this.setState({ money: data[item].money })
        console.log(this.state.dataList)
    }

    handleCardNumber = (text) => {
        let formattedText = text.split(' ').join('');
        if (formattedText.length > 0) {
            formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        this.setState({ cardNumber: formattedText });
        return formattedText;
    }

    _inputEmail = (text) => {
        this.setState({ cardNumber: text })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* <FlatList
                    style={styles.viewTitle}
                    scrollEnabled={false}
                    data={this.state.dataList}
                    extraData={this.state}
                    numColumns={2}
                    keyExtractor={(item, index) => index + ''}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemsTitle
                                item={item}
                                index={index}
                                onPress={this._onPressTitle}
                            />
                        )
                    }
                    }
                /> */}
                <FlatList
                    style={styles.viewMoney}
                    ListHeaderComponent={() => {
                        return (
                            <View style={styles.viewEditMoney}>
                                <Text>
                                    Số
                                </Text>
                                <TextInput
                                    style={styles.inputMoney}
                                    keyboardType='number-pad'
                                    autoCapitalize='none'
                                    // autoCompleteType='off'
                                    autoCorrect={false}
                                    multiline={true}
                                    textAlignVertical='top'
                                    returnKeyType = 'next'
                                    // onChangeText={this._inputEmail}
                                    // value={this.state.cardNumber}
                                />
                            </View>
                        )
                    }}
                    // scrollEnabled={false}
                    // data={this.state.money}
                    // extraData={this.state}
                    // numColumns={3}
                    // keyExtractor={(item, index) => index + ''}
                    // renderItem={({ item, index }) => {
                    //     return (
                    //         <ItemsMoney
                    //             item={item}
                    //             index={index}
                    //             onPress={this._onPressMoney}
                    //         />
                    //     )
                    // }
                    // }
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#888888'
    },
    viewTitle: {
        width,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    viewMoney: {
        width,
        padding: 10,
        backgroundColor: 'white'
    },
    viewEditMoney: {
        width: width - 40,
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    inputMoney: {
        width: width - 100,
        height: 150,
        borderWidth: 1,
        borderColor: 'grey',
    }
})
