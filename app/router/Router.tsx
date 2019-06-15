
/**
 *
 * @flow
 */

import React, { Component } from 'react';
import {
    View
} from 'react-native';

import Stack from './Stack';
import NavigationService from './NavigationService';//获得顶级路由

export default class Router extends Component {

    render() {
        return (
                <Stack  ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
        );
    }
}

