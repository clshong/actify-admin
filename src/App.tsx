import { FC } from 'react'
import { Button } from 'antd'

import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { changeCount } from '@/store/modules/user'

const App: FC = () => {
  const user = useAppSelector((state) => state.user.count)
  const dispatch = useAppDispatch()
  return (
    <div className="flex flex-col justify-center align-center h-72 items-center m-10">
      <p>helloworld</p>
      <Button type="primary" onClick={() => dispatch(changeCount())}>
        点击加1
      </Button>
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
