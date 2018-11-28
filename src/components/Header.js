import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image
} from 'react-native';

export default class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleSearch = text => {
    this.setState({
      query: text
    })
  }

  render() {
    const { query } = this.state;

    return (
      <View style={style.header}>
        <TextInput
          style={style.searchInput}
          selectionColor='#aaa'
          placeholderTextColor='#666'
          placeholder='Search...'
          value={query}
          onChangeText={this.handleSearch}
          />
        <Image
          style={style.userIcon}
          source={{uri: 'https://cdn.dribbble.com/users/458522/screenshots/4568564/kratos_1.jpg'}}
          />
      </View>
    )
  }
  
}

const style = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    borderBottomColor: '#000',
    elevation: 2,
    shadowOpacity: 1.0,
    flexDirection: 'row',
    shadowColor: '#000',
    marginBottom: 10,
    shadowOffset: { width: 2, height: 2 }
  },
  searchInput: {
    borderRadius: 15,
    padding: 0,
    color: '#aaa',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#222',
    textAlignVertical: 'center',
    height: 32,
    fontSize: 12,
    margin: 10,
    flex: 1
  },
  userInfo: {
    textAlign: 'right'
  },
  userIcon: {
    width: 32,
    height: 32,
    marginTop: 10,
    marginRight: 10,
    borderColor: '#000',
    borderRadius: 16
  }
});