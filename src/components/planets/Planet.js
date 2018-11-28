import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDate } from '../../utilities'

export default Planet = ({ planet }) => {
  return (
    <View style={style.container}>
      <Text style={style.heading2}>{planet.name}</Text>
      <Text>Since: {getDate(planet.created)}</Text>
      <Text>Gravity: {planet.gravity}</Text>
      <Text>gravity: {planet.gravity}</Text>
      <Text>Orbital Period: {planet.orbital_period}</Text>
      <Text>Population: {planet.population}</Text>
      <View style={style.cardFooter}>
        <Text style={style.footerItem}>{planet.population}</Text>
        <Text style={style.footerItem}>{planet.diameter}</Text>
        <Text style={style.footerItem}>{planet.orbital_period}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
  },
  cardFooter: {
    backgroundColor: '#ddd',
    flexDirection: 'row',
    margin: -10,
    marginTop: 10,
    padding: 10,
    borderBottomEndRadius: 4,
    borderBottomLeftRadius: 4 
  },
  footerItem: {
    flex: 1,
    textAlign: 'center'
  },
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#000',
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    elevation: 2,
    shadowOpacity: 1.0,
    shadowColor: '#000',
    borderRadius: 4,
    shadowOffset: { width: 0, height: 2 }
  },
  heading2: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'sans-serif-light',
    marginBottom: 10,
  }
})