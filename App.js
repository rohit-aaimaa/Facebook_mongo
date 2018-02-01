import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import mysql from "mysql";
import axios from "axios";

export default class App extends React.Component {

  state = {
    info: {}
  }

  componentDidMount(){
    const connection = mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'fbsql'
    })

    connection.connect()

    axios.get('https://graph.facebook.com/me?access_token=EAACEdEose0cBAHJfpPJD8pPKxRk4eQEYnUYx3UepHgY8Y9wwJf9rc5zfrPImah8IraXxjxaXQc4xgtZChZAn40rBXIeXTET4a7wpqyM7QSyU9aPJJOZCJKEgZATzyOgN9cJmxKc3bF3JNz55HgiGIwZAqQlPp8pWpFwmbgaGB9eFC4dTOcGPk3jTMhZAsIcnbOQmjmZBlR3Di8fClCZA914A&fields=id,name,friends{name}')
    .then(res => res.data)
    .then(user => {
      connection.query(`INSERT INTO user VALUES ({user.id}, {user.name})`, (err, result) => {
        
      })
      this.setState({info: user})
    })
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
