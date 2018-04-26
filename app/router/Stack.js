/**
 * 主路由/入口路由
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import Draw from './Draw';
import Test from '../components/Test';
import MyTest from '../my/MyTest';

const Stack = StackNavigator(
    {
        Main: {
            screen: Draw
        },
        Test: {
            screen: Test
        },
        MyTest: {
            screen: MyTest
        }
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none',//导航栏的显示模式:隐藏导航栏

        navigationOptions: {
            gesturesEnabled: true,//允许右划返回
        },
        transitionConfig: () => ({
            screenInterpolator: CardStackStyleInterpolator.forHorizontal,//实现android左右跳转
        })
    },
);

Stack.router = {
    ...Stack.router, getStateForAction(action, state) {
        console.log(action)
        console.log(state)
        if (state && action.type === 'PushTwoProfiles') {
            const routes = [...state.routes, {key: 'A', routeName: 'Profile', params: {name: action.name1}}, {
                key: 'B',
                routeName: 'Profile',
                params: {name: action.name2}
            },];
            return {...state, routes, index: routes.length - 1,};
        }
        return Stack.router.getStateForAction(action, state);
    },
};

export default Stack;
