import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import {NativeModules} from 'react-native';
const YRRnBridge = NativeModules.YRRnBridge;

import Echarts from 'native-echarts';
import Dimensions from 'Dimensions';
import NavigationUtil from "../../navigator/NavigationUtil";
const {width} = Dimensions.get('window');

export  default  class BIChartsItem extends Component {


    constructor(props) {
        super(props);

        const{typeTitle} = this.props;


        const typeOptions = {

            apple:[2, 4, 7, 2, 2, 7, 13, 16],
            organ: [6, 9, 9, 2, 8, 7, 17, 18],
            banana: [6, 9, 3, 2, 8, 7, 1, 8],

        }

        const option = {
            title:{
                text:'水果对比',
                top:'0',
                left:'10',
                font:10,
                textStyle:{

                    fontSize: 18,
                    color:'darkGray',


                }

            },
            //点击某一个点的数据的时候，显示出悬浮窗
            tooltip : {
                trigger: 'axis'
            },
            //可以手动选择现实几个图标
            legend: {
                padding:[

                    240,
                    100,
                    100,
                    100,
                ],
                data:['苹果','橘子','香蕉']
            },
            //各种表格
            toolbox: {
                //改变icon的布局朝向
                orient: 'horizontal',
                show : false,
                showTitle:true,
                feature : {
                    //show是否显示表格，readOnly是否只读
                    dataView : {show: true, readOnly: true},
                    magicType : {
                        //折线图  柱形图    总数统计 分开平铺
                        type: ['line', 'bar','stack','tiled'],
                    },

                }
            },
            xAxis : [
                {
                    //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                    boundaryGap:true,
                    type : 'category',
                    name : '时间',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '销量(kg)'
                }
            ],
            //图形的颜色组
            color:['rgb(249,159,94)','rgb(67,205,126)','rgb(167,205,126)'],
            //需要显示的图形名称，类型，以及数据设置
            series : [
                {
                    name:'苹果',
                    //默认显
                    type:typeTitle,
                    data:typeOptions.apple
                },
                {
                    name:'橘子',
                    type:typeTitle,
                    data:typeOptions.organ
                },{
                    name:'香蕉',
                    type:typeTitle,
                    data:typeOptions.banana
                }
            ]
        };

         const pieOptions = {
             title:{
                 text:'水果对比',
                 top:'0',
                 left:'10',
                 font:10,
                 textStyle:{

                     fontSize: 18,
                     color:'darkGray',


                 }

             },
             legend: {
                 orient: 'horizontal',
                 type:'scroll',
                 data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
                 padding:[

                     240,
                     100,
                     100,
                     100,
                 ],
             },
             series : [
                 {
                     name: '访问来源',
                     type: 'pie',
                     radius : '55%',
                     center: ['50%', '50%'],
                     data:[
                         {value:335, name:'直接访问'},
                         {value:310, name:'邮件营销'},
                         {value:334, name:'联盟广告'},
                         {value:135, name:'视频广告'},
                         {value:548, name:'搜索引擎'}
                     ],
                     itemStyle: {
                         emphasis: {
                             shadowBlur: 10,
                             shadowOffsetX: 0,
                             shadowColor: 'rgba(0, 0, 0, 0.5)'
                         }
                     }
                 }
             ]
         };

        this.state = {

            options: typeTitle === 'pie' ? pieOptions:option,
        }
    }


    _onPressAllScreen(){


        NavigationUtil.goPage(this.state.options,'AllScreenChart',)


    }

    render() {


        return (
            <View style={styles.cell_content}>

                <View  style={styles.topView}>

                    <Text style={styles.topView_title}>

                        今年水果排行榜和种类

                    </Text>


                    <TouchableOpacity

                        style = {styles.topView_touch}

                        onPress={()=>this._onPressAllScreen()}


                    >

                        <Image style={styles.topView_image}
                            source={require('../../../assets/images/icon_screen.png')}
                        >


                        </Image>

                    </TouchableOpacity>

                </View>

                <Echarts option={this.state.options} height={260} width={width}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    cell_content:{

        backgroundColor:'white',
        padding:10,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        marginVertical:3,
        borderColor:'#dddddd',
        borderWidth:0.5,
        borderRadius:8,
        shadowColor:'gray',
        shadowOffset:{width: 2,height: 2},
        shadowOpacity:0.4,
        shadowRadius:1,
        elevation: 2,

    },

    topView:{

        height: 30,
        justifyContent:'space-between',
        flexDirection:'row',

    },

    topView_title:{

       fontSize:18,
        color: '#333333',
        height:30,
        marginLeft: 10,
        width:200,
        lineHeight:30,

    },
    topView_touch:{

        padding:1,
        height:30,
        width:30,


    },
    topView_image:{

        marginTop:5,
        height:20,
        width:20,

    },


});