import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    ActivityIndicator,
    FlatList,
    Dimensions,
    RefreshControl
} from 'react-native'

import BaseView from "../../commons/BaseView";
import { ICON_BACK } from '../../commons/IconManagers'
import HeaderFL from "./components/HeaderFL";
import ItemLT from "./components/ItemLT";

const API_KQSX = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fkqxs.net.vn%2Frss-feed%2Fxo-so-mien-bac-xsmb-xstd.rss'
const { width, height } = Dimensions.get('window')

export default class ResultScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            loto: [],
            de: '',
            bacang: '',
            error: '',
            isLoading: true,
            isRefreshing: false
        }
    }

    _getNewsFromServer = async () => {
        await this.setState({ isRefreshing: true })
        try {
            let response = await fetch(API_KQSX);
            let responseJson = await response.json();

            const so1 = responseJson.items[0].content.slice(7, 9).toString();
            const so2 = responseJson.items[0].content.slice(16, 18).toString();
            const so3 = responseJson.items[0].content.slice(25, 27).toString();
            const so4 = responseJson.items[0].content.slice(33, 35).toString();
            const so5 = responseJson.items[0].content.slice(42, 44).toString();
            const so6 = responseJson.items[0].content.slice(50, 52).toString();
            const so7 = responseJson.items[0].content.slice(58, 60).toString();
            const so8 = responseJson.items[0].content.slice(66, 68).toString();
            const so9 = responseJson.items[0].content.slice(74, 76).toString();
            const so10 = responseJson.items[0].content.slice(82, 84).toString();
            const so11 = responseJson.items[0].content.slice(90, 92).toString();
            const so12 = responseJson.items[0].content.slice(97, 99).toString();
            const so13 = responseJson.items[0].content.slice(104, 106).toString();
            const so14 = responseJson.items[0].content.slice(111, 113).toString();
            const so15 = responseJson.items[0].content.slice(119, 121).toString();
            const so16 = responseJson.items[0].content.slice(126, 128).toString();
            const so17 = responseJson.items[0].content.slice(133, 135).toString();
            const so18 = responseJson.items[0].content.slice(140, 142).toString();
            const so19 = responseJson.items[0].content.slice(147, 149).toString();
            const so20 = responseJson.items[0].content.slice(154, 156).toString();
            const so21 = responseJson.items[0].content.slice(161, 163).toString();
            const so22 = responseJson.items[0].content.slice(167, 169).toString();
            const so23 = responseJson.items[0].content.slice(173, 175).toString();
            const so24 = responseJson.items[0].content.slice(179, 181).toString();
            const so25 = responseJson.items[0].content.slice(184, 186).toString();
            const so26 = responseJson.items[0].content.slice(189, 191).toString();
            const so27 = responseJson.items[0].content.slice(194, 196).toString();

            const title = responseJson.items[0].title;
            const de = responseJson.items[0].content.slice(7, 9);
            const bacang = responseJson.items[0].content.slice(6, 9);
            const loto = [so1, so2, so3, so4, so5, so6, so7, so8, so9, so10,
                so11, so12, so13, so14, so15, so16, so17, so18, so19, so20,
                so21, so22, so23, so24, so25, so26, so27].sort()

            this.setState({ de: de, bacang: bacang, loto: loto, isLoading: false, title: title, isRefreshing: false })
        } catch (error) {
            this.setState({ error: 'No internet' })
        }
    }


    componentDidMount() {
        this._getNewsFromServer();
    }

    render() {
        if (this.state.error) {
            return (
                <View style={styles.container}>
                    <Text>
                        {this.state.error}
                    </Text>
                </View>
            )
        } else if (this.state.title.length <= 0 && !this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <Text>
                        Lỗi tải dữ liệu
                    </Text>
                </View>
            )
        } else if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
        return (
            <SafeAreaView style={styles.container2}>
                <BaseView
                    leftIcon={ICON_BACK}
                    onLeftPress={() => this.props.navigation.goBack()}
                    title={'Kết quả'}
                />
                <FlatList
                    ListHeaderComponent={<HeaderFL
                        title={this.state.title}
                        de={this.state.de}
                        bacang={this.state.bacang}
                    />}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._getNewsFromServer}
                        />
                    }
                    contentContainerStyle={styles.contentContainer}
                    style={styles.viewItems}
                    data={this.state.loto}
                    extraData={this.state.loto}
                    numColumns={6}
                    keyExtractor={(item, index) => index + ''}
                    renderItem={({ item, index }) =>
                        <ItemLT
                            item={item}
                            index={index}
                        />
                    }
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        flex: 1,
    },
    viewItems: {
        width,
    },
    contentContainer: {
        width,
        alignItems: 'center'
    }
})
