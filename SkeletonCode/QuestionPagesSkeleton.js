import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Image, Button } from 'react-native';


class QuestionPages extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.containerFlex}>
        <View style={styles.questionFlex}>
          <Text style={styles.questionText}>
            {"Questions will be displayed here"}
          </Text>
          <Image
            style={{ width: 300, height: 300 }}
            resizeMode='contain'
            source={{ uri: 'https://image.freepik.com/free-icon/question-mark_318-52837.jpg' }}
          />
        </View>
        <View style={styles.buttonsFlex}>
         
        </View>

      </View>
     
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
    borderWidth: 2,
    borderColor: "blue"
  },
  questionText: {
    textAlign: 'center',
    fontSize: 25
  }
});

export default QuestionPages