import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { config } from '../config';
import Planet from '../components/planets/Planet'
import Header from '../components/Header'
import PlanetList from '../components/planets/PlanetsList'

export default class SearchView extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      planetsList: []
    }
  }
  
  _keyExtractor = item => item.name
  
  componentDidMount() {
    const { navigation } = this.props;
    const query = navigation.getParam('query');

    // enable loader
    fetch(`${config.baseUrl}/planets?search=${query}`)
    .then(res => res.json())
    .then(res => {
      console.log
      this.setState({
          planetsList: res.results,
          // disable loader
        })
      })
  }

  render() {
    const { planetsList } = this.state;
    const { navigation } = this.props;
    const query = navigation.getParam('query');
    
    return (
      <View style={style.container}>
        <Header
          query={query}
          findPlanet={this.findPlanet}
          getAllPlanets={this.getAllPlanets}
          navigation={navigation}
          isBackRequire={true}
        />

        <PlanetsList
          planetsList={planetsList}
          navigate={navigation.navigate}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#fff',
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