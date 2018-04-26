/**
 * 侧滑路由
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text } from 'react-native';
import { DrawerNavigator, SafeAreaView} from 'react-navigation';

import Tab from './Tab';

// 传递props,拿到navigation
//DrawerClose DrawerOpen DrawerToggle
const CustomDrawerContentComponent = (props) => (
    <ScrollView {...props}>
        <SafeAreaView style={{}} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View><Text onPress={()=>{props.navigation.navigate('DrawerToggle');props.navigation.navigate('Plug')}}>item</Text></View>
        </SafeAreaView>
    </ScrollView>
);

const RootDrawer = DrawerNavigator(
    {
        Home: {
            screen: Tab,
        },
    },
    {
        contentComponent: CustomDrawerContentComponent
    }

);

export default RootDrawer;