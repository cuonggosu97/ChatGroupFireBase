import React, { Component } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View
} from 'react-native'

import * as Icons from '../../commons/IconManagers'
import ItemsHome from './components/ItemsHome'
const { width, height } = Dimensions.get('window')


export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.viewItem}>
            <ItemsHome title="Ghi" color='rgb(251,202,58)' icons={Icons.ICON_WRITE} />
            <ItemsHome title="Kết quả" color="rgb(83, 212, 191)" icons={Icons.ICON_RESULT} />
            <ItemsHome title="Thống kê" color="rgb(52, 202, 223)" icons={Icons.ICON_STATISTICAL} />
            <ItemsHome title="Doanh thu" color="rgb(255, 130, 85)" icons={Icons.ICON_REVENUE} />
          </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },

  viewItem: {
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10
  }
})

