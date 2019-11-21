/* eslint-disable */
import axios from "axios"


export function request(config){
    const instance = axios.create({
      baseURL:"http://localhost:8080",
      timeout:5000
    })
  //拦截器
  instance.interceptors.request.use(configs => {
    return configs
  },err => {

  })

  return instance(config)
}