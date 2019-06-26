import React, { Component } from 'react';

import {
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button,
    ScrollView,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import TextInputMask from "react-native-text-input-mask";

const { width, height } = Dimensions.get('window')

class TestDateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtWriteNumber: ''
        }
    }
    _onWriteNumber = (extracted) => {
        this.setState({
            txtWriteNumber: extracted
        });
        console.log(this.state.txtWriteNumber)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text>
                        Ahihi
                   </Text>
                </ScrollView>
                <KeyboardAccessoryView
                alwaysVisible={true}
                inSafeAreaView={true}
            >
                <View style={styles.bottomView}  >
                    <TextInputMask
                        ref={'inputText'}
                        style={styles.inputChatText}
                        // editable={typeTextInput.length > 0 ? true : false}
                        keyboardType='number-pad'
                        clearButtonMode='always'
                        value={this.state.txtWriteNumber}
                        onChangeText={(formatted, extracted) => {
                            this._onWriteNumber(extracted)
                        }}
                        // mask={typeTextInput}
                        mask={'[00]x[1000]'}
                    />
                    <TouchableOpacity
                        style={styles.buttonSent}
                        onPress={() => {
                            this.refs.inputText.clear();
                        }}
                    >
                        <Text style={styles.textButton} >
                            Gửi
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAccessoryView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
});

export default TestDateScreen;
