import React from 'react'
import { useValidation } from '.'
import { Validation } from '../models/Validation'

const useInput = (initialValue: string, validations: Validation) => {
   const [value, setValue] = React.useState(initialValue)
   const [isDirty, setDirty] = React.useState(false)

   const valid = useValidation(value, validations)

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
   const onBlur = () => setDirty(true)

   return {
      value,
      isDirty,
      onChange,
      onBlur,
      ...valid
   }
}

export default useInput