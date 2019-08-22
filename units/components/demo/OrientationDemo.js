/**
 * Created by Arison on 2019/8/21.
 */
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Orientation from 'react-native-orientation';


export default class OrientationDemo extends Component<Props> {

    constructor() {
        super(...arguments);

        this.state = {
            isBool: Orientation.getInitialOrientation() === 'PORTRAIT',//当前是否是竖屏(true),横屏(false)
            summary: ''//描述
        };

        this._handleOnPress = this._handleOnPress.bind(this);
    }


    //生命周期函数、render渲染完成之后调用
    componentDidMount() {
        //默认锁定为竖屏
        Orientation.lockToPortrait();
    }

    _orientationDidChange = (orientation) => {
        if (orientation === 'LANDSCAPE') {
            // do something with landscape layout
        } else {
            // do something with portrait layout
        }
    },
    componentWillUnmount() {
        Orientation.getOrientation((err, orientation) => {
            console.log(`Current Device Orientation: ${orientation}`);
        });


        // Remember to remove listener
        Orientation.removeOrientationListener(this._orientationDidChange);
    }

    //自定义方法
    _handleOnPress = () => {
        const {isBool} = this.state;
        if (isBool) {
            this.setState({isBool: false, summary: '本来是竖屏、现在锁定为横屏了....'});

            //竖屏时、锁定为横屏
            Orientation.lockToLandscape();

        } else {
            this.setState({isBool: true, summary: '本来是横屏、现在锁定为竖屏了....'});

            //横屏时、锁定为竖屏
            Orientation.lockToPortrait();
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>方向:{this.state.isBool ? '竖屏' : '横屏'}</Text>
                <Text style={styles.welcome}>描述:{this.state.summary}</Text>

                <Button title={'切换屏幕方向'}
                        onPress={() => this._handleOnPress()}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
