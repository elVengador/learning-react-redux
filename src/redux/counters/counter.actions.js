import { COUNTER_DECREMENT, COUNTER_DOUBLE_DECREMENT, COUNTER_DOUBLE_INCREMENT, COUNTER_INCREMENT, COUNTER_RANDOM, COUNTER_RESET } from "./counter.types"


export const counterIncrement = () => ({
    type: COUNTER_INCREMENT
})

export const counterDecrement = () => ({
    type: COUNTER_DECREMENT
})

export const counterDoubleIncrement = () => ({
    type: COUNTER_DOUBLE_INCREMENT
})

export const counterDoubleDecrement = () => ({
    type: COUNTER_DOUBLE_DECREMENT
})

export const counterReset = () => ({
    type: COUNTER_RESET
})

export const counterRandom = () => ({
    type: COUNTER_RANDOM
})