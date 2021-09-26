import { Action, InitialState } from './types'
import { CalculateItemType } from '../models/Calculateitem'
import { Minuend } from '../models/Minuend'

export const initialState = {
   salary: null as null | number,
   years: [] as Array<CalculateItemType>,
   minuend: "Платёж" as Minuend
}

export const reducer = (state = initialState, action: Action): InitialState => {
   switch (action.type) {
      case 'SET_SALARY':
         return { ...state, salary: action.payload }

      case 'SET_YEARS':
         return { ...state, years: [...state.years, action.payload] }

      case 'RESET_YEARS':
         return { ...state, years: action.payload }

      case 'CHANGE_CHECK':
         return {
            ...state, years: [...state.years.map(item => {
               if (item.id === action.payload.id) {
                  item.checked = action.payload.check
                  return item
               }
               else return item
            })]
         }

      case 'SET_MINUEND':
         return { ...state, minuend: action.payload }

      default:
         return state
   }
}