let env = 'dev'
// if ((/env=online/.test(window.location.href))) {
//     env = 'online'
// } else if ((/env=dev/.test(window.location.href))) {
//     env = 'dev'
// } else {
//     env = 'dev' // 默认环境
// }
const SERVER_URL_LIST = {
    online: { // 正式环境
        SERVER_URL1: '',
        SERVER_URL2: '',
        SERVER_URL3: ''
    },
    dev: { // 测试环境
        SERVER_URL1: 'https://www.yundashi168.com/',
        SERVER_URL2: '',
        SERVER_URL3: ''
    }
}

//项目根路径
export const SERVER_URL = SERVER_URL_LIST[env].SERVER_URL1;

export const API = {
    TEST_GET: SERVER_URL + 'wxService/getParam/app/json',
    }


export default SERVER_URL_LIST[env]