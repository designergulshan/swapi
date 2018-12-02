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
      loader: true,
      query: '',
      isSearched: false
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
      fetch('https://swapi.co/api/planets/')
        .then(res => res.json())
        .then(res => {
          this.setPlanets(res)
        })
    }
  }

  setPlanets = res => {
    this.setState({
      loader: false,
      isSearched: false,
      planetsList: res.results
    })
  }

  handleSearchInput = text => {
    this.setState({
      query: text
    })
  }

  findPlanet = () => {
    this.setState({
      loader: true,
    })
    
    fetch(`https://swapi.co/api/planets?search=${this.state.query}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        planetsList: res.results,
        loader: false,
        query: '',
        isSearched: true
        })
      })
  }

  render() {
    // const user = this.props.navigation.getParam('user')
    const { planetsList, loader, query, isSearched } = this.state;

    return (
      <View style={style.container}>
        <StatusBar
          backgroundColor="#eee"
          barStyle="dark-content"
          hidden={false}
        />
        
        <Header
          query={query}
          handleSearchInput={this.handleSearchInput}
          findPlanet={this.findPlanet}
          getAllPlanets={this.getAllPlanets}
          isSearched={isSearched}
        />
        
        {loader && <Loader />}

        <PlanetsList planetsList={planetsList} />
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
