import React from 'react';
import { StyleSheet, View, FlatList, Text, TouchableHighlight } from 'react-native';
import Planet from './Planet'

export default PlanetsList = props => {
  _keyExtractor = item => item.name
  
  const { planetsList } = props;

  console.log(planetsList)
  return (
    <View style={style.container}>
      { planetsList && <FlatList
        data={planetsList}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => <Planet planet={item} />}
      /> }
    </View>
  )
}

const style = StyleSheet.create({
  container: {
   flex: 1,
  },
  btnDefault: {
    backgroundColor: '#222',
    height: 40,
  },
  btnDefaultText: {
    color: '#fff',
    textAlign: 'center'
  },
})