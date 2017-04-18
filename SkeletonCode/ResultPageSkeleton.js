import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Image, Button, ListView } from 'react-native';


class ResultPage extends Component {


  render() {
    return (
     
    )
  }


}


const styles = StyleSheet.create({
  containerFlex: {
    flex: 10,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "red"
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'blue'
  },
  answerContainer: {
    flex: 9,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 22
  },
  answerText: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center'
  }
});

export default ResultPage