import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,

} from 'react-native';

import Head from '../common/Head';
export default class FlatListExample extends Component<Props> {
        constructor(props){
            super(props);
            this.state = {
                data:[],
            }

            this.num = 1;
            this.addData = true;

        }

    componentDidMount(){

       this._fetch( this.num );
    }

    _fetch = (num , refresh) => {
        fetch('http://gank.io/api/data/福利/10/' + num)
            .then(response =>response.json())
            .then( (responseData) => {
                    console.log( responseData);
                    console.log( '---');
                    if(refresh){
                        this.setState({
                            data: responseData.results
                        })
                    }else {
                        this.setState({
                            data: this.state.data.concat(responseData.results)
                        });
                    }
                    this.addData = true;

                },
                (responseData) => {
                    console.log(responseData);
                })
            .catch(e => console.log(e))
    }

    _refreshing = () => {
         this.num = 1;
         this._fetch( this.num, true);

    }
    _onEndReached = () => {

        if(this.addData){
            this._fetch( ++this.num );
            this.addData = false;

        }
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.item}>
                <Text>
                    {item.who} {index}
                </Text>
                <Image style={styles.itemImg} source={{uri: item.url}}/>
            </View>
        )
    }

    render() {
        console.log(this.state.data)
        return (
            <View style={{flex:1}}>
                <Head title={'FlatList'}/>
                <FlatList
                    style={{}}
                    data={this.state.data}
                    keyExtractor={(item, index) => item._id}
                    renderItem={this._renderItem}
                    onRefresh={this._refreshing}
                    refreshing={false}
                    initialNumToRender={5}
                    onEndReached={this._onEndReached}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item:{},
    itemImg:{height:100,width:150,resizeMode:'contain'},
})