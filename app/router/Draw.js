/**
 * 侧滑路由
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Tab from './Tab';



const RootDrawer = DrawerNavigator({
    Home: {
        screen: Tab,
    },


});

export default RootDrawer;