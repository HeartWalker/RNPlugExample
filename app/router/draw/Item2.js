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
            <View style = {{flex:1}}>
                <Text onPress={()=>{this.props.navigation.navigate('Item1')

                }}>{'Item2'},go to Item1</Text>

                <Text onPress={()=>NavigationService.navigateTop('Test')}>
                    go to stack screen :Stack Test
                </Text>
                <Text onPress={()=>NavigationService.navigateTop('MyTest')}>
                    go to stack screen :Stack MyTest
                </Text>
                <Text onPress={()=>NavigationService.navigateTop('Main')}>
                    go to tab screen: Draw main
                </Text>
                <Text onPress={()=>{NavigationService.navigateTop('DrawerToggle')}}>
                    go to tab screen: Draw toggle
                </Text>

                <Text onPress={()=>{NavigationService.navigateTop('Plug')}}>
                    go to tab screen: Plug
                </Text>
                <Text onPress={()=>NavigationService.navigateTop('My')}>
                    go to tab screen: My
                </Text>
                <Text onPress={()=>NavigationService.navigateTop('Component')}>
                    go to tab screen: Component
                </Text>


            </View>
        );
    }
}

export default Item2
