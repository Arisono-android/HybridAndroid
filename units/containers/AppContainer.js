import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../components/pages/HomeScreen";
import {DetailsScreen} from "../components/pages/DetailsScreen";
import CodePushPage from "../components/pages/CodePushPage";

export const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "首页",
            headerBackTitle:'返回主界面',//设置返回此页面的返回按钮文案，有长度限制
        }
    },
    Details:{
        screen:DetailsScreen,
        navigationOptions : {
            title: '详情',
            headerBackTitle:'返回',//设置返回此页面的返回按钮文案，有长度限制
        }
    },
    CodePushPage:{
        screen:CodePushPage,//热更新测试页面
        navigationOptions : {
            title: '热更新',
            headerBackTitle:'热更新',
        }
    }
}, {
    initialRouteName: 'Home',
});


export default createAppContainer(AppNavigator);