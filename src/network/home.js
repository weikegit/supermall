import {
  request
} from './request'

export function getHomeCarousel() {
  //ajax请求
  return request({
    url: "/json/homedata.json",
    method: "GET"
  })
}
