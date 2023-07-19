import { instance } from '@/utils/request'

/**
 * 获取数据总览数据
 * @param data - 请求数据
 */
// export function getDataTrends(data: object) {
//   return get('/getData', { params: data })
// }

export const getDataTrends = (data: object) =>
  instance.get<any, any>('/getData', { data })

/**
 * 登录
 * @param data - 请求数据
 */
export function login(data: object) {
  return instance.post('/login', data)
}
