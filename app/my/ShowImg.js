/**
 * Created by Administrator on 2018/5/4.
 * todo 图片放大跳转效果
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

import BgImg from './BgImg';
import Head from '../common/Head';

export default class ShowImg extends Component<Props> {
    render() {
        return (
            <View>
                <Head title={'ShowImg'}/>
                <BgImg source={{uri: this.props.navigation.state.params.uri}} style={styles.img}/>
            </View>
        );
    }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    img:{width, height: .75 * width, }
})
