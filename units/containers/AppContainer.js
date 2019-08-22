import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../components/pages/HomeScreen";
import {DetailsScreen} from "../components/pages/DetailsScreen";
import {Platform,StatusBar} from "react-native";
import YRActivityIndicator from "../components/common/YRActivityIndicator";
import YRModel from "../components/common/YRModel";
import YRDatePicker from "../components/common/YRDatePicker";
import CodePushPage from "../components/pages/CodePushPage";
import EChartsPage from "../components/pages/EChartsPage";
import AllScreenChart from "../components/pages/AllScreenChart";
import OrientationDemo from "../components/demo/OrientationDemo";

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
    },
    YRDatePicker:{
        screen:YRDatePicker
    },
    CodePushPage:{
        screen:CodePushPage,//热更新测试页面
        navigationOptions : {
            title: '热更新',
            headerBackTitle:'热更新',
        }
    },
    EChartsPage:{
        screen:EChartsPage,//热更新测试页面
        navigationOptions : {
            title: '图表',
            headerBackTitle:'图表',
        }
    },
    AllScreenChart:{
        screen: AllScreenChart,//热更新测试页面
        navigationOptions : {
            gesturesEnabled: false,
            header:null,
        }
},OrientationDemo:{
        screen:OrientationDemo,
        navigationOptions : {
            gesturesEnabled: false,
            header:null,
        }
    }
}, {
    initialRouteName: 'Home',
});


export default createAppContainer(AppNavigator);