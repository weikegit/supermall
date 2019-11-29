import {
  request
} from './request'

export function getHomeChildren() {
  //ajax请求
  return request({
    url: "/json/homedata.json",
    method: "GET"
  })
}
