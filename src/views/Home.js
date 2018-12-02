import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from '../components/Header';
import PlanetsList from '../components/planets/PlanetsList';
import Loader from '../components/Loader';
import { config } from '../config'
import { mockData } from '../mock/planets'

export default class Home extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      planetsList: [],
      loader: true
    }
  }

  componentDidMount() {
    this.getAllPlanets()
  }

  getAllPlanets = () => {
    this.setState({
      loader: true
    })

    if(config.mock) {
      this.setPlanets(mockData)
    } else {
      fetch(`${config.baseUrl}/planets/`)
        .then(res => res.json())
        .then(res => {
          this.setPlanets(res)
        })
    }
  }

  setPlanets = res => {
    this.setState({
      loader: false,
      planetsList: res.results
    })
  }

  render() {
    const { navigate } = this.props.navigation
    const { navigation } = this.props;
    const { planetsList, loader, query } = this.state;

    return (
      <View style={style.container}>
        <StatusBar
          backgroundColor="#eee"
          barStyle="dark-content"
          hidden={false}
        />
        
        <Header
          query={query}
          findPlanet={this.findPlanet}
          getAllPlanets={this.getAllPlanets}
          navigation={navigation}
        />
        
        {loader && <Loader />}

        <PlanetsList
          planetsList={planetsList}
          navigate={navigate}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
})
