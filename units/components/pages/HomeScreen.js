import React from "react";
import {connect} from 'react-redux'
import {
    Platform,
    StatusBar,
    View,
    Text,
    Button,
    TouchableHighlight,
    StyleSheet,
    ScrollView,
    RefreshControl
} from "react-native";
import {changeBtnText} from "../../actions/bi/index";
import YRHttpRequest from  "../../utils/network/fetch"
import {API} from "../../utils/network/axios/api.config";
import YRSearchBar from "../common/YRSearchBar";


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '主页面',
        headerStyle: Platform.OS === 'android' ? {
            paddingTop: StatusBar.currentHeight,
            height: StatusBar.currentHeight + 56,
        } : {}
    }
    constructor(props){
        super(props);
        this.state={
            name:'YRSearchBar',
            inputValue:"",
            refreshing:false
        };
    }


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

    onSearchChangeText=(text)=>{
       console.log("onSearchChangeText() text:",text);
        if (text) {
            this.setState({ inputValue: text })
            clearTimeout(this.settimeId);
            this.settimeId = setTimeout(() => {

            }, 1000);
        } else {
            this.setState({inputValue: ''})
        }
    }

    onSearch=(inputValue)=>{
        console.log("onSearch()",inputValue);
    }
    _onRefresh=()=>{
        console.log("_onRefresh()");

    }

    componentDidMount(){

    }


    render() {
        const {navigation} = this.props;
        return (<View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            title={'下拉刷新'}
                            refreshing={this.state.refreshing}
                            colors={['rgb(255, 176, 0)',"#ffb100"]}
                            onRefresh={() => {
                                this._onRefresh();
                            }}
                        />
                    }
                >

                    <YRSearchBar
                        value={this.state.inputValue}
                        placeholder="搜索"
                        onSearch={this.onSearch}
                        onSearchChangeText={this.onSearchChangeText}/>
                    <View style={{ alignItems: "center", justifyContent: "center"}}>

                        <Text style={{marginBottom: 10}}>Home Screen</Text>
                        <Button
                            title="详情页"
                            onPress={() => {
                                navigation.navigate('Details', {name: '动态的'});
                            }}
                        />
                        <Button
                            title="异步进度条"
                            onPress={() => {
                                navigation.navigate('YRSearchBar', {name: '进度条'});
                            }}
                        />

                        <Button
                            title="自定义对话框"
                            onPress={() => {
                                navigation.navigate('YRModel', {name: '进度条'});
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

                    </View>
                </ScrollView>

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