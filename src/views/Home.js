import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header'
import PlanetsList from '../components/planets/PlanetsList'

export default class Home extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const user = this.props.navigation.getParam('user')

    return (
      <View style={style.container}>
        <Header user={user.name} />
        <PlanetsList />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1
  }
})
