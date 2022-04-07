import { useSelector } from 'react-redux'

function Viewer() {

  const age = useSelector(state => state.counter.age)

  return (
    <div className="wrapper">
      <h2>Some Age: {age}</h2>
    </div>
  )
}

export default Viewer
