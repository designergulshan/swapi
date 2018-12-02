import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import { config } from '../config'

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      username: 'luke',
      password: '19BBY'
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

    console.log('requestLogin')

    if(username !== '' && password !== '') {
      fetch(`${config.baseUrl}/people/?search=${username}`)
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
    const { error, username, password } = this.state;

    return (
      <ScrollView keyboardShouldPersistTaps={'handled'} behavior='position' style={style.container}>
        
        <StatusBar backgroundColor="#f1f1f1" barStyle="dark-content" />
        
        <View style={style.labelContainer}>
          <Text style={style.logo}>Star wars</Text>
          <Text style={style.label}>The war of space has begin now...</Text>
        </View>

        <View style={style.formRow}>
          {/* <Text style={style.formLabel}>Username:</Text> */}
          <TextInput
            style={style.formInput}
            selectionColor='#000'
            value={username}
            placeholder='Username'
            onChangeText={this.handleUsername}
            />
        </View>
        
        <View style={style.formRow}>
          {/* <Text style={style.formLabel}>Password:</Text> */}
          <TextInput
            style={style.formInput}
            secureTextEntry={true}
            selectionColor='#000'
            value={password}
            placeholder='password'
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

        <View style={style.errorView}>
          {error && <Text style={style.error}>{error}</Text>}
        </View>
      </ScrollView>
    )
  }
}

const theme = {
  color: '#000'
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1,
    padding: 20
  },
  labelContainer: {
    marginBottom: 80,
    marginTop: 20,
  },
  logo: {
    fontSize: 40,
    color: theme.color,
    fontWeight: '900'
  },
  label: {
    fontSize: 18,
    color: '#000',
    opacity: 0.4,
    fontWeight: '100',
    fontFamily: 'sans-serif-light',
  },
  formRow: {
    marginBottom: 20
  },
  formLabel: {
    color: theme.color,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  formInput: {
    height: 40,
    padding: 10,
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: theme.color,
  },
  formButton: {
    height: 40,
    padding: 10,
    backgroundColor: theme.color,
  },
  formButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  error: {
    color: '#ff4444'
  },
  errorView: {
    marginBottom: 30
  }
})