import React, { Component } from 'react';
import {
    View,
    Image,
} from 'react-native';

export default class BasePage extends Component {


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

}


