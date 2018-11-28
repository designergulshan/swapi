import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default Headers = () => {
  return (
    <View style={style.header}>
      <Text style={style.logo}>SWAPI</Text>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    padding: 14,
    backgroundColor: '#fff',
    borderBottomColor: '#000',
    elevation: 2,
    shadowOpacity: 1.0,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 }
  },
  logo: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000'
  }
});