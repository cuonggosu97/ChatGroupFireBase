import React, { Component } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View, FlatList
} from 'react-native'

import * as Icons from '../../commons/IconManagers'
import ItemsHome from './components/ItemsHome'

const { width, height } = Dimensions.get('window')
const homes = [
  { title: "Ghi", color: 'rgb(251,202,58)', icons: Icons.ICON_WRITE },
  { title: "Kết quả", color: "rgb(83, 212, 191)", icons: Icons.ICON_RESULT },
  { title: "Thống kê", color: "rgb(52, 202, 223)", icons: Icons.ICON_STATISTICAL },
  { title: "Tài khoản", color: "rgb(255, 130, 85)", icons: Icons.ICON_USER },
]


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this._onPressHome = this._onPressHome.bind(this)
  }

  _onPressHome(index) {
    switch (index + 1) {
      case 1:
        this.props.navigation.navigate('Sell')
        break;
      case 2:
        this.props.navigation.navigate('Result')
        break;
      case 3:
        this.props.navigation.navigate('Statistical')
        break;
      case 4:
        this.props.navigation.navigate('User')
        break;
      default:
        null
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topView} />
        <FlatList
          scrollEnabled={false}
          style={styles.viewItems}
          data={homes}
          numColumns={2}
          keyExtractor={(item, index) => index + ''}
          renderItem={({ item, index }) =>
            <ItemsHome
              item={item}
              index={index}
              onPress={this._onPressHome}
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
    justifyContent: 'center'
  },
  viewItems: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  topView: {
    height: height / 2 - width / 2 + 20
  }
})
