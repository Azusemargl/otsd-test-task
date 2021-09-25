import { combineReducers, createStore } from "redux"
import { reducer } from "./reducer"

const rootReducer = combineReducers({
   reducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers())

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
export type InferAction<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never