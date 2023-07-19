import { configureStore } from '@reduxjs/toolkit'
import publicReducer from './modules/public'
import menuReducer from './modules/menu'
import tabsReducer from './modules/tabs'
import userReducer from './modules/user'

export const store = configureStore({
  reducer: {
    public: publicReducer,
    menu: menuReducer,
    tabs: tabsReducer,
    user: userReducer
  }
})

// 如果时ts的环境，那么就加上以下两句话
// 需要提取 RootState 类型和 Dispatch 类型
// RootState 其实就是所以模块组成的共同的状态， 后续组件中使用是 要给你的 state 设置类型注解 useSelector(state => state.home.bannerList)
// Dispatch 类型 const dispatch = useDispatch()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
