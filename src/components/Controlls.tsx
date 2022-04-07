import React from 'react'

import { useDispatch } from 'react-redux'
import { counterDecrement, counterDoubleDecrement, counterDoubleIncrement, counterIncrement, counterRandom, counterReset } from '../redux/counters/counter.actions'

export const Controls = () => {

    const dispatch = useDispatch()

    const onDoubleDecrement = () => dispatch(counterDoubleDecrement())
    const onDecrement = () => dispatch(counterDecrement())
    const onDoubleIncrement = () => dispatch(counterDoubleIncrement())
    const onIncrement = () => dispatch(counterIncrement())
    const onReset = () => dispatch(counterReset())
    const onRandom = () => dispatch(counterRandom())

    return (
        <div className="controls" >
            <button onClick={onDoubleDecrement}>--</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDoubleIncrement}>++</button>
            <br />
            <button onClick={onReset}>Reset</button>
            <button onClick={onRandom}>Random</button>
        </div>
    )
}
