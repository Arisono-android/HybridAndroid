import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList, Image,
} from 'react-native';
import BIChartsItem from "../commons/bi/BIChartsItem";

export default class EChartsPage extends Component {


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

            dataArray:['line','bar','line'],

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
