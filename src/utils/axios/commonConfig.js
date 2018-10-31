import i18n from './i18n'
//import loadingBox from './loadingBox'

const intl = i18n.zh
/**
 * 默认请求携带url中的参数
 * */
export const queryParams = () => ({
  //_: new Date().getTime()
})

export const axiosConfig = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-cache'
  },
  headersXML: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  timeout: 10000,
  params: queryParams(),
  method: 'post'
}
/**
 * 请求自定义是否取消或非关闭loading效果
 * 默认请求前后自动加载与关闭loading
 * loading: 默认显示，false时关闭全部
 * */
const getDefaultSetting = setting => {
  let { loadingStart = true, loadingEnd = true, loading = true } = {
    ...setting
  }
  return {
    loadingStart,
    loadingEnd,
    loading
  }
}


export const checkErrStatus = err => {
  let result = {
    MESSAGE: intl['api.tips.serviceWarn']
  }
  if (err) {
    if (err.timeout && err.code == 'ECONNABORTED' && err.errno == 'ETIME') {
      result = {
        MESSAGE: intl['api.tips.timeout']
      }
    } else if (err.status >= 500 && err.status <= 504) {
      result = {
        MESSAGE: intl['api.tips.serviceWarn']
      }
    } else if (err.status >= 400 && err.status <= 404) {
      result = {
        MESSAGE: intl['api.tips.serviceWarn404']
      }
    } else {
      result = {
        MESSAGE: intl['api.tips.netWork']
      }
    }
    return result
  }
}


/**
 * 请求前loading效果处理
 * */
export const loading = (key, setting) => {
  let defaultSetting = getDefaultSetting(setting)
  if (!defaultSetting.loading) {
    return
  }
  if (key == 'loadingStart' && defaultSetting[key]) {
    const loadingView = document.createElement('div')
    loadingView.id = 'loadingView'
    loadingView.className = 'loading-view'
    loadingView.innerHTML = '<i></i><div class="mark-bg"></div>'
    document.body.appendChild(loadingView)
  }
  if (key == 'loadingEnd' && defaultSetting[key]) {
    const child = document.getElementById('loadingView')
    child.parentNode.removeChild(child)
  }
}
