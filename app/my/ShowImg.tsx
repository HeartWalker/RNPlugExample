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
    Animated,
    Image,


} from 'react-native';

import Head from '../common/Head';
import CommonStyles from '../common/CommonStyles';
import { NavigationInjectedProps } from 'react-navigation';

const {height, width} = Dimensions.get('window');

let imgWidth = Number(StyleSheet.flatten(CommonStyles.itemImg).width);
let imgHeight = Number(StyleSheet.flatten(CommonStyles.itemImg).height);
let imgTargetWidth = width;
let imgTargetHeight = imgTargetWidth * imgHeight / imgWidth;
let toVsFromScaleX = imgTargetWidth / imgWidth;
let toVsFromScaleY = imgTargetHeight / imgHeight;

interface Props extends NavigationInjectedProps {
    screen: string;
  }
export default class ShowImg extends Component<Props,any> {
    constructor(props:Props){
        super(props);
        this.state = {
            animateValue:  new Animated.Value(0),
        }
    }

    componentDidMount(){
        this._showLayout();
    }

    _showLayout = () => {
        Animated.timing(this.state.animateValue, {
            toValue: 1,
            duration: 1300,
        }).start((e) => {
            console.log(e)
        })
    }
    renderLayout = () => {
        let {uri, layout}:any = this.props.navigation.state.params;
        return(
           <View style={styles.layoutContain}>



                      <Animated.Image source={{uri} }
                             style={[CommonStyles.itemImg,{
                                 resizeMode:'contain',
                                 position:'absolute',
                                  left: this.state.animateValue.interpolate({
                                 inputRange: [0, 1],
                                 outputRange: [layout.left, (width - imgTargetWidth) / 2 + imgWidth / 2 * (toVsFromScaleX - 1)]
                                 }),
                                 top: this.state.animateValue.interpolate({
                                 inputRange: [0, 1],
                                 outputRange: [layout.top, imgHeight / 2 * (toVsFromScaleY - 1) + 44 ]
                                 }),

                                 transform: [
                                 {
                                 scale: this.state.animateValue.interpolate({
                                 inputRange: [0, 1],
                                 outputRange: [1, toVsFromScaleX]
                                 })
                                 },

                                 ],
                            }]}
                      />


            {/*   <Animated.View
                      style={[CommonStyles.itemImg,{
                                 position:'absolute',
                                 backgroundColor:"orange",
                                 left: this.state.animateValue.interpolate({
                                 inputRange: [0, 1],
                                 outputRange: [layout.left, (width - imgTargetWidth) / 2 + imgWidth / 2 * (toVsFromScaleX - 1)]
                                 }),
                                 top: this.state.animateValue.interpolate({
                                 inputRange: [0, 1],
                                 outputRange: [layout.top, imgHeight / 2 * (toVsFromScaleY - 1) + 44 ]
                                 }),

                                 transform: [
                                 {
                                 scale: this.state.animateValue.interpolate({
                                 inputRange: [0, 1],
                                 outputRange: [1, toVsFromScaleX]
                                 })
                                 },

                                 ],
                            }]}
               />*/}
           </View>
        )
    }
    render() {
        return (
            <View>
                {/*<Head title={'ShowImg'}/>*/}
                {/*<BgImg source={{uri: this.props.navigation.state.params.uri}} style={styles.img}/>*/}
                {this.renderLayout()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layoutContain:{
        position: "absolute",
        flex:1,
        width,
        height,
    }
})
