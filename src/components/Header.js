import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Headers extends Component {
  constructor(props) {
    super(props);

    this.state={
      query: ''      
    }
  }

  handleSearchInput = text => {
    this.setState({
      query: text
    })
  }
  
  searchView = () => {
    const { query } = this.state;
    this.props.navigation.navigate('SearchViewRT', { query })
  }
  
  userProfile = () => {
    this.props.navigation.navigate('ProfileRT')
  }

  render() {
    const { query, navigation, isBackRequire } = this.props;

    return (
      <View style={style.header}>
        {isBackRequire ? <TouchableOpacity style={style.backBtn} onPress={() => navigation.goBack()}>
          <Image style={style.backBtnIcon} source={require('../images/left-arrow-angle.png')}/>
        </TouchableOpacity> : <TextInput
          style={style.searchInput}
          placeholderTextColor='#999'
          placeholder='Search...'
          value={query}
          navigate={navigation.navigate}
          onChangeText={this.handleSearchInput}
          onSubmitEditing={this.searchView}
        />}

        <TouchableOpacity onPress={this.userProfile}>
          <Image
            style={style.userIcon}
            source={{uri: 'https://cdn.dribbble.com/users/458522/screenshots/4568564/kratos_1.jpg'}}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
  header: {
    elevation: 1,
    shadowOpacity: 1.0,
    shadowColor: '#000',
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 50,
    shadowOffset: { width: 2, height: 2 }
  },
  searchInput: {
    borderRadius: 2,
    padding: 0,
    color: '#000',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#f1f1f1',
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
    borderRadius: 16,
    alignItems: 'flex-end'
  },
  burgerIcon: {
    width: 32,
    height: 32,
    marginTop: 10,
    marginLeft: 10,
  },
  backBtn: {
    paddingLeft: 10,
    paddingRight: 5,
    justifyContent: 'center'
  },
  backBtnIcon: {
    width: 20,
    height: 20
  }
});