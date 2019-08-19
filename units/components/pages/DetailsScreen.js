/**
 * Created by Arison on 2019/6/11.
 */
import React from "react";
import { View, Button,Text } from "react-native";

export class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'DetailsScreen',
        headerBackTitle:'返回',//设置返回此页面的返回按钮文案，有长度限制
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text  style={{marginBottom: 10}}>Details Screen</Text>
                <View   style={{margin: 3}}>
                    <Button
                        title="再次进入详情界面"
                        onPress={() => this.props.navigation.push('Details')}
                    ></Button>
                </View>
                <View   style={{margin: 3}}>
                <Button
                    title="跳转到主界面"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                </View>
                <View   style={{margin: 3}}>
                <Button
                    title="返回"

                    onPress={() => this.props.navigation.goBack()}
                />
                </View>
            </View>
        );
    }
}