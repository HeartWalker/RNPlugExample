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

} from 'react-native';

import BgImg from './BgImg';
import Head from '../common/Head';
import CommonStyles from '../common/CommonStyles';

export default class ShowImg extends Component<Props> {

    renderLayout = () => {
        return(
           <View style={styles.layoutContain}>
               <Animated.View style={{

            }}>
                   <BgImg source={{uri: this.props.navigation.state.params.uri}}
                          style={[CommonStyles.itemImg,{
                                position: "absolute",

                            }]}
                   />
               </Animated.View>
           </View>
        )
    }
    render() {
        return (
            <View>
                <Head title={'ShowImg'}/>
                {/*<BgImg source={{uri: this.props.navigation.state.params.uri}} style={styles.img}/>*/}
                {this.renderLayout()}
            </View>
        );
    }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    img:{width, height: .75 * width, },
    layoutContain:{
        position: "absolute",
        flex:1,
        width,
        height,
        backgroundColor: "red",
    }
})
/* left: this.state.animateValue.interpolate({
 inputRange: [0, 1],
 outputRange: [this.props.navigation.state.params.shareContent.left, (totalWidth - imgTargetWidth) / 2 + imgWidth / 2 * (toVsFromScaleX - 1)]
 }),
 top: this.state.animateValue.interpolate({
 inputRange: [0, 1],
 outputRange: [this.props.navigation.state.params.shareContent.top, imgHeight / 2 * (toVsFromScaleY - 1)]
 }),
 backgroundColor: "#f00",
 transform: [
 {
 scaleX: this.state.animateValue.interpolate({
 inputRange: [0, 1],
 outputRange: [1, toVsFromScaleX]
 })
 },
 {
 scaleY: this.state.animateValue.interpolate({
 inputRange: [0, 1],
 outputRange: [1, toVsFromScaleY]
 })
 },
 ],*/