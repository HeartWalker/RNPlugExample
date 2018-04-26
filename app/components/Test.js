import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,

} from 'react-native';

let num = 0;

export default class Test extends Component<Props> {
    componentWillUnmount(){
        num--;
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Test')}>
                    <Text>{num = num +1}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}