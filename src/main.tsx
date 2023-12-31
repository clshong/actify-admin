import ReactDOM from 'react-dom/client'
import Router from './router'

import { Provider } from 'react-redux'
import { store } from './store'

import 'normalize.css'
import 'uno.css'

import '../mock'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router />
  </Provider>
)
