import { useSelector } from 'react-redux'

import React from 'react'
import { RootState } from '../redux/rootReduce'

export const Viewer = () => {
  const age = useSelector((state: RootState) => state.counter.age)

  return (
    <div className="wrapper">
      <h2>Some Age: {age}</h2>
    </div>
  )
}
