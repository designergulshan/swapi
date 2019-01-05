import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, BackHandler } from 'react-native';
import Header from '../components/Header';
import PlanetsList from '../components/planets/PlanetsList';
import Loader from '../components/Loader';
import { config } from '../config';
import { mockData } from '../mock/planets';
import _ from 'lodash';

export default class Home extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      planetsList: [],
      fullPlanetsList: [],
      isLoading: true,
      isLoadingMore: false,
      highestPopulation: null,
      nextUrl: null,
      query: ''
    }
  }

  findHighestPopulation = results => {
    if(results.length > 0 && results[0].population !== 'unknown') {
      const maxPopulation = Math.max.apply(Math, results.map( o => o.population !== 'unknown' && o.population))
  
      for (let i = 0; i <= results.length; i++) {
        if(results[i].population == maxPopulation) {
          this.setState({
            highestPopulation: i
          })
          break;
        }
      }
    }
  }

  getAllPlanets = () => {
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

  getMorePlanets = () => {
    const { nextUrl, query } = this.state;

    this.setState({
      isLoadingMore: true
    })

    if(nextUrl !== null && query === '' && !config.mock) {
      setTimeout(() => {
        fetch(nextUrl)
          .then(res => res.json())
          .then(res => {
            this.setPlanets(res)
          })
      }, 500)
    } else {
      this.setState({
        isLoadingMore: false
      })
    }
  }

  setPlanets = res => {
    this.setState(prevState => ({
      isLoading: false,
      isLoadingMore: false,
      planetsList: [...prevState.planetsList, ...res.results],
      fullPlanetsList: [...prevState.planetsList, ...res.results],
      nextUrl: res.next
    }), () => {
      this.findHighestPopulation([...this.state.planetsList, ...res.results]);
    })
  }

  handleSearchInput = query => {
    const { fullPlanetsList } = this.state;

    const filterdQuery = query.toLowerCase();
    const filteredList = fullPlanetsList.filter( item => item.name.toLowerCase().search(filterdQuery) !== -1 && item);
    this.setState({
      planetsList: filteredList,
      query
    }, () => {
      this.findHighestPopulation(this.state.planetsList);
    })
  }

  clearQuery = () => {
    const { fullPlanetsList } = this.state;
    
    this.setState({
      query: '',
      planetsList: fullPlanetsList
    }, () => {
      this.findHighestPopulation(this.state.planetsList);
    })
  }
  
  componentDidMount() {
    this.getAllPlanets()
    
    // disable login screen redirection
    BackHandler.addEventListener('hardwareBackPress', () => true)
  }

  render() {
    const { navigation } = this.props;
    const { planetsList, isLoading, query, highestPopulation, isLoadingMore } = this.state;

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
          handleSearchInput={this.handleSearchInput}
          clearQuery={this.clearQuery}
        />
        
        {isLoading && <Loader />}

        <PlanetsList
          planetsList={planetsList}
          highest={highestPopulation}
          navigate={navigation.navigate}
          getMorePlanets={this.getMorePlanets}
          isLoadingMore={isLoadingMore}
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
