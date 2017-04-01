import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';
import WelcomePage from './Code/WelcomePage.js'
import QuestionPages from './Code/QuestionPages.js'
import ResultPage from './Code/ResultPage'

export default class ReactNativeWorkshop2017 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

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
}



AppRegistry.registerComponent('ReactNativeWorkshop2017', () => ReactNativeWorkshop2017);
