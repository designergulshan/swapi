import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default Headers = props => {
  return (
    <View style={style.header}>
      <Text style={style.logo}>SWAPI</Text>
      <Text style={style.userInfo}>{props.user}</Text>
      <View style={style.userIcon} />
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
    flexDirection: 'row',
    shadowColor: '#000',
    justifyContent: 'center',
    shadowOffset: { width: 2, height: 2 }
  },
  logo: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000'
  },
  userInfo: {
    flex: 1,
    textAlign: 'right'
  },
  userIcon: {
    width: 22,
    height: 22,
    borderRadius: 13,
    backgroundColor: '#ddd',
    marginLeft: 5
  }
});