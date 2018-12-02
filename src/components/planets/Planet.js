import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default class Planet extends Component {
  planetDetails = () => {
    this.props.navigate('PlanetDetailsTR', { name: this.props.planet.name})
  }
  
  render() {
    const { planet } = this.props;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    return (
      <TouchableOpacity activeOpacity={1} onPress={this.planetDetails}>
        <View style={style.card}>
          <Image
            style={style.planetImage}
            // source={{uri: `https://via.placeholder.com/318x200/${randomColor}/${randomColor}`}}
            source={{uri: `https://via.placeholder.com/318x200/000/000`}}
          />
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
      </TouchableOpacity>
    )
  }
}

const style = StyleSheet.create({
  card: {
    margin: 5,
    padding: 10,
    elevation: 2,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    shadowRadius: 2,
    borderRadius: 2,
    shadowColor: '#000',
    borderColor: '#ddd',
    borderBottomWidth: 0,
    backgroundColor: '#fff',
  },
  planetImage: {
    flex: 1,
    width: 318,
    height: 200,
    borderRadius: 2,
    marginBottom: 10
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
    fontSize: 24,
    color: '#000',
    marginBottom: 10,
    fontWeight: '200',
    fontFamily: 'sans-serif-condensed'
  }
})