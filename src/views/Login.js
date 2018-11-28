import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      username: '',
      password: ''
    }
  }
  
  handleUsername = text => {
    this.setState({
      username: text
    })
  }

  handlePassword = text => {
    this.setState({
      password: text
    })
  }

  requestLogin = () => {
    const { username, password } = this.state;
    const { navigate } = this.props.navigation;

    if(username !== '' && password !== '') {
      fetch(`https://swapi.co/api/people/?search=${username}`)
        .then(res => res.json())
        .then(res => {
          console.log(res.results[0])
          if (res.results.length > 0 && password === res.results[0].birth_year) {
            navigate('HomeRT', {user: res.results[0]})
          } else {
            this.setState({
              error: "Credentials doesn't match. Please try again."
            })
          }
        })
    } else {
      this.setState({
        error: 'username/password field shouldn\'t be blank.'
      })
    }
  }

  render() {
    const { error } = this.state;

    return (
      <ScrollView behavior='position' style={style.container}>
        <Text style={style.heading2}>User Login</Text>

        <View style={style.formRow}>
          <Text style={style.formLabel}>Username:</Text>
          <TextInput
            style={style.formInput}
            selectionColor='#000'
            onChangeText={this.handleUsername}
          />
        </View>
        
        <View style={style.formRow}>
          <Text style={style.formLabel}>Password:</Text>
          <TextInput
            style={style.formInput}
            secureTextEntry={true}
            selectionColor='#000'
            onChangeText={this.handlePassword}
          />
        </View>

        <View style={style.formRow}>
          <TouchableHighlight
            style={style.formButton}
            onPress={this.requestLogin}
          >
            <Text style={style.formButtonText}>Login</Text>
          </TouchableHighlight>
        </View>

        {error && <Text style={style.error}>{error}</Text>}
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1,
    padding: 20
  },
  heading2: {
    fontSize: 22,
    fontWeight: '100',
    fontFamily: 'sans-serif-light',
    marginBottom: 50,
    textAlign: 'center'
  },
  formRow: {
    marginBottom: 20
  },
  formLabel: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 40
  },
  formButton: {
    backgroundColor: '#222',
    borderRadius: 20,
    padding: 10,
    height: 40
  },
  formButtonText: {
    color: '#fff',
    textAlign: 'center'
  },
  error: {
    color: '#ff4444'
  }
})