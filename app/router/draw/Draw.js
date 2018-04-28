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
import NavigationService from '../NavigationService';

import DrawContent from './DrawContent';


const DrawNav = DrawerNavigator(
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

    console.log('1111')
    return defaultGetStateForAction(action, state);
};


 class Draw extends React.Component {
    render(){
        return(
            <DrawNav  ref={navigatorRef => {
                        NavigationService.setDrawNavigator(navigatorRef)}}></DrawNav>
        )
    }
};

export default Draw;