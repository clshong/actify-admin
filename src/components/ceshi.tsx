import { FC, useState, useEffect } from 'react'
import { Button } from 'antd'

import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { changeCount } from '@/store/modules/user'
import { getDataTrends } from '@/service/login'
import { useRequestLoading } from '@/hooks/useRequestLoading'

const App: FC = () => {
  const [name, setName] = useState('')
  const user = useAppSelector((state) => state.user.count)
  const dispatch = useAppDispatch()
  const [loading, executeRequest] = useRequestLoading()

  const handlerData = () => {
    executeRequest(async () => {
      const res = await getDataTrends({})
      console.log(res)
      setName(res.data.nickname)
    })
  }

  useEffect(() => {
    handlerData()
  }, [])

  return (
    <div className="flex flex-col justify-center align-center h-72 items-center m-10">
      <p>helloworld</p>
      <Button type="primary" onClick={() => dispatch(changeCount())}>
        点击加1
      </Button>
      <br />
      <div>{{ loading } ? <div>{name}</div> : '数据加载中'}</div>
      <span>{user}</span>
      <br />
      <div className="h-full app-container">
        <div className="h-full text-center flex select-none all:transition-300">
          <div>
            <div className="text-5xl fw100 animate-bounce-alt animate-count-infinite animate-1s">
              UnoCSS
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
