import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Image, Button } from 'react-native';

class WelcomePage extends Component {


  render() {
    return (
      <View>
      </View>  
    )
  }


}



export default WelcomePage

























/**
 *  
 render() {
    return (
      //Navigator of the app - Calling WelcomeView by default
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: 'WelcomePage' }}
        renderScene={this.renderScene}
      />
    )
  }

  //Function designing what to render in the navigator depending on the route.name value
  renderScene(route, navigator) {
    if (route.name == 'WelcomePage') {
      return <WelcomePage navigator={navigator} />
    }
    if (route.name == 'QuestionPages') {
      return <QuestionPages navigator={navigator}/>
    }
    if (route.name == 'ResultPage') {
      return <ResultPage navigator={navigator} {...route.passProps}/>
    }
  }
 */