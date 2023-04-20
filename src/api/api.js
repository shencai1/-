import http from '../utils/http'

export const login = (data = {}) => {
  return http({
    url: '/admin/login',
    method: 'post',
    data
  })
}

export const getinfo = (data = {}) => {
  return http({
    url: '/admin/getinfo',
    method: 'post',
    data
  })
}

export const logout = (data = {}) => {
  return http({
    url: '/admin/logout',
    method: 'post',
    data
  })
}

export const statistics1 = (data = {}) => {
  return http({
    url: '/admin/statistics1',
    method: 'get',
    data
  })
}

export const statistics2 = (data = {}) => {
  return http({
    url: '/admin/statistics2',
    method: 'get',
    data
  })
}

export const category = (data = {}) => {
  return http({
    url: '/admin/category',
    method: 'get',
    data
  })
}

export const goods = (data = {}) => {
  return http({
    url: '/admin/goods',
    method: 'get',
    params: data
  })
}
