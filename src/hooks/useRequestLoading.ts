import { useState } from 'react'

export const useRequestLoading = () => {
  // 定义loading数据
  const [loading, setLoading] = useState(false)

  const executeRequest = async (promiseFn: any) => {
    setLoading(true)
    await promiseFn()
    setLoading(false)
  }

  return [loading, executeRequest] as const
}
