import axios from 'axios'


// encodeURIComponent() 函数可把字符串作为 URI 组件进行编码
let base = '';
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: '${base}${url}',
    data: params,
      // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串
     // 对 data 进行任意转换处理
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '='
        encodeURIComponent(data[it]) + '&'
      }
      return ret;
    }],
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    }
  })
}

export const uploadFileRequest=(url,params)=> {
    return axios({
        method:'post',
        url:'${base}${url}',
        data:params,
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })
}



export const putRequest = (url, params) => {
    return axios({
      method: 'put',
      url: `${base}${url}`,
      data: params,
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
  export const deleteRequest = (url) => {
    return axios({
      method: 'delete',
      url: `${base}${url}`
    });
  }
  export const getRequest = (url,params) => {
    return axios({
      method: 'get',
      data:params,
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `${base}${url}`
    });
  }
  