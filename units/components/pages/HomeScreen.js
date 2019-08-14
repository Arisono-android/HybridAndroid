import React from "react";
import {connect} from 'react-redux'
import {View, Text, Button,TouchableHighlight,StyleSheet} from "react-native";
import {changeBtnText} from "../../actions/bi/index";
import YRHttpRequest from  "../../utils/network/fetch"
import {API} from "../../utils/network/axios/api.config";
import {NativeModules} from 'react-native';
const YRRnBridge = NativeModules.YRRnBridge;

class HomeScreen extends React.Component {

    loadData=()=>{
        //fetch请求
        console.log("loadData():",API.TEST_GET);
        YRHttpRequest.get(API.TEST_GET).then(res=>{
            console.log("res.data=",res);
        }).catch(err=>{
            console.log("res.data=",err);
        })
        //axios请求
        // console.log("loadData():",API.TEST_GET);
        // sendGet({url:API.TEST_GET,params:{
        //     name:'arison'
        // }}).then(res=>{
        //     console.log("res.data=",res);
        // }).catch(err=>{
        //     console.log("res.data=",err);
        // })
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text style={{marginBottom: 10}}>Home Screen</Text>
                <Button
                    title="详情页"
                    onPress={() => {
                        navigation.navigate('Details', {name: '动态的'});
                    }}
                />

                <Text style={{marginBottom: 10}}>{this.props.btnText}</Text>
                <Button title="更新文字"
                        onPress={() => {
                             this.props.changeText("我的第一个ReactNative项目!");
                        }}/>

                <Button style={{marginBottom: 10}}
                        title="断点调式" onPress={()=>{
                    for (let i = 0; i < 10; i++) {
                            console.log("i*i=",i*i);
                    }
                }}/>

                <TouchableHighlight
                    underlayColor="#FF00FF"
                    activeOpacity={1}
                    style={styles.button} onPress={this.loadData.bind(this)}>
                    <Text style={styles.text} > Touch Here </Text>
                </TouchableHighlight>

                <Button title="iOS返回测试"
                        onPress={() => {

                                 YRRnBridge.goBack();

                        }}/>

                <Button title="热更新测试"
                        onPress={() => {

                            navigation.navigate('CodePushPage', {name: '热更新'});

                        }}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        borderRadius:5,
        padding: 10,
        margin:10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    },
    text:{
        fontWeight:'600',
        color:'#FFFFFF'
    }
})

const mapStateToProps = state => ({
    btnText:state.pageMainReducer.btnText
})

const mapDispatchToProps = dispatch => ({
    changeText:(text)=>{
        dispatch(changeBtnText(text));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)