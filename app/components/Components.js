import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import TouchAble from '../common/TouchAble';

export default class Components extends Component<Props> {
    render() {
        return (
            <View>
                <Text>component</Text>
                <TouchAble screen={'Test'}/>

                <TouchAble screen={'Plug'}/>

                <TouchAble screen={'FlatListExample'}/>
                <TouchAble screen={'ScrollViewExample'}/>
            </View>
        );
    }
}