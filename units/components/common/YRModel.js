import React from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';

import Picker from 'react-native-picker';
import ModalDropdown from 'react-native-modal-dropdown';

let Dimensions = require('Dimensions');
let screenWidth = Dimensions.get('window').width;
let dialogWidth = screenWidth - 40;

const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];
class YRModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'YRModel',
            modalVisible: false,
            selectTime:""
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentDidMount() {

    }



    render() {
        /*自定义对话框*/
        return (<View style={styles.page}>
            <Modal animationType={"slide"}
                   transparent={true}
                   visible={this.state.modalVisible}
                   onRequestClose={() => {
                       this.setModalVisible(false)
                   }}>
               {/* <TouchableOpacity style={{flex:1}} >*/}
                    <View style={styles.container}>
                        <View style={styles.innerContainer}>
                            <View style={styles.header}>

                                <Image
                                    style={{width:22,height:22}}
                                    source={require('../../assets/images/icon_delete.png')}></Image>
                            </View>
                           <View style={styles.content}>
                               <TextInput
                                   style={styles.inputtext}
                                   placeholder="Type here!"
                               />
                               <TouchableHighlight
                                   style={styles.btnSure}
                                   underlayColor="#82D2F8"
                                   onPress={() => {
                                       this._showTimePicker();
                                   }}>
                                   <Text  style={styles.textSure}>选择时间:{this.state.selectTime}</Text>
                               </TouchableHighlight>
                               <ModalDropdown
                                   defaultValue="请下拉选择选项"
                                   style={styles.dropdown_2}
                                   textStyle={styles.dropdown_2_text}
                                   dropdownStyle={styles.dropdown_2_dropdown}
                                   options={DEMO_OPTIONS_1}
                               />
                           </View>
                            <View style={styles.btnContainer}>
                                <TouchableHighlight
                                    style={styles.btnClose}
                                    underlayColor="#fff"
                                    onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                }}>
                                    <Text  style={styles.textClose}>重置</Text>
                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={styles.btnSure}
                                    underlayColor="#82D2F8"
                                    onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                }}>
                                    <Text  style={styles.textSure}>确认</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
              {/*  </TouchableOpacity>*/}
            </Modal>

            <TouchableHighlight
                underlayColor="#1FB579"
                style={styles.textContainer} onPress={() => {
                this.setModalVisible(true)
            }}>
                <Text style={{  fontSize:22}}>弹出对话框</Text>
            </TouchableHighlight>

        </View>)
    }



    _showTimePicker() {
        let that=this;
        let years = [],
            months = [],
            days = [],
            hours = [],
            minutes = [];

        for(let i=1;i<51;i++){
            years.push(i+1980);
        }
        for(let i=1;i<13;i++){
            months.push(i);
            hours.push(i);
        }
        for(let i=1;i<32;i++){
            days.push(i);
        }
        for(let i=1;i<61;i++){
            minutes.push(i);
        }
        let pickerData = [years, months, days, ['上午', '下午'], hours, minutes];
        let date = new Date();
        let selectedValue = [
            date.getFullYear(),
            date.getMonth()+1,
            date.getDate(),
            date.getHours() > 11 ? '下午' : '上午',
            date.getHours() === 12 ? 12 : date.getHours()%12,
            date.getMinutes()
        ];
        Picker.init({
            pickerData,
            selectedValue,
            pickerBg:[255,255,255,1],
            pickerCancelBtnText:'取消',
            pickerConfirmBtnText:'确定',
            pickerTitleText: '时间选择',
            wheelFlex: [2, 1, 1, 2, 1, 1],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
                let selectTime=pickedValue[0]+"年"+pickedValue[1]+"月"+pickedValue[2]+"日"+pickedValue[3]+" "+pickedValue[4]+"时"+pickedValue[5]+"分";
                // this.refs.toast.show('pickedValue：'+selectTime,6000);
               that.setState({
                   selectTime:selectTime
               })
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                let targetValue = [...pickedValue];
                if(parseInt(targetValue[1]) === 2){
                    if(targetValue[0]%4 === 0 && targetValue[2] > 29){
                        targetValue[2] = 29;
                    }
                    else if(targetValue[0]%4 !== 0 && targetValue[2] > 28){
                        targetValue[2] = 28;
                    }
                }
                else if(targetValue[1] in {4:1, 6:1, 9:1, 11:1} && targetValue[2] > 30){
                    targetValue[2] = 30;

                }
                // forbidden some value such as some 2.29, 4.31, 6.31...
                if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
                    // android will return String all the time，but we put Number into picker at first
                    // so we need to convert them to Number again
                    targetValue.map((v, k) => {
                        if(k !== 3){
                            targetValue[k] = parseInt(v);
                        }
                    });
                    Picker.select(targetValue);
                    pickedValue = targetValue;
                }
            }
        });
        Picker.show();
    }
}

const styles = StyleSheet.create({
    page:{
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    innerContainer: {
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor:"#fff",
        borderWidth:1,
    },
    header:{

        width:dialogWidth,
        flexDirection:'row',
        justifyContent:'flex-start',
        padding:8
    },

    content:{
        borderColor:"#82D2F8",
    },

    btnContainer:{
        flexDirection:"row",
        justifyContent:"flex-end",
        width:dialogWidth,
        borderTopWidth:1,
        paddingTop:10,
        borderTopColor:'#E7E7E7',
        alignItems:'center',
        padding:3
    },
    inputtext:{
        width:dialogWidth-20,
        margin:10,
    },
    textSure: {
        color:"#fff"
    },
    textClose:{
        color:"#82D2F8"
    },
    textContainer:{
        borderColor:"#fff",
        borderWidth:1,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
    },
    btnClose:{
        borderColor:"#82D2F8",
        borderWidth:1,
        borderRadius:5,
        paddingTop:6,
        paddingBottom:6,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:"#fff"
    },
    btnSure:{
        borderColor:"#82D2F8",
        borderWidth:1,
        borderRadius:5,
        paddingTop:6,
        paddingBottom:6,
        paddingLeft:20,
        paddingRight:20,
        margin:10,
        backgroundColor:"#82D2F8"
    },
    dropdown_2: {
        alignSelf: 'center',
        justifyContent:"center",
        width:dialogWidth-20,
        height:40,
        marginBottom: 32,
        borderWidth: 1,
        borderRadius: 2,
        borderColor:"#E7E7E7"
    },
    dropdown_2_text: {
        marginVertical: 10,
        marginHorizontal: 6,
        fontSize: 13,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    dropdown_2_dropdown: {
        width:dialogWidth-20,
        height: 100,
        borderColor: '#E7E7E7',
        borderWidth: 1,
        borderRadius: 3,
    }
});


export  default YRModel;