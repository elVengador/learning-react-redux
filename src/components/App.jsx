// import { useState } from 'react'
// import { useSelector } from 'react-redux'

import { useSelector } from 'react-redux'
import './App.css'

function App() {

  const age = useSelector(state => state.counter.age)

  return (
    <div className="wrapper">
      <h2>{age}</h2>
    </div>
  )
}

export default App
