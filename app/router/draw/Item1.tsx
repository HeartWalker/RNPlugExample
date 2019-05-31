import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';


interface Props extends NavigationInjectedProps {
    screen: string;
  }
export default class Item1 extends Component<Props> {
    render() {
        return (
            <View >
                <Text onPress={()=>{this.props.navigation.navigate('Item2')}}>{'Item1'},go to item2</Text>
                <Text onPress={()=>{this.props.navigation.navigate('Item2')}}>{'Item1'},go to item2</Text>
                <Text onPress={()=>{this.props.navigation.navigate('Item2')}}>{'Item1'},go to item2</Text>
                <Text onPress={()=>{this.props.navigation.navigate('Item2')}}>{'Item1'},go to item2</Text>
                <Text onPress={()=>{this.props.navigation.navigate('Item2')}}>{'Item1'},go to item2</Text>
                <Text onPress={()=>{this.props.navigation.navigate('Item2')}}>{'Item1'},go to item2</Text>
            </View>
        );
    }
}