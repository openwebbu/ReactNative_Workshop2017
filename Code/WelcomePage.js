import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Image, Button } from 'react-native';

class WelcomePage extends Component {

  /**
   * This is the first scene that the students will build.
   * Using: Flex, Buttons
   * 
   * First step: Design 
   *   - Create a flex view (flex: 10) containing two flex views (flex: 9 and flex: 1).
   *            * Give a border color to each flex so that the students can understand more easily how it works
   *   - Creation of a styles variable to store the styles of our different components
   *   - Fill the first flex view with a welcome text and an image
   *            * Set the flexDirection to be in "column" mode and explain why
   *            * Create a TextView and an ImageView
   *   - Fill the second flex view with a button
   * 
   * Second step: Actions
   *   - Add navigate function to the button
   */

  render() {
    return (
      //Code for the welcome view
      <View style={styles.containerFlex}>
        <View style={styles.welcomeFlex}>
          <Text style={styles.welcomeText}>
            {"Welcome to the OpenWeb workshop quiz!"}
          </Text>  
          <Image
          style={{width: 300, height: 300}}
          source={{uri: 'https://scontent.fbed1-2.fna.fbcdn.net/v/t31.0-8/10855100_803911406366901_4469173338854041245_o.png?oh=194b43744f6c86db40764138b68cf35e&oe=59946DA8'}}
          />
        </View>
        <View style={styles.buttonFlex}>
          <Button 
            title="Go to the quiz!" 
            onPress={() => this._navigateToQuestions()}
          />
        </View>    
      </View>
    )
  }

  //Function navigating to the QuestionPages view
  _navigateToQuestions() {
    this.props.navigator.push({
      name: 'QuestionPages',
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
  welcomeFlex: {
    flex: 8,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "green"
  },
  buttonFlex: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "blue"
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 25
  }
});

export default WelcomePage