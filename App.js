import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './src/views/Login';
import Home from './src/views/Home'

const MyRoutes = StackNavigator({
  LoginRT: {
    screen: Login
  },
  HomeRT: {
    screen: Home
  }
}, {
  initialRouteName: 'HomeRT'
});

export default class App extends Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}
