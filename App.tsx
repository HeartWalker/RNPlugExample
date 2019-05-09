/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'

import Router from './app/router/Router';

import './app/Pre';



type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){
      // do anything while splash screen keeps, use await to wait for an async task.
      SplashScreen.hide();//关闭启动屏幕
  }
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
