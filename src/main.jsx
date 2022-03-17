import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import { store } from './redux/store'
import { Controls } from './components/Controlls'
import App from './components/App'




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1>Learning Redux</h1>
      <App />
      <Controls />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
