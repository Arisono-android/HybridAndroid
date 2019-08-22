import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    DeviceEventEmitter
} from 'react-native';

import {NativeModules} from 'react-native';
const YRRnBridge = NativeModules.YRRnBridge;
import Orientation from 'react-native-orientation';
import Echarts from 'native-echarts';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

export  default class AllScreenChart extends Component {


    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        params.legend.padding = [10, 10, 10, 10];
        console.log(params);
        console.log(this.props.navigation.state.params);

        this.state = {
            options: params,
            width: width,
            height: height,
        }
    }


    componentDidMount() {
        Orientation.lockToLandscapeRight();
       // Orientation.lockToPortrait();
        const initial = Orientation.getInitialOrientation();
        if (initial === 'PORTRAIT') {
            //Orientation.lockToLandscape();
            this.setState({
                width: width,
                height: height,
            })

        } else {
            //Orientation.lockToPortrait();
            this.setState({
                width: height,
                height: width,
            })
        }

    }


    _onPressAllScreen() {
        Orientation.lockToPortrait();
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.topView_image}
                       source={require('../../assets/images/icon_screen.png')}></Image>
                <View style={styles.topView}>
                    <Text style={styles.topView_title}>
                        今年水果排行榜和种类
                    </Text>

                    <TouchableOpacity
                        style={styles.topView_touch}
                        onPress={() => this._onPressAllScreen()}>
                        <Image
                            style={{width:22,height:22}}
                            source={require('../../assets/images/icon_delete.png')}></Image>
                    </TouchableOpacity>

                </View>

                <Echarts option={this.state.options} height={this.state.width - 50} width={this.state.height}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },

    topView: {
        marginTop: 20,
        marginBottom: 6,
        height: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    topView_title: {
        fontSize: 18,
        color: '#333333',
        height: 30,
        marginLeft: 10,
        width: 200,
        lineHeight: 30,
    },

    topView_touch: {
        padding: 1,
        marginRight: 20,
        paddingRight: 20,
        borderWidth:2,
        borderColor:"#4D4D4D",
        height: 30,
        width: 30,
    },
    topView_image: {
        marginTop: 5,
        marginRight: 18,
        height: 20,
        width: 20,
    },


});
