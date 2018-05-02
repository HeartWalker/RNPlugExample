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


class TouchAble extends Component {
   render(){
       const {screen} = this.props;
       return(
           <View style={styles.view}>
               <TouchableOpacity onPress={()=>this.props.navigation.navigate(screen)} style={styles.touch}>
                   <Text>go to {screen}</Text>
               </TouchableOpacity>
           </View>
       )
   }
}

export default withNavigation(TouchAble);

TouchAble.propTypes = {
    screen: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    view:{
        height:40,borderBottomWidth:StyleSheet.hairlineWidth,borderColor:'#555'
    },
    touch:{flex:1,justifyContent:'center',paddingLeft:15}

})

