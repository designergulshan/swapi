import React, { Component } from 'react';
import { View,
  Text,
  StyleSheet,
  Image,
  BackHandler
} from 'react-native';
import { config } from '../config';

export default class PlanetDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name')
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      planet: null
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    
    this.setState({
      planet: null
    })
    
    fetch(`${config.baseUrl}/planets?search=${name}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        planet: res.results[0]
      })
    })
  }
  
  render() {
    const { planet } = this.state;
    
    return(
      <View>
        <View style={style.planetImageContainer}>
          <Image
            style={style.planetImage}
            source={{uri: 'https://cdn.dribbble.com/users/1358412/screenshots/3221153/fantastic_planet_001.jpg'}}
          />
        </View>
        {planet !== null && (
          <View style={style.detailsPane}>
            <Text>Gravity: {planet.gravity}</Text>
            <Text>Orbital Period: {planet.orbital_period}</Text>
            <Text>Population: {planet.population}</Text>
            <View style={style.cardFooter}>
              <Text style={style.footerItem}>{planet.population}</Text>
              <Text style={style.footerItem}>{planet.diameter}</Text>
              <Text style={style.footerItem}>{planet.orbital_period}</Text>
            </View>
          </View>
        )}
      </View>
    )
  }
}

const style = StyleSheet.create({
  card: {
    margin: 5,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    elevation: 2,
    borderWidth: 1,
    shadowRadius: 2,
    borderRadius: 2,
    shadowColor: '#000',
    borderColor: '#ddd',
    borderBottomWidth: 0,
  },
  detailsPane: {
    padding: 10
  },
  planetImageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#000'
  },
  planetImage: {
    width: '100%',
    height: 200
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