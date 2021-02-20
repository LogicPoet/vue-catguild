import request from '@/utils/request'

// 获取职员分页列表
export function getPage(params) {
  return request({
    url: '/user/staff/page',
    method: 'get',
    params
  })
}
