import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@/assets/css/index.css'
import {Provider} from "react-redux"
import {store} from '@/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter >
        <App />
      </BrowserRouter>
  </Provider>
)
