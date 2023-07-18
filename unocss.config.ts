import { defineConfig } from 'unocss'

export default defineConfig({
  /** 排除 */
  exclude: ['node_modules'],
  /** 自定义规则 */
  rules: [['app-container', { padding: '20px' }]],
  /** 自定义快捷方式 */
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center'
  }
})
