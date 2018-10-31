/**
 * ajax使用方式：
 * 
 * import api from 'tools/services'
 * 
 * api.request({
 *  url: '/xxx',
 *  method: 'GET',
 *  params: {a: 1, b: 2},
 * })
 * 
 * api.request({
 *  url: '/xxx',
 *  method: 'POST',
 *  data: {a: 1, b: 2},
 *  xml: false, //xml默认false，为json
 *  loadingStart: false, //默认true，是否loading
 * })
 * 
**/

import axios from 'axios'
import { axiosConfig, loading, checkErrStatus } from './commonConfig'

//全局axios默认配置
axios.defaults.headers = axiosConfig.headers
axios.defaults.params = axiosConfig.params
axios.defaults.method = axiosConfig.method
axios.defaults.timeout = axiosConfig.timeout
//拦截器，接口response接收处理
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response.data
  },
  function(error) {
    // Do something with response error
    const result = checkErrStatus(error)
    return Promise.reject(result)
  }
)

export const request = options => {
  loading('loadingStart', options)
  if (options.xml) {
    axios.defaults.headers = axiosConfig.headersXML
  } else {
    axios.defaults.headers = axiosConfig.headers
  }
  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        loading('loadingEnd', options)
        resolve(res)
      })
      .catch(err => {
        loading('loadingEnd', options)
        reject(err)
      })
  })
}

export const requestAll = requestArry => {
  loading('loadingStart')
  const requsetAll = requestArry.reduce((preData, thisData) => {
    preData.push(axios(thisData))
    return preData
  }, [])
  return new Promise((resolve, reject) => {
    axios
      .all(requsetAll)
      .then(res => {
        loading('loadingEnd')
        resolve(res)
      })
      .catch(err => {
        loading('loadingEnd')
        reject(err)
      })
  })
}
