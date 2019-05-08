/**
 * Created by Administrator on 2018/4/26.
 */
/**
 * 侧滑路由
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text } from 'react-native';
import { createDrawerNavigator, createAppContainer} from 'react-navigation';

import Tab from '../Tab';
import NavigationService from '../NavigationService';

import DrawContent from './DrawContent';


const DrawNav = createDrawerNavigator(
    {
        Main: {
            screen: Tab,
        }
    },
    {
        contentComponent: DrawContent
    }

);


const defaultGetStateForAction = DrawNav.router.getStateForAction;
DrawNav.router.getStateForAction = (action, state) => {

    //console.log('1111')
    return defaultGetStateForAction(action, state);
};

//使用setDrawNavigator会导致navigation 只能在此子路由栈生效

export default createAppContainer(DrawNav);