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
    TouchableWithoutFeedback,
    UIManager,
    findNodeHandle
} from 'react-native';

interface Props  {
    press: Function;
    style:object;
    uri: string;
}

export default class BgImg extends Component<Props> {
    private _bgImg:any;
    constructor(props:Props){
        super(props);
    }
    _press = () => {

        UIManager.measure(Number(findNodeHandle(this._bgImg)), (x:number, y:number, width:number, height:number, pageX:number, pageY:number) => {
            let layout = {
                left: pageX,
                top: pageY,
            }
            this.props.press(layout);

        });

    }

    render() {

        return (
            <TouchableWithoutFeedback onPress = {this._press} >
               <View>
                   <ImageBackground
                       resizeMode={'center'} style={this.props.style}
                       source={require('./images/bg.png')}
                   >
                       <Image  ref = {r => this._bgImg = r} style={[{resizeMode:'contain'},this.props.style]} source={{uri:this.props.uri}}/>
                   </ImageBackground>
               </View>
            </TouchableWithoutFeedback>
        );
    }
}



