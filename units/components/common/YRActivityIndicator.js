import React from 'react';
import { Loading, EasyLoading } from './YRLoading';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';


class YRActivityIndicator extends React.Component{
    constructor(props){
        super(props);
        this.state = {// 初始设为显示加载动画
            animating: true,
        };
    }

    showOrHide() {
        EasyLoading.show('Loading...');
         // setTimeout(()=>{
         //     EasyLoading.dismis();
         //         },11000);
        if (this.state.animating) {
            this.setState({
                animating: false
            });
        } else {
            this.setState({
                animating: true
            });
        }
    }

    dissLoading() {
        EasyLoading.dismis()
    }

    componentDidMount() {

    }


    render(){
        return ( <View style={styles.container}>
            {/* 切换显示或隐藏的按钮 */}
            <TouchableOpacity underlayColor="#fff" style={styles.btn} onPress={
                this.showOrHide.bind(this)}>
                <Text style={{color:'#fff', fontSize: 20}}>显示/隐藏</Text>
            </TouchableOpacity>


            <TouchableOpacity underlayColor="#fff" style={styles.btn} onPress={
                this.dissLoading.bind(this)}>
                <Text style={{color:'#fff', fontSize: 20}}>关闭</Text>
            </TouchableOpacity>

            {/* 小号的指示器 */}
            <ActivityIndicator
                animating={this.state.animating}

                size="small" />
            {/* 大号的指示器 */}
            <ActivityIndicator
                animating={this.state.animating}
                style={[styles.centering, {height: 80}]}
                size="large" />

            <Loading />
        </View>)

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    btn:{
        marginTop:10,
        width:150,
        height:35,
        backgroundColor:'#3BC1FF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
    },
});
export  default YRActivityIndicator;