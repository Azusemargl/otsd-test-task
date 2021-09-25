import React from 'react'
import classNames from 'classnames'
import { useInput } from '../../hooks'
import { Button, CalculateItem, Tag } from '..'
import style from './style.module.scss'

interface FormProps {
   close: (value: boolean) => void
}

const Form: React.FC<FormProps> = ({ close }) => {
   const { value, isEmpty, isDirty, isNumber, isValid, onChange, onBlur } = useInput("", {
      required: true,
      number: true
   })

   const [activeTag, setActiveTag] = React.useState<"1" | "2">("1")
   const [calculate, setCalculate] = React.useState(false)
   const [checkMoney, setCheckMoney] = React.useState(false)
   const [money, setMoney] = React.useState(0)

   const empty = isDirty && isEmpty || checkMoney
   const error = !isNumber && isDirty && !isEmpty

   const onCalculate = () => {
      if (value) {
         setCalculate(true)
         setMoney((+value * 12) * 0.13)
      } else {
         setCheckMoney(true)
      }
   }

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
               <p className={style.form__button__text} onClick={() => onCalculate()}>Рассчитать</p>
               {calculate && (
                  <div className={style.form__calculate}>
                     <p className={style.form__text}>Итого можете внести в качестве досрочных:</p>
                     <CalculateItem yaer="в 1-ый год" checked={true} money={money} />
                     <CalculateItem yaer="в 2-ой год" checked={true} money={money} />
                     <CalculateItem yaer="в 3-ый год" checked={true} money={money} />
                     <CalculateItem yaer="в 4-ый год" checked={false} money={money} />
                  </div>
               )}
               <div className={style.form__tags}>
                  <p className={style.form__text}>Что уменьшаем?</p>
                  <Tag id="1" activeTag={activeTag} setter={setActiveTag} />
                  <Tag id="2" activeTag={activeTag} setter={setActiveTag} />
               </div>
               <Button background="full" type="submit" disabled={!isValid}>Добавить</Button>
            </div>
         </form>
      </div>
   )
}

export default Form