import { JOKES_ADD, JOKES_IS_LOADING, JOKES_IS_NOT_LOADING, JOKES_RESET } from "./jokes.types"

export const fetchChuckNorrisJoke = () => async dispatch => {
    dispatch(jokesIsLoading())
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await res.json()
    dispatch(jokesAdd(data.value))
    dispatch(jokesIsNotLoading())
}

export const jokesAdd = (joke) => ({
    type: JOKES_ADD,
    payload: joke
})

export const jokesReset = () => ({
    type: JOKES_RESET
})

export const jokesIsLoading = () => ({
    type: JOKES_IS_LOADING
})

export const jokesIsNotLoading = () => ({
    type: JOKES_IS_NOT_LOADING
})