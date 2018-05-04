import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    Alert,
} from 'react-native';

import Head from '../common/Head';
import BgImg from '../my/BgImg';


export default class FlatListExample extends Component<Props> {
        constructor(props){
            super(props);
            this.state = {
                data:[],
                loading: false
            }

            this.num = 1;

        }

    componentDidMount(){

       this._fetch( this.num );
    }

    _fetch = (num , refresh) => {
        fetch('http://gank.io/api/data/福利/10/' + num)
            .then(response =>response.json())
            .then( (responseData) => {
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


                },
                (responseData) => {

                    console.log(responseData);
                })
            .catch(e => console.log(e))
            .finally(()=>{
                this.setState({loading:false});
              })
    }

    _refreshing = () => {
         this.num = 1;
         this._fetch( this.num, true);

    }
    _onEndReached = () => {
        if(!this.state.loading){
            this._fetch( ++this.num );
            this.setState({loading:true});

        }
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.item}>
                <Text>
                    {item.who} {index}
                </Text>
                <TouchableOpacity   onPress={() => {this.props.navigation.navigate('ShowImg',{uri: item.url})
                }}>
                    <BgImg style={styles.itemImg} source={{uri: item.url}}
                         ></BgImg>
                </TouchableOpacity>

            </View>
        )
    }

    _renderFooter = ()=> {
        if(this.state.loading){
            return (
                <Text style={{paddingVertical:10,textAlign:'center'}}>
                    loading
                </Text>
            )
        }else {
            return null
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Head title={'FlatList'}/>
                <FlatList
                    style={{}}
                    ListFooterComponent={this._renderFooter}
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
    itemImg:{height:100,width:150,},
})