import { useSelector } from 'react-redux'

function App() {

  const age = useSelector(state => state.counter.age)

  return (
    <div className="wrapper">
      <h2>Some Age: {age}</h2>
    </div>
  )
}

export default App
