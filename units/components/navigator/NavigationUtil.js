export  default class  NavigationUtil{
    /*
    * 跳转到指定页面
    * params 要传递的参数
    * page 跳转的页面
    * */
    static goPage(params,page){

        const  navigation = NavigationUtil.navigation;

        if (!navigation) {

            console.log('navigation can not be null');

            alert('navigation can not be null');

            return;


        }
        navigation.navigate(

            page,
            {

                ...params

            }

        )


    };


    static goBack(navigation){

        navigation.goBack();


    }

}