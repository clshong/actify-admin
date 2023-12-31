import type { SideMenu } from '#/public'
import { system } from './system'
import { demo } from './demo'
import { content } from './content'

export const defaultMenus: SideMenu[] = [
  {
    label: '仪表盘',
    key: 'dashboard',
    icon: 'la:tachometer-alt',
    children: [
      {
        label: '数据总览',
        key: '/dashboard',
        rule: '/dashboard'
      }
    ]
  },
  ...(demo as SideMenu[]),
  ...(system as SideMenu[]),
  ...(content as SideMenu[])
]
