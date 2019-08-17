/**
 * Created by Arison on 2019/8/16.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions} from 'react-native';
import Picker from 'react-native-picker';
import Toast, {DURATION} from 'react-native-easy-toast'


class YRDatePicker extends React.Component{

    // static propTypes = {
    //     dateTimeCallback: PropTypes.func
    // };

    constructor(props, context) {
        super(props, context);
    }



    _createDateData() {
        let date = [];
        for(let i=1970;i<2020;i++){
            let month = [];
            for(let j = 1;j<13;j++){
                let day = [];
                if(j === 2){
                    for(let k=1;k<29;k++){
                        day.push(k+'日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if(i%4 === 0){
                        day.push(29+'日');
                    }
                }
                else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                    for(let k=1;k<32;k++){
                        day.push(k+'日');
                    }
                }
                else{
                    for(let k=1;k<31;k++){
                        day.push(k+'日');
                    }
                }
                let _month = {};
                _month[j+'月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i+'年'] = month;
            date.push(_date);
        }
        return date;
    }


    _showTimePicker() {
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
                this.refs.toast.show('pickedValue：'+selectTime,6000);

                dateTimeCallback(pickedValue);
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

    _toggle() {
        Picker.toggle();
    }

    _isPickerShow(){
        Picker.isPickerShow(status => {
            alert(status);
        });
    }

    render() {
        const { dateTimeCallback } = this.props;
        this._showTimePicker.bind(this,dateTimeCallback);
        return (
            <View style={{height: Dimensions.get('window').height}}>
          {/*      <TouchableOpacity style={{marginTop: 40, marginLeft: 20}} onPress={this._showDatePicker.bind(this)}>
                    <Text>DatePicker</Text>
                </TouchableOpacity>*/}
                {/*<TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._showTimePicker.bind(this,dateTimeCallback)}>*/}
                    {/*<Text>TimePicker</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._toggle.bind(this)}>*/}
                    {/*<Text>toggle</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._isPickerShow.bind(this)}>*/}
                    {/*<Text>isPickerShow</Text>*/}
                {/*</TouchableOpacity>*/}
                <Toast
                    ref="toast"
                    position='center'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:18,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around'
    }

})

export  default YRDatePicker;
