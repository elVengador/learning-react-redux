import { JokesAction } from "./jokes.actions"
import { JOKES_ADD, JOKES_IS_LOADING, JOKES_IS_NOT_LOADING, JOKES_RESET } from "./jokes.types"

export const jokesReducer = (status = { data: [], isLoading: false }, action: JokesAction) => {
    switch (action.type) {
        case JOKES_ADD:
            return { ...status, data: [...status.data, action.payload] }
        case JOKES_RESET:
            return { ...status, data: [] }
        case JOKES_IS_LOADING:
            return { ...status, isLoading: true }
        case JOKES_IS_NOT_LOADING:
            return { ...status, isLoading: false }
        default:
            return status
    }
}