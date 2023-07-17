import { createSlice } from '@reduxjs/toolkit'
interface IAppState {
  count: number
}
// const initialState: IAppState = {
//   collapsed: false
// }
const initialState = {
  count: 0
} as IAppState

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeCount(state) {
      state.count = state.count + 1
    }
  }
})
export const { changeCount } = appSlice.actions
export default appSlice.reducer
