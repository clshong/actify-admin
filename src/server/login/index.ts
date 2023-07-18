import type { ServerResult } from '#/public'
import { request } from '@/utils/request'

// 用户数据
interface User {
  id: number
  username: string
  phone: string
  email: string
}

// 用户权限数据
interface Roles {
  id: string
}

// 接口传入数据
interface LoginData {
  username: string
  password: string
}

interface LoginResult {
  token: string
  user: User
  permissions: Permissions[]
  roles: Roles[]
}

/**
 * 获取数据总览数据
 * @param data - 请求数据
 */
export function getDataTrends(data: object) {
  return request.get<ServerResult>('/dashboard', { params: data })
}

/**
 * 登录
 * @param data - 请求数据
 */
export function login(data: LoginData) {
  return request.post('/login', data) as Promise<ServerResult<LoginResult>>
}
