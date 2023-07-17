import { FC } from 'react'
import { Button } from 'antd'

import { useAppSelector, useAppDispatch } from '../src/store/hooks.ts'
import { changeCount } from '../src/store/modules/user.ts'

const App: FC = () => {
  const user = useAppSelector((state) => state.user.count)
  const dispatch = useAppDispatch()
  return (
    <>
      <Button type="primary" onClick={() => dispatch(changeCount())}>
        add
      </Button>
      <p>helloworld</p>
      <span>{user}</span>
    </>
  )
}

export default App
