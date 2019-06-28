import React, { PureComponent } from 'react'
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Alert
} from 'react-native'
import TextInputMask from "react-native-text-input-mask";
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'
import md5 from "md5";
import firebase from "react-native-firebase";

import data from "../../../datas/dataDT";

const { width, height } = Dimensions.get('window')


export default class BottomView extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            txtWriteNumber: '',
            isDelete: false
        }
        this._onWriteNumber = this._onWriteNumber.bind(this)
        this._onSentData = this._onSentData.bind(this);
        this._onDelete = this._onDelete.bind(this);

    }
    _onWriteNumber = (extracted) => {
        this.setState({
            txtWriteNumber: extracted
        });
    }

    _onSentData = async () => {
        await data.map((e, index) => {
            if (e.choosed === true) {
                switch (index + 1) {
                    case 1:
                        if (this.state.txtWriteNumber.length > 3) {
                            firebase.database().ref('/Đề').push({
                                number1: this.state.txtWriteNumber.slice(0, 2),
                                money: this.state.txtWriteNumber.slice(2)
                            })
                            this._onDelete();
                        } else {
                            Alert.alert('Nhập sai', 'Nhập lại')
                        }
                        break;
                    case 2:
                        if (this.state.txtWriteNumber.length > 1) {
                            firebase.database().ref('/Đề đầu').push({
                                number1: this.state.txtWriteNumber.slice(0, 1),
                                money: this.state.txtWriteNumber.slice(1)
                            })
                            this._onDelete();
                        } else {
                            Alert.alert('Nhập sai', 'Nhập lại')
                        }
                        break;
                    case 3:
                        if (this.state.txtWriteNumber.length > 1) {
                            firebase.database().ref('/Đề đít').push({
                                number1: this.state.txtWriteNumber.slice(0, 1),
                                money: this.state.txtWriteNumber.slice(1)
                            })
                            this._onDelete();
                        } else {
                            Alert.alert('Nhập sai', 'Nhập lại')
                        }
                        break;
                    case 4:
                        if (this.state.txtWriteNumber.length > 4) {
                            firebase.database().ref('/Ba càng').push({
                                number1: this.state.txtWriteNumber.slice(0, 3),
                                money: this.state.txtWriteNumber.slice(3)
                            })
                            this._onDelete();
                        } else {
                            Alert.alert('Nhập sai', 'Nhập lại')
                        }
                        break;
                    case 5:
                        if (this.state.txtWriteNumber.length > 3) {
                            firebase.database().ref('/Lô').push({
                                number1: this.state.txtWriteNumber.slice(0, 2),
                                money: this.state.txtWriteNumber.slice(2)
                            })
                            this._onDelete();
                        } else {
                            Alert.alert('Nhập sai', 'Nhập lại')
                        }
                        break;
                    case 6:
                        if (this.state.txtWriteNumber.length > 5) {
                            firebase.database().ref('/Xiên 2').push({
                                number1: this.state.txtWriteNumber.slice(0, 2),
                                number2: this.state.txtWriteNumber.slice(2, 4),
                                money: this.state.txtWriteNumber.slice(4)
                            })
                            this._onDelete();
                        } else {
                            Alert.alert('Nhập sai', 'Nhập lại')
                        }
                        break;
                    case 7:
                        if (this.state.txtWriteNumber.length > 7) {
                            firebase.database().ref('/Xiên 3').push({
                                number1: this.state.txtWriteNumber.slice(0, 2),
                                number2: this.state.txtWriteNumber.slice(2, 4),
                                number3: this.state.txtWriteNumber.slice(4, 6),
                                money: this.state.txtWriteNumber.slice(6)
                            })
                            this._onDelete();
                        } else {
                            Alert.alert('Nhập sai', 'Nhập lại')
                        }
                        break;
                    case 8:
                        alert('Dây')
                        break;
                    case 9:
                        alert('Chập')
                        break;
                    default:
                        null
                }
            }
        })
    }

    _onDelete = async () => {
        await this.setState({ isDelete: true });
        await this.input.clear();
        await console.log(this.state.isDelete);
        await this.setState({ isDelete: false });
        await console.log(this.state.isDelete);
    }

    render() {
        const { typeTextInput } = this.props
        return (
            <KeyboardAccessoryView
                alwaysVisible={true}
                inSafeAreaView={true}
            >
                <View style={styles.bottomView}  >
                    <TextInputMask
                        refInput={ref => { this.input = ref }}
                        style={styles.inputChatText}
                        editable={typeTextInput.length > 0 ? true : false}
                        keyboardType='number-pad'
                        clearButtonMode='always'
                        value={this.state.txtWriteNumber}
                        onChangeText={(formatted, extracted) => {
                            this._onWriteNumber(extracted)
                        }}
                        mask={
                            this.state.isDelete === false ? typeTextInput : null
                        }
                    />
                    <TouchableOpacity
                        style={styles.buttonSent}
                        onPress={() => this._onSentData()}
                    >
                        <Text style={styles.textButton} >
                            Gửi
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAccessoryView>
        )
    }
}

const styles = StyleSheet.create({
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
        borderColor: 'grey',
        backgroundColor: 'white'
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
    },
})
