import { CalculateItemType } from "../models/Calculateitem"
import { Minuend } from './../models/Minuend';

export const AppActions = {
   setSalary: (payload: number) => ({ type: 'SET_SALARY', payload } as const),
   setYears: (payload: CalculateItemType) => ({ type: 'SET_YEARS', payload } as const),
   resetYears: (payload: Array<CalculateItemType>) => ({ type: 'RESET_YEARS', payload } as const),
   changeCheck: (payload: {id: number, check: boolean}) => ({ type: 'CHANGE_CHECK', payload } as const),
   setMinuend: (payload: Minuend) => ({ type: 'SET_MINUEND', payload } as const)
}