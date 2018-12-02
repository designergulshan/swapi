import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Loader = () => {
  return (
    <View style={style.container}>
      <Text style={style.label}>Loading...</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    top: 52,
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    opacity: .8
  },
  label: {
    color: '#fff'
  }
})