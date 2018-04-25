
/**
 * 页面tab路由
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { TabNavigator, TabBarBottom } from 'react-navigation';

import Components from '../components/Components';
import My from '../my/My';
import Plug from '../plug/Plug';

function Icon(props) {
    return (
        <View style={{alignItems:'center'}}>
            <View><Text style={{}}>图片</Text></View>
            <View><Text style={props.textColor}>{props.title}</Text></View>
        </View>
    )
}

export default TabNavigator(
    {
        Component: {
            screen: Components,
            navigationOptions: {
                title: '官方组件',

                tabBarIcon:({focused, tintColor})=>
                    <Icon textColor={focused?{color:'#fff'}:{color:'#555'}} title={'官方组件'}/>


            },
        },
        My: {   screen: My,
                navigationOptions: {
                    title: '自定义组件',

                    tabBarIcon:({focused, tintColor})=>
                        <Icon textColor={focused?{color:'#fff'}:{color:'#555'}} title={'自定义组件'}/>


                },

        },
        Plug: {
                screen: Plug,
                navigationOptions: {
                    title: '社区组件',

                    tabBarIcon:({focused, tintColor})=>
                        <Icon textColor={focused?{color:'#fff'}:{color:'#555'}} title={'社区组件'}/>


                },
        }
    },

    {
        initialRouteName: 'Component',
        tabBarPosition: 'bottom',
        animationEnabled: false,//点击tab切换路由时是否有动画
        swipeEnabled: false,//是否可以左右滑动切换路由
        lazy: true,//是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true

        tabBarOptions: {
            activeTintColor: '#fff',//激活时文字颜色
            inactiveTintColor: 'orange',//未激活时文字颜色
            style:{backgroundColor:'gray',},
            indicatorStyle: {height: 0},//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            showIcon: true,
            showLabel: false,//底部文字栏
            iconStyle: {
                width: '100%',
                padding: 0,
                height:50
            },
            tabStyle: {
                padding: 0,
            },
        },

}
)
