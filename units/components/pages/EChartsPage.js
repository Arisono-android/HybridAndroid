import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList, Image,
} from 'react-native';
import BIChartsItem from "../commons/bi/BIChartsItem";
import BasePage from "./BasePage";

export default class EChartsPage extends BasePage {


    static navigationOptions = {

        headerBackImage:(

            <View style={{marginLeft:18}}>

                <Image
                    source={{uri: 'uu_back-icon'}}
                    style={{ width: 12, height: 20,marginRight:6}}
                />

            </View>


        ), //使用组件


    }


    constructor(props){

        super(props);

        this.state={

            dataArray:['line','bar','pie'],

        }


    }

    renderItem(data){

          return <BIChartsItem

           typeTitle = {data.item}

          />

    }


    render() {

        return (

            <View style={styles.container}>

                <FlatList

                    data={this.state.dataArray}
                    keyExtractor={item => "" + (item.item)}
                    renderItem = {data=>this.renderItem(data)}

                />

            </View>
        );
    }
}



const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#efefef',
    },

    title:{
        color:'white',
        fontSize:20,
        textAlign:'center',
    },

});
