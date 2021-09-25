import { Action, InitialState } from './types'

export const initialState = {
   salary: null as null | number
}

export const reducer = (state = initialState, action: Action): InitialState => {
   switch (action.type) {
      case 'SET_SALARY':
         return { ...state, salary: action.payload }

      default:
         return state
   }
}