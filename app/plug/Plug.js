import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';



export default class Plug extends Component<Props> {
    render() {
        return (
            <View style={{flex:1,}}>
                <Text style={{color:"blue"}}>plug</Text>
            </View>
        );
    }
}