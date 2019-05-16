import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,

} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

let num = 0;
interface Props extends NavigationInjectedProps {
    screen: string;
  }
export default class Test extends Component<Props> {
    componentWillUnmount(){
        //num--;
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Test',{})}>
                    <Text>component</Text>
                    <Text>{num = num +1}</Text>
                    <Text>test</Text>
                </TouchableOpacity>
            </View>
        );
    }
}