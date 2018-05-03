/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import Router from './app/router/Router';


/*if(!__DEV__){
    ErrorUtils.setGlobalHandler((e)=>{
      Alert.alert("异常",JSON.stringify(e))
      });
}*/
ErrorUtils.setGlobalHandler((e)=>{
    Alert.alert("异常",JSON.stringify(e));
});

if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        debug: () => {},
        error: () => {},
    };
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Router/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
