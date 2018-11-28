import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/views/Login';

const MyRoutes = StackNavigator({
  LoginRT: {
    screen: Login
  }
}, {
  initialRouteName: 'LoginRT'
});

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <MyRoutes />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1
  }
})