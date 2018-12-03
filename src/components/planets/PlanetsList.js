import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Planet from './Planet'

export default PlanetsList = props => {
  _keyExtractor = item => item.name
  
  const { planetsList, navigate } = props;

  return (
    <View style={style.container}>
      { planetsList.length > 0 && <FlatList
        data={planetsList}
        keyExtractor={this._keyExtractor}
        renderItem={({item, index}) => <Planet index={index} planet={item} navigate={navigate} />}
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