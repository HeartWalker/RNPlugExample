import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';



export default class Components extends Component<Props> {
    render() {
        return (
            <View>
                <Text>component</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Test')}}>
                    <Text>go to test</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Plug')}}>
                    <Text>go to plug</Text>
                </TouchableOpacity>
            </View>
        );
    }
}