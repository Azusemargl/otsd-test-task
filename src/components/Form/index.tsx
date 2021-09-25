import React from 'react'
import classNames from 'classnames'
import { useInput } from '../../hooks'
import { Button } from '..'
import style from './style.module.scss'

interface FormProps {
   close: (value: boolean) => void
}

const Form: React.FC<FormProps> = ({ close }) => {
   const { value, isEmpty, isDirty, isNumber, isValid, onChange, onBlur } = useInput("", {
      required: true,
      number: true
   })

   const empty = isDirty && isEmpty
   const error = !isNumber && isDirty && !isEmpty
   
   return (
      <div className={style.form}>
         <form className={style.form__popup}>
            <div className={style.form__header}>
               <h1 className={style.form__title}>Налоговый вычет</h1>
               <p className={style.form__description}>
                  Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.
               </p>
            </div>
            <div className={style.form__close} onClick={() => close(false)}></div>
            <div className={style.form__body}>
               <div className={style.form__input_group}>
                  <label htmlFor="salary">Ваша зарплата в месяц</label>
                  <input
                     type="text"
                     name="salary"
                     value={value}
                     onChange={e => onChange(e)}
                     onBlur={() => onBlur()}
                     placeholder={empty ? "" : "Введите данные"}
                     className={classNames(style.form__input, { [style.error]: error || empty })}
                  />
                  {(error || empty) &&
                     <span className={style.form__error}>
                        {error && "Некорректное значение"}
                        {empty && "Поле обязательно для заполнения"}
                     </span>
                  }
               </div>
               <Button background="full" type="submit" disabled={!isValid}>Добавить</Button>
            </div>
         </form>
      </div>
   )
}

export default Form