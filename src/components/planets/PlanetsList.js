import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableHighlight } from 'react-native';

export default class PlanetsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetsList: [],
      next: ''
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/planets/')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          planetsList: res.results,
          next: res.next
        })
      })
  }

  loadMore = () => {
    const { next } = this.state;

    fetch(next)
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => (
          {
            planetsList: [...prevState.planetsList, ...res.results]
          }
        ))
      })
  }

  render() {
    const { planetsList } = this.state;

    return (
      <View style={style.container}>
        <FlatList
          data={planetsList}
          renderItem={({item}) => <Text style={style.item}>{item.name}</Text>}
        />
        <TouchableHighlight
          style={style.btnDefault}
          onPress={this.loadMore}
        >
          <Text style={style.btnDefaultText}>Load More...</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
   flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  btnDefault: {
    backgroundColor: '#222',
    padding: 10,
    height: 40,
  },
  btnDefaultText: {
    color: '#fff',
    textAlign: 'center'
  },
})