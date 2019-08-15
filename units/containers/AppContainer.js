import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../components/pages/HomeScreen";
import {DetailsScreen} from "../components/pages/DetailsScreen";
import {Platform,StatusBar} from "react-native";
import YRActivityIndicator from "../components/common/YRActivityIndicator";
import YRModel from "../components/common/YRModel";
export const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: "首页",
            headerBackTitle:'返回主界面',
            headerStyle: Platform.OS === 'android' ? {
                paddingTop: StatusBar.currentHeight,
                height: StatusBar.currentHeight + 56,
            } : {}
        }
    },
    Details:{
        screen:DetailsScreen,
        navigationOptions : {
            title: '详情',
            headerBackTitle:'返回',//设置返回此页面的返回按钮文案，有长度限制
            headerStyle: Platform.OS === 'android' ? {
                paddingTop: StatusBar.currentHeight,
                height: StatusBar.currentHeight + 56,
            } : {}
        }
    },
    YRActivityIndicator:{
        screen:YRActivityIndicator
    },
    YRModel:{
        screen:YRModel
    }
}, {
    initialRouteName: 'Home',
});


export default createAppContainer(AppNavigator);