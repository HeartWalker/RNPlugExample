/**
 * Created by Administrator on 2018/4/26.
 */
/**
 * 侧滑路由
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text } from 'react-native';
import { DrawerNavigator, SafeAreaView} from 'react-navigation';

import Tab from '../Tab';
import DrawContent from './DrawContent';


const Draw = DrawerNavigator(
    {
        Main: {
            screen: Tab,
        }
    },
    {
        contentComponent: DrawContent
    }

);

export default Draw;