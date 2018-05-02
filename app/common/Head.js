import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

class Head extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={()=>{this.props.navigation.goBack(null)}}>
                   返回
                </Text>
                <View style={{flex:1}}><Text style={{textAlign:'center'}}>
                    {this.props.title}
                </Text></View>
            </View>
        );
    }
}


export default withNavigation(Head);


Head.propTypes = {
    title: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    container:{height:44,alignItems:'center',paddingHorizontal:15,
        flexDirection:'row',borderBottomWidth:StyleSheet.hairlineWidth,borderColor:'#ccc',
        }
})