/**
 * ImageBackground 并不完美 ios 使用img的 defaultSource  安卓另做处理
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ImageBackground,
    Alert,
    TouchableOpacity,
    UIManager,
    ReactNative,
    findNodeHandle
} from 'react-native';

import PropTypes from 'prop-types';

export default class BgImg extends Component<Props> {
    constructor(props){
        super(props);
        this._bgImg = null;
    }
    _press = () => {

        UIManager.measure(findNodeHandle(this._bgImg), (x, y, width, height, pageX, pageY) => {
            let layout = {
                left: pageX,
                top: pageY,
            }
            this.props.press(layout);

        });

    }

    render() {

        return (
            <TouchableOpacity onPress = {this._press} >
                <ImageBackground
                                 resizeMode={'center'} style={this.props.style}
                                 source={require('./images/bg.png')}
                >
                    <Image  ref = {r => this._bgImg = r} style={[{resizeMode:'contain'},this.props.style]} source={{uri:this.props.uri}}/>
                </ImageBackground>
            </TouchableOpacity>
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

