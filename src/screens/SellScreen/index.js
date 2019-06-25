import React, { Component } from 'react'
import {
    Text, StyleSheet, View,
    FlatList, SafeAreaView,
    Dimensions, TextInput,
    TouchableOpacity
} from 'react-native'

import data from "../../datas/dataDT";
import ItemsTitle from "./components/ItemsTitle";
import BaseView from "../../commons/BaseView";
import { ICON_BACK } from "../../commons/IconManagers";

const { width, height } = Dimensions.get('window')
// const ICON_BACK = require('../../assets/icons/back.png')

export default class SellComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: data,
            chatInputContent: ''
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
        console.log(this.state.dataList)

    }

    _onChangeChatInput = (text) => {
        this.setState({
            chatInputContent: text
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BaseView
                    leftIcon={ICON_BACK}
                    onLeftPress={() => this.props.navigation.goBack()}
                />
                <FlatList
                    contentContainerStyle={styles.viewTitle}
                    scrollEnabled={false}
                    data={this.state.dataList}
                    extraData={this.state}
                    horizontal={false}
                    numColumns={3}
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
                />
                <View style={styles.bottomView}  >
                    <TextInput
                        style={styles.inputChatText}
                        value={this.state.chatInputContent}
                        keyboardType='number-pad'
                        onChangeText={(text) => this._onChangeChatInput(text)}
                    />
                    <TouchableOpacity
                        style={styles.buttonSent}
                    >
                        <Text style={styles.textButton} >
                            Gửi
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    viewTitle: {
        width,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },

    bottomView: {
        flexDirection: 'row',
        width,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    inputChatText: {
        height: 35,
        borderRadius: 8,
        width: width - 80,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'grey'
    },
    buttonSent: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: '#0099ff',
        fontSize: 18,
    }
})
