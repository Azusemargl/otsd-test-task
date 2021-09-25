import { InferAction } from './store'
import { AppActions } from './actions'
import { initialState } from './reducer'

export type InitialState = typeof initialState
export type Action = InferAction<typeof AppActions>