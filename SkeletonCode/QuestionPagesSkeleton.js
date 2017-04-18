import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Image, Button } from 'react-native';


class QuestionPages extends Component {

  constructor(props) {
    super(props);

  }

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
  questionFlex: {
    flex: 8,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "green"
  },
  buttonsFlex: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: "blue"
  },
  questionText: {
    textAlign: 'center',
    fontSize: 25
  }
});

export default QuestionPages