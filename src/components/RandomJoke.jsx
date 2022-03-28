import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


export const RandomJoke = () => {

    const [jokes, setJokes] = useState([])
    const dispatch = useDispatch()

    // create a thunk action creator to be dispatched
    const fetchChuckNorrisJoke = () => async dispatch => {
        const res = await fetch('https://api.chucknorris.io/jokes/random')
        const data = await res.json()
        console.log('response', data);
        // jokes.push(data.value)
        setJokes([...jokes, data.value])
    }

    const onGetJoke = () => {
        dispatch(fetchChuckNorrisJoke())
        console.log('finish load');
    }

    return (
        <>
            <div>Chuck Norris Random joke:</div>
            <button onClick={onGetJoke}>Get one more!</button>
            <div className="jokes">
                {jokes.map((cur, idx) => <p key={idx}>{cur}</p>)}
            </div>
        </>
    )
}
