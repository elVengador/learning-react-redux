import { AnyAction } from "redux"
import { ThunkAction } from "redux-thunk"
import { RootState } from "../rootReduce"
import { JOKES_ADD, JOKES_IS_LOADING, JOKES_IS_NOT_LOADING, JOKES_RESET } from "./jokes.types"

export interface JokesAction {
    type: string;
    payload?: string;
}

export const fetchChuckNorrisJoke =
    (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
        dispatch(jokesIsLoading())
        const res = await fetch('https://api.chucknorris.io/jokes/random')
        const data = await res.json()
        dispatch(jokesAdd(data.value))
        dispatch(jokesIsNotLoading())
    }

export const jokesAdd = (joke: string): JokesAction => ({
    type: JOKES_ADD,
    payload: joke
})

export const jokesReset = (): JokesAction => ({
    type: JOKES_RESET
})

export const jokesIsLoading = (): JokesAction => ({
    type: JOKES_IS_LOADING
})

export const jokesIsNotLoading = (): JokesAction => ({
    type: JOKES_IS_NOT_LOADING
})