/**
 * Created by Administrator on 2018/4/26.
 */
/**
 * 侧滑内嵌套stack路由
 * @flow
 */

import React ,{Component} from 'react';
import {ScrollView, View, Text } from 'react-native';
import { createStackNavigator, SafeAreaView} from 'react-navigation';
//import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import NavigationService from '../NavigationService';

import Item1 from './Item1';
import Item2 from './Item2';
const DrawStack = createStackNavigator(
    {
        Item1: {screen: Item1},
        Item2: {screen: Item2},
    },
    {
        initialRouteName: 'Item1',
        headerMode: 'none',//导航栏的显示模式:隐藏导航栏
        navigationOptions: {
            gesturesEnabled: true,//允许右划返回
        },
        transitionConfig: () => ({
            //screenInterpolator: CardStackStyleInterpolator.forHorizontal,//实现android左右跳转
        })
    }
)

const defaultGetStateForAction = DrawStack.router.getStateForAction;


DrawStack.router.getStateForAction = (action, state) => {

    //console.log('1111')
    return defaultGetStateForAction(action, state);
};

// 传递props,拿到navigation
//DrawerClose DrawerOpen DrawerToggle
/*
const CustomDrawerContentComponent = (props) => (
    <ScrollView {...props}>
        <SafeAreaView style={{}} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View><Text onPress={()=>{props.navigation.navigate('DrawerToggle');props.navigation.navigate('Plug')}}>go to plug</Text></View>
            <Item navigation = {props.navigation}/>
            <Text>aaa</Text>
        </SafeAreaView>
    </ScrollView>
);

export default CustomDrawerContentComponent;*/
//DrawStack 外使用 ScrollView 会导致 其消失失效 ,SafeAreaView 的 flex:1 style也是必要的
class CustomDrawerContentComponent extends Component {

    render(){
        return (
                <SafeAreaView style={{flex:1}} forceInset={{ top: 'always', horizontal: 'never' }}>
                        <View><Text onPress={()=>{this.props.navigation.navigate('Plug')}}>go to plug</Text></View>
                        <DrawStack  ref={navigatorRef => {
                        NavigationService.setSideNavigator(navigatorRef)}}/>
                        <Text >aaa</Text>
                </SafeAreaView>
        )
    }
}

export  default CustomDrawerContentComponent;