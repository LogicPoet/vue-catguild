import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/entrust/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/entrust/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/entrust/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/entrust/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/entrust/update',
    method: 'post',
    data
  })
}
