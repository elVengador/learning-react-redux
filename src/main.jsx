import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import { store } from './redux/store'
import { Controls } from './components/Controlls'
import App from './components/App'
import { RandomJoke } from './components/RandomJoke'




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="wrapper">
        <h1>Learning Redux</h1>
        <App />
        <Controls />

        <hr />

        <RandomJoke />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
