import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from './index'

// 自定义新的hooks，以后在组件中使用  useAppDispatch 和 useAppSelector 代替 原来的 useDispatch 和 useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
// 避免以后在组件中使用 useSelector 时 每次引入 RootState 然后给state做类型注解
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// 如果使用js环境
// import {  useSelector, useDispatch } from 'react-redux'
// // 自定义新的hooks，以后在组件中使用  useAppDispatch 和 useAppSelector 代替 原来的 useDispatch 和 useSelector
// export const useAppDispatch = useDispatch
// export const useAppSelector = useSelector
