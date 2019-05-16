import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';


interface Props extends NavigationInjectedProps {
    screen: string;
  }
export default class My extends Component<Props> {
    render() {
        return (
            <View>
                <Text>my</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('MyTest',)}}>
                    <Text>go to MYtest</Text>
                </TouchableOpacity>
            </View>
        );
    }
}