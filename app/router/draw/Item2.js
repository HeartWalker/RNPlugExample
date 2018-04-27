import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import NavigationService from '../NavigationService';
class Item2 extends Component<Props> {
    render() {
        return (
            <View style={{flex:1,height:200}}>
                <Text onPress={()=>{this.props.navigation.navigate('Item1')

                }}>{'Item2'},go to Item1</Text>

                <Text onPress={()=>NavigationService.navigate('Test')}>
                    go to Test
                </Text>
                <Text onPress={()=>NavigationService.navigate('My')}>
                    go to plug
                </Text>
            </View>
        );
    }
}

export default Item2
