import { Middleware } from "redux";
import { RootState } from "./rootReduce";

export const logger: Middleware<{}, RootState> = store => next => action => {
    console.log('[log action]:', action);
    const result = next(action)
    return result
}