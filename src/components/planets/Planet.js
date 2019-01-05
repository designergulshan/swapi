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
    const { planet, index, highest } = this.props;
    const cardStyle = index === 0 ? [{marginTop: 30}, style.card] : style.card
    const highlight = index === highest;

    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.planetDetails()}>
        <View style={highlight ? [cardStyle, style.highlight] : cardStyle}>
          <View style={style.planetImageContainer}>
            <Image
              style={style.planetImage}
              source={{uri: 'https://cdn.dribbble.com/users/1358412/screenshots/3221153/fantastic_planet_001.jpg'}}
            />
          </View>
          <Text style={style.nameLabel}>{planet.name}</Text>
          <Text>Gravity: {planet.gravity}</Text>
          <Text>Orbital Period: {planet.orbital_period}</Text>
          <Text>Population: {planet.population}</Text>
          <Text>Diameter: {planet.diameter}</Text>
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
  highlight: {
    borderColor: '#15769f',
    backgroundColor: '#cdf0ff'
  },
  planetImageContainer: {
    flex: 1,
    width: 317,
    height: 200,
    elevation: 10,
    marginTop: -25,
    borderRadius: 2,
    marginBottom: 10,
    backgroundColor: '#1c1348'
  },
  planetImage: {
    width: 317,
    height: 200,
    borderRadius: 2
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