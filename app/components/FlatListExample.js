import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList

} from 'react-native';

import Head from '../common/Head';
export default class FlatListExample extends Component<Props> {

    _renderItem = ({item}) => {
        return (
            <View style={styles.item}>
                <Text>
                    {item.key}
                </Text>
            </View>
        )
    }
    render() {
        return (
            <View>
                <Head title={'FlatList'}/>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={this._renderItem}
                    onRefresh={()=>{}}
                    refreshing={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item:{height:50},
})