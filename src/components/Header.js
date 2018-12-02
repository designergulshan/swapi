import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Headers extends Component {
  render() {
    const {
      query,
      handleSearchInput,
      findPlanet,
      getAllPlanets,
      isSearched
    } = this.props;

    return (
      <View style={style.header}>
  
        {isSearched && <TouchableOpacity style={style.backBtn} onPress={getAllPlanets}>
          <Image style={style.backBtnIcon} source={require('../images/left-arrow-angle.png')}/>
        </TouchableOpacity>}

        <TextInput
          style={style.searchInput}
          placeholderTextColor='#999'
          placeholder='Search...'
          value={query}
          onChangeText={handleSearchInput}
          onSubmitEditing={findPlanet}
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
    elevation: 1,
    shadowOpacity: 1.0,
    shadowColor: '#000',
    flexDirection: 'row',
    backgroundColor: '#fff',
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
    borderRadius: 16
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