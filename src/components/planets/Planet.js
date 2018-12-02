import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Planet = ({ planet }) => {
  
  console.log(planet)
  return (
    <View style={style.container}>
      <Text style={style.nameLabel}>{planet.name}</Text>
      <Text>Gravity: {planet.gravity}</Text>
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
  container: {
    backgroundColor: '#fff',
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
  cardFooter: {
    backgroundColor: '#ddd',
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
  },
  footerItem: {
    flex: 1,
    textAlign: 'center'
  },
  nameLabel: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
    fontWeight: '200',
  }
})