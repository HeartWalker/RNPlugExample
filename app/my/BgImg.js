/**
 * Created by Administrator on 2018/5/4.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ImageBackground,
    Alert
} from 'react-native';

import PropTypes from 'prop-types';

export default class BgImg extends Component<Props> {
    render() {
        return (
            <ImageBackground resizeMode={'center'} style={this.props.style}
                source={require('./images/bg.png')}

            >
                <Image  {...this.props}  />
            </ImageBackground>
        );
    }
}

BgImg.defaultProps = {
    //mode: 'contain',
    style: {},

}

BgImg.propTypes = {
    //mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'center']),

}

