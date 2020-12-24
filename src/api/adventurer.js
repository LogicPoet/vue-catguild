import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/adventurer/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/adventurer/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/adventurer/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/adventurer/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/adventurer/update',
    method: 'post',
    data
  })
}
