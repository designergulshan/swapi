import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import Planets from '../components/Planets'

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View>
        <Header />
        <Planets />
      </View>
    )
  }
}
