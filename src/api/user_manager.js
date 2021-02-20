import request from '@/utils/request'

// 获取组织树
export function getOrganization(params) {
  return request({
    url: '/organization/tree',
    method: 'get',
    params
  })
}
