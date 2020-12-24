import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/staff/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/staff/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/staff/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/staff/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/staff/update',
    method: 'post',
    data
  })
}
