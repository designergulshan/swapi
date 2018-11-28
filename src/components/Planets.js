import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native'

export default class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetsList: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/planets/?format=json')
      .then(res => res.json())
      .then(res => {
        console.log(res.results)
        return res;
      })
      .then(res => {
        this.setState({
          planetsList: res.results
        })
      })
  }

  render() {
    const { planetsList } = this.state;

    return (
      <View>
        <FlatList
          data={planetsList}
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})