import { COUNTER_DECREMENT, COUNTER_DOUBLE_DECREMENT, COUNTER_DOUBLE_INCREMENT, COUNTER_INCREMENT, COUNTER_RANDOM, COUNTER_RESET } from "./counter.types"

export const counterReducer = (status = { age: 10 }, action) => {
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