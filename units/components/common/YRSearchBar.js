import React from 'react';
import {
    Keyboard,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet
} from "react-native"
let Dimensions = require('Dimensions');
let screenWidth = Dimensions.get('window').width;

/*自定义搜索框组件*/
class YRSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        };
    }

    onStartSearch = (onSearch) => {
        Keyboard.dismiss();
        onSearch(this.refs.keyWordInput.props.value);
    }

    render() {
        let {placeholder, onSearchChangeText, value, onSearch} = this.props;
        return <View style={styles.searchContainer}>
            <View style={styles.search}>
                <Image source={require('../../assets/images/icon_find.png')}
                       style={{width: 18 ,height: 18}}></Image>
                <TextInput underlineColorAndroid="transparent"
                           placeholder={placeholder}
                           style={styles.searchInput}
                           onChangeText={onSearchChangeText}
                           value={value}
                           ref="keyWordInput"
                           onSubmitEditing={this.onStartSearch.bind(this, onSearch)}>
                </TextInput>
                <TouchableOpacity
                    onPress={this.onStartSearch.bind(this, onSearch)}
                    style={styles.searchView}>
                    <Text style={{color: '#0391ff', fontSize: 14}}>搜索</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#F8F8F8"
    },
    search: {
        height: 32,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchInput: {
        marginLeft: 10,
        width: screenWidth * 7 / 10,
        height: 30,
        padding: 0,
        fontSize: 14,
    },
    searchView: {
        justifyContent: "flex-end",
    }
});

export  default YRSearchBar;