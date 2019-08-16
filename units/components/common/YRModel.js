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
let Dimensions = require('Dimensions');
let screenWidth = Dimensions.get('window').width;
let dialogWidth = screenWidth - 40;


class YRModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'YRModel',
            modalVisible: false
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
    }
});


export  default YRModel;