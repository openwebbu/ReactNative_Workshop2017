import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Image, Button } from 'react-native';

const questions = ['Did the San Francisco Giants win the World Series in 2012?', 'Bingo', '', '']
const images = ['https://i.imgur.com/7PskoNq.png', '', '', '']
var answers = ['', '', '', '']

class QuestionPages extends Component {

  /**
   * First step:  
   *  - Initialize the constructor, explaining why we need it 
   *      * We need it because we want our view to rerender automatically with the next question each time we press the 'Yes' or 'No' button
   *      * We create a state 'counter', that we will increment each time we push 'Yes' or 'No'
   *      * This will force the screen to rerender, as counter is a state
   *      * We also have to take in case that if counter > questionArray.length, then we display the result page. 
   * 
   * 
   * Second step: 
   *  - Design the views
   *      * To be fast, we recreate the view from the WelcomePage View (copy/paste)
   * 
   *  - Setting the text to be questions:
   *      * We create a const variable questions at the beginning of the file (outside of the class), being an array of length 4
   *      * We fill this variable with 4 questions 
   *      * We do the same thing with const image
   *      * We create a var variable answers, that will store the user's answers
   *      * We explain the difference between const and var
   *      * 
   *      
   */

  //First step 
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <View style={styles.containerFlex}>
        <View style={styles.questionFlex}>
          <Text style={styles.questionText}>
            {questions[this.state.counter]}
          </Text>  
          <Image
          style={{width: 300, height: 300, borderWidth:1, borderColor:'green'}}
          resizeMode='contain'
          source={{uri: images[this.state.counter]}}
          />
        </View>
        <View style={styles.buttonsFlex}>
          <Button 
            title="Yes!" 
            color="green"
            onPress={() => this._navigateToQuestions()}
          />
          <Button 
            title="No" 
            color="red"
            onPress={() => this._navigateToQuestions()}
          />
        </View>    
      </View>
    )
  }

  //Function navigating to the QuestionPages view
  _navigateToResult() {
    this.props.navigator.push({
      name: 'ResultPage',
    })
  };

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