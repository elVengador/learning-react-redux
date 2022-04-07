import { COUNTER_DECREMENT, COUNTER_DOUBLE_DECREMENT, COUNTER_DOUBLE_INCREMENT, COUNTER_INCREMENT, COUNTER_RANDOM, COUNTER_RESET } from "./counter.types"

export interface CounterAction {
    type: string
}

export const counterIncrement = (): CounterAction => ({
    type: COUNTER_INCREMENT
})

export const counterDecrement = (): CounterAction => ({
    type: COUNTER_DECREMENT
})

export const counterDoubleIncrement = (): CounterAction => ({
    type: COUNTER_DOUBLE_INCREMENT
})

export const counterDoubleDecrement = (): CounterAction => ({
    type: COUNTER_DOUBLE_DECREMENT
})

export const counterReset = (): CounterAction => ({
    type: COUNTER_RESET
})

export const counterRandom = (): CounterAction => ({
    type: COUNTER_RANDOM
})