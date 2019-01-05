import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default Loader = () => {
  return (
    <View style={style.container}>
      <ActivityIndicator size="small" color="#fff" />
      <Text style={style.label}>loading...</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // top: 52,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    opacity: .85
  },
  label: {
    color: '#fff'
  }
})