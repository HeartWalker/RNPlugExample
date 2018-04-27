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

import {StackNavigator,NavigationActions } from 'react-navigation';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import Draw from './draw/Draw';
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
console.log(1)
const defaultGetStateForAction = Stack.router.getStateForAction;

let flag = true;
Stack.router.getStateForAction = (action, state) => {
  /*  if (state && state.index > 3 && action.type === 'Navigation/NAVIGATE') {
        const routes = [
            state.routes[0],

            ...(state.routes.slice(-2))

        ];
        console.log('1111')
        state.routes = routes
        state.routes.index = routes.length - 1
        return {
            ...state,
            routes,
            index: routes.length - 1,
        };

    }*/

 /*   if (state && state.index > 3) {
        const routes = [
            state.routes[0],

            ...(state.routes.slice(-2))

        ];

        return {
            ...state,
            routes,
            index: routes.length - 1,
        };
    }*/
  /*  if (state && state.index > 3) {
        const routes = [
            state.routes[0],

            ...(state.routes.slice(-2,-1))

        ];

        state.routes = routes;
        state.index = routes.length -1;
        return null;

    }*/

    console.log('1111')
    return defaultGetStateForAction(action, state);
};
export default Stack;
