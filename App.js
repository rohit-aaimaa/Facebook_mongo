import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";

export default class App extends React.Component {

  state = {
    info: {}
  }

  componentDidMount(){
    axios.get('https://graph.facebook.com/me?access_token=EAACEdEose0cBAH3an9zjO9s4I0lGrdwIj3rqKa2UakSDN1ZCy8XoPZCd58VamZBvZBVwwFZC0HJ0LomDqD2Ik13QbUepQcuuinfSA5ZAEXU1ZAy82KWaHxA0Dgu2ZBcFkIBJxoMCAiUsjyfRnNvzT1eZCe0dzzwwzAfHMHLNnZAqYVQZCqJn5zPlE3TJNySmxtutZBw9TdYSwVXhXyEraSOXXZCxjXZBP4ObquqxMZD&fields=id,name,friends{name}')
    .then(res => res.data)
    .then(user => this.setState({info: user}))
  }

  render() {
    const {info} = this.state;
    return (
      <View style={styles.container}>
        <Text>{info.id}</Text>
        <Text>{info.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
