import React, { Component } from 'react';
import {
    ReactNative,
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    Alert,
    UIManager,
} from 'react-native';

import Head from '../common/Head';
import BgImg from '../my/BgImg';
import CommonStyles from '../common/CommonStyles';

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

    _press = (item ,layout) => {

        this.props.navigation.navigate('ShowImg',{uri: item.url, transition: 'forInitial',layout});
    }
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.item}>
                <Text>
                    {item.who} {index}
                </Text>

                    <BgImg style={[CommonStyles.itemImg]} uri={item.url} press={(ref) => this._press(item,ref)}
                         ></BgImg>

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
})