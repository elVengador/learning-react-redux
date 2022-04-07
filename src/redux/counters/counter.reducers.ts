import { CounterAction } from "./counter.actions"
import { COUNTER_DECREMENT, COUNTER_DOUBLE_DECREMENT, COUNTER_DOUBLE_INCREMENT, COUNTER_INCREMENT, COUNTER_RANDOM, COUNTER_RESET } from "./counter.types"

interface CounterStatus { age: number }
const initialCounter: CounterStatus = { age: 10 }

export const counterReducer = (status = initialCounter, action: CounterAction) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return { age: status.age + 1 }
        case COUNTER_DECREMENT:
            return { age: status.age - 1 }
        case COUNTER_DOUBLE_INCREMENT:
            return { age: status.age + 2 }
        case COUNTER_DOUBLE_DECREMENT:
            return { age: status.age - 2 }
        case COUNTER_RESET:
            return { age: 0 }
        case COUNTER_RANDOM:
            return { age: Math.random() }
        default:
            return status
    }
}