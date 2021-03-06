import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  BackHandler,
  AsyncStorage,
  Alert
} from 'react-native';
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
      query: '',
      searchCount: 0,
      name: '',
      loginTime: new Date()
    }
  }

  findHighestPopulation = results => {
    if(results.length > 0) {
      const maxPopulation = Math.max.apply(Math, results.map( o => o.population !== 'unknown' && o.population))
      
      for (let i = 0; i <= results.length; i++) {
        if(results[i].population == maxPopulation) {
          return i;
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

  isExceeded = () => {
    const { loginTime } = this.state;
    const currentTime = new Date();
    const diffMs = (currentTime - loginTime);
    return Math.round(((diffMs % 86400000) % 3600000) / 60000);
  }

  requestSearch =_.debounce(() => {
    const { query, searchCount, name } = this.state;

    if(searchCount > 4 && name !== 'Luke Skywalker' && this.isExceeded() > 0) {
      Alert.alert('Your search limit is exceeded');
      this.setState(prevState => ({
        planetsList: prevState.fullPlanetsList
      }))
    } else {
      this.setState({
        isLoading: true
      })
      fetch(`${config.baseUrl}/planets/?search=${query}`)
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => {
            const highestPopulation = this.findHighestPopulation(res.results)

            return {
              isLoading: false,
              highestPopulation,
              planetsList: res.results,
              searchCount: query !== '' ? prevState.searchCount+1 : prevState.searchCount
            }
          })
        })
    }
  }, 10)

  handleSearchInput = query => {
    this.setState({
      query
    }, this.requestSearch())
  }

  clearQuery = () => {
    this.setState(prevState => {
      const highestPopulation = this.findHighestPopulation(prevState.fullPlanetsList);
      
      return {
        query: '',
        highestPopulation,
        planetsList: prevState.fullPlanetsList
      }
    })
  }

  setPlanets = res => {
    this.setState(prevState => {
      const planetsList = [...prevState.planetsList, ...res.results];
      const highestPopulation = this.findHighestPopulation(planetsList);

      return {
        isLoading: false,
        isLoadingMore: false,
        planetsList,
        highestPopulation,
        fullPlanetsList: planetsList,
        nextUrl: res.next
      }
    })
  }

  getUserInfo = () => {
    AsyncStorage.getItem('user', (err, result) => {
      this.setState({
        name: result
      })
    })
  }
  
  componentDidMount() {
    this.getAllPlanets()
    
    // disable login screen redirection
    BackHandler.addEventListener('hardwareBackPress', () => true)

    this.getUserInfo()
  }

  render() {
    const { navigation } = this.props;
    const { planetsList, isLoading, query, highestPopulation, isLoadingMore } = this.state;

    console.log(this.state.searchCount)

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
