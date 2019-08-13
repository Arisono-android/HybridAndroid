import api from './axios.config'
import config from './api.config'
import React from 'react';


function _apiFn(baseUrl) {
    if (baseUrl === 'service2') {
        api.creatAxios1.defaults.baseURL = config.SERVER_URL2
    } else if (baseUrl === 'service3') {
        api.creatAxios1.defaults.baseURL = config.SERVER_URL3
    } else {
        api.creatAxios1.defaults.baseURL = config.SERVER_URL1
    }
}

export const sendGet = ({url, params, headers}) => { // get 请求
    return api.creatAxios1.get(url, params, headers).then(res => res.data).catch(err => {
        console.log(err);
    });
}

export const sendPost = ({url, params, headers}) => { // post 请求
    return api.creatAxios1.post(url, params, headers).then(res => res.data).catch(err => {
        console.log(err);
    });

}

/**
 * 并发请求，同时发送多个请求，使用栗子：src/views/infoEntry/dragCard/dragCardService.js
 * 顺序和请求发送的顺序相同
 * @param {arr: [请求1,请求2...]}
 */
export const sendAll = ({arr}) => { // 并发请求
    return new Promise((resolve, reject) => {
        api.sendAll(arr).then(res => {
            return resolve(res)
        })
    })
}
