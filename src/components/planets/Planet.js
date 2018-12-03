import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Planet extends Component {
  planetDetails = color => {
    this.props.navigate('PlanetDetailsTR', { name: this.props.planet.name, color})
  }
  
  render() {
    const { planet, index } = this.props;
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    if(randomColor.length < 6) {
      randomColor = Math.floor(Math.random()*16777215).toString(16);
    }
    console.log(randomColor)
    const cardStyle = index === 0 ? [{marginTop: 30}, style.card] : style.card

    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.planetDetails(randomColor)}>
        <View style={[{borderColor: `#${randomColor}`}, cardStyle]}>
          <View style={[{backgroundColor: `#${randomColor}`}, style.planetImage]} />
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
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    shadowRadius: 2,
    borderRadius: 2,
    shadowColor: '#000',
    backgroundColor: '#fff',
  },
  planetImage: {
    flex: 1,
    width: 318,
    height: 200,
    elevation: 10,
    marginTop: -25,
    borderRadius: 2,
    marginBottom: 10,
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