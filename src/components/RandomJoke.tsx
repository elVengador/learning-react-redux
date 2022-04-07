import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChuckNorrisJoke, jokesReset } from '../redux/jokes/jokes.actions'
import { RootState } from '../redux/rootReduce'

import './RandomJoke.css'


export const RandomJoke = () => {

    const { data: jokes, isLoading } = useSelector((state: RootState) => state.jokes)
    const dispatch = useDispatch()

    const onGetJoke = () => dispatch(fetchChuckNorrisJoke())
    const onResetJoke = () => dispatch(jokesReset())

    return (
        <div className='jokes'>
            <div>Chuck Norris Random joke: {isLoading}</div>
            {isLoading && <span>Loading...</span>}
            {!isLoading && <div className='controls'>
                <button onClick={onGetJoke}>Get one more!</button>
                <button onClick={onResetJoke}>Reset</button>
            </div>}
            <div >
                {jokes.map((cur, idx) => <p key={idx} className="joke">{cur}</p>)}
            </div>
        </div>
    )
}
