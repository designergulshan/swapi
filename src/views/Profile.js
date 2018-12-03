import React, { Component } from 'react';
import { View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from 'react-native';

export default class Profile extends Component {
  static navigationOptions = {
    header: null
  }
  
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  requestToLogout = () => {
    AsyncStorage.setItem('user', 'null', (err, result) => {
      this.props.navigation.navigate('LoginRT')
    })
  }

  componentDidMount() {
    AsyncStorage.getItem('user', (err, result) => {
      this.setState({
        name: result
      })
    })
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.DP}>
          <Image
            style={style.userIcon}
            source={{uri: 'https://cdn.dribbble.com/users/458522/screenshots/4568564/kratos_1.jpg'}}
          />
        </View>
        <View style={style.userInfo}>
          <Text>{this.state.name}</Text>
          <TouchableOpacity onPress={this.requestToLogout}>
            <Text style={style.formButton}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  DP: {
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  userInfo: {
    flex: 1,
    alignItems: 'center'
  },
  userIcon: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderWidth: 2,
    marginRight: 10,
    borderColor: '#000',
    borderRadius: 100/2,
    alignItems: 'center'
  },
  formButton: {
    marginTop: 20,
    width: 120,
    height: 40,
    padding: 10,
    color: '#fff',
    borderRadius: 2,
    textAlign: 'center',
    backgroundColor: '#000',
  },
})

