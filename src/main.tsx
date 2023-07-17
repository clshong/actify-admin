import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'
import store from './store'

import 'normalize.css'
import '@/assets/css/index.module.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
