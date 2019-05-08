/**
 * 主路由/入口路由
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Easing,
    Animated,
} from 'react-native';

import {createStackNavigator,createAppContainer } from 'react-navigation';

//import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import Draw from './draw/Draw';
import Test from '../components/Test';
import FlatListExample from '../components/FlatListExample';
import ScrollViewExample from '../components/ScrollViewExample';

import ShowImg from '../my/ShowImg';

import MyTest from '../my/MyTest';

const Stack = createStackNavigator(
    {
        Main: {
            screen: Draw
        },
        Test: {
            screen: Test
        },
        MyTest: {
            screen: MyTest
        },
        FlatListExample: {
            screen: FlatListExample
        },
        ScrollViewExample: {
            screen: ScrollViewExample
        },
        ShowImg: {
            screen: ShowImg,

        },

    },
    {
        initialRouteName: 'Main',
        headerMode: 'none',//导航栏的显示模式:隐藏导航栏

        navigationOptions: {
            gesturesEnabled: true,//允许右划返回
        },
        transitionConfig: (sceneProps) => {
            const { scene } = sceneProps;
            const { route } = scene;
            const params = route.params || {};
            const transition = params.transition || 'forHorizontal';
            let duration = 250;
            if(transition === 'forInitial'){
                duration = 0
            }
            return {
                transitionSpec: {
                    duration,
                    easing: Easing.out(Easing.poly(4)),
                    timing: Animated.timing,
                },



                //screenInterpolator: CardStackStyleInterpolator.forHorizontal,
            }
        },

        //screenInterpolator: CardStackStyleInterpolator.forHorizontal,//实现android左右跳转

},
);
//forInitial

const defaultGetStateForAction = Stack.router.getStateForAction;
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

    //console.log('1111')
    return defaultGetStateForAction(action, state);
};
export default createAppContainer(Stack);
