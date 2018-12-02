import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './src/views/Login';
import Home from './src/views/Home';
import PlanetDetails from './src/views/PlanetDetails';
import SearchView from './src/views/SearchView';

const MyRoutes = StackNavigator({
  LoginRT: {
    screen: Login
  },
  PlanetDetailsTR: {
    screen: PlanetDetails
  },
  SearchViewRT: {
    screen: SearchView
  },
  HomeRT: {
    screen: Home
  }
}, {
  initialRouteName: 'LoginRT'
});

export default class App extends Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}
