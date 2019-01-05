import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './src/views/Login';
import Home from './src/views/Home';
import PlanetDetails from './src/views/PlanetDetails';
import Profile from './src/views/Profile';

const MyRoutes = StackNavigator({
  LoginRT: {
    screen: Login
  },
  PlanetDetailsTR: {
    screen: PlanetDetails
  },
  HomeRT: {
    screen: Home
  },
  ProfileRT: {
    screen: Profile
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
