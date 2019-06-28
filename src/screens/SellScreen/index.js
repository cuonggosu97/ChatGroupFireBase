import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
} from 'react-native'

import data from "../../datas/dataDT";
import ItemsTitle from "./components/ItemsTitle";
import BaseView from "../../commons/BaseView";
import BottomView from "./components/BottomView";
import { ICON_BACK } from "../../commons/IconManagers";

const { width, height } = Dimensions.get('window')

export default class SellComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: data,
            txtWriteNumber: '',
            typeTextInput: ''
        }
    }

    _onPressTitle = (item) => {
        data.map((e) => {
            if (item.title === e.title) {
                return { ...e.choosed = true }
            } else {
                return {
                    ...e.choosed = false,
                }
            }
        })
        this.setState({ dataList: data })
        this.setState({ txtWriteNumber: null })
        console.log(this.state.dataList)

    }

    _onSetType = (index) => {
        switch (index + 1) {
            case 1:
                this.setState({ typeTextInput: '[00]x[00000]' });
                break;
            case 2:
                this.setState({ typeTextInput: '[0]x[00000]' })
                break;
            case 3:
                this.setState({ typeTextInput: '[0]x[00000]' })
                break;
            case 4:
                this.setState({ typeTextInput: '[000]x[00000]' })
                break;
            case 5:
                this.setState({ typeTextInput: '[00]x[00000]' })
                break;
            case 6:
                this.setState({ typeTextInput: '[00] [00]x[00000]' })
                break;
            case 7:
                this.setState({ typeTextInput: '[00] [00] [00]x[00000]' })
                break;
            case 8:
                this.setState({ typeTextInput: '[0]x[00000]' })
                break;
            case 9:
                this.setState({ typeTextInput: '[0]x[00000]' })
                break;
            default:
                null
        }
    }

    componentDidMount() {
        data.map((e) => {
            return { ...e.choosed = false }
        })
        this.setState({ dataList: data })
        this.setState({ typeTextInput: '' })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BaseView
                    leftIcon={ICON_BACK}
                    onLeftPress={() => this.props.navigation.goBack()}
                    title={'Ghi'}
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
                                onSetType={this._onSetType}
                            />
                        )
                    }
                    }
                />
                <BottomView
                    typeTextInput={this.state.typeTextInput}
                />

            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    viewTitle: {
        width,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
})
