export const logger = store => next => action => {
    console.log('[log action]:', action);
    const result = next(action)
    return result
}