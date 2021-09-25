import React from 'react'
import { Validation } from '../models/Validation'

const useValidation = (value: string, validations: Validation) => {
   const [isEmpty, setEmpty] = React.useState(true)
   const [isNumber, setIsNumber] = React.useState(true)
   const [isValid, setValid] = React.useState(false)

   React.useEffect(() => {
      for (const validation in validations) {
         switch (validation) {
            case "required":
               value ? setEmpty(false) : setEmpty(true)
               break

            case "number":
               +value ? setIsNumber(true) : setIsNumber(false)
               break
         
            default:
               break
         }
      }
   }, [value, validations])

   React.useEffect(() => {
      if (isEmpty || !isNumber) setValid(false)
      else setValid(true)
   }, [isEmpty, isNumber])

   return {
      isEmpty,
      isValid,
      isNumber
   }
}

export default useValidation