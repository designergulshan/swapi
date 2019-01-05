import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import Planet from './Planet'

export default PlanetsList = props => {
  _keyExtractor = item => item.name
  
  const {
    planetsList,
    navigate,
    highest,
    getMorePlanets,
    isLoadingMore
  } = props;

  return (
    <View style={style.container}>
      { planetsList.length > 0 && <FlatList
        data={planetsList}
        keyExtractor={this._keyExtractor}
        onEndReached={getMorePlanets}
        onEndThreshold={100}
        renderItem={({item, index}) => (
          <Planet
            index={index}
            planet={item}
            navigate={navigate}
            highest={highest}
          />
        )}
      /> }
      {isLoadingMore && <View style={style.footerLoader}>
        <ActivityIndicator size="small" color="#fff" />
      </View>}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
   flex: 1,
  },
  footerLoader: {
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2
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