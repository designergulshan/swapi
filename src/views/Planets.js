import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header'

export default Planets = () => {
  return (
    <View style={style.container}>
      <Header />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1
  }
})
