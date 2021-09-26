import React from 'react'
import classNames from 'classnames'
import { useActions, useInput, useTypedSelector } from '../../hooks'
import { Button, CalculateItem, Tag } from '..'
import { Minuend } from '../../models/Minuend'
import style from './style.module.scss'

interface FormProps {
   close: (value: boolean) => void
}

const Form: React.FC<FormProps> = ({ close }) => {
   const { salary, years, minuend } = useTypedSelector(state => state.reducer)
   const { setSalary, setYears, resetYears, setMinuend } = useActions()
   const { value, isEmpty, isDirty, isNumber, isValid, onChange, onBlur } = useInput("", {
      required: true,
      number: true
   })

   const [activeTag, setActiveTag] = React.useState<Minuend>(minuend)
   const [calculate, setCalculate] = React.useState(false)
   const [checkMoney, setCheckMoney] = React.useState(false)

   const empty = (isDirty && isEmpty) || checkMoney
   const error = !isNumber && isDirty && !isEmpty

   const currentCompare = +value === salary
   const months = Math.ceil(260000 / ((+value * 12) * 0.13))

   const onCalculate = () => {
      if (value) {
         resetYears([]) // Calculation reset 
         setCalculate(true)

         const maxCash = 260000
         let cash = maxCash

         for (let i = 0; i < months; i++) {
            let deduction = (+value * 12) * 0.13
            cash = cash - deduction // Current cash with a deduction

            if (cash <= 0) deduction = maxCash - (deduction * (months - 1)) // Get cash for the last month
            
            // setMoney(prev => [...prev, { id: i + 1, money: deduction, checked: false }])
            setYears({ id: i + 1, money: deduction, checked: false })
         }

         setSalary(+value)
      } else {
         setCheckMoney(true)
      }
   }

   const onSubmit = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event.preventDefault()
      const res = years.map((item, index) => [index + 1, item.money, item.checked])
      console.table(res)
      console.table(activeTag)
   }

   const onClose = (value: boolean) => {
      close(value)
      resetYears([])
   }

   React.useEffect(() => {
      setMinuend(activeTag)
   }, [activeTag])

   return (
      <div className={style.form}>
         <form className={style.form__popup}>
            <div className={style.form__header}>
               <h1 className={style.form__title}>Налоговый вычет</h1>
               <p className={style.form__description}>
                  Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.
               </p>
            </div>
            <div className={style.form__close} onClick={() => onClose(false)}></div>
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
               {(calculate && salary && currentCompare) && (
                  <div className={style.form__calculate}>
                     <p className={style.form__text}>Итого можете внести в качестве досрочных:</p>
                     {years.map((item, index) => (
                        <CalculateItem
                           id={item.id}
                           yaer={index+1}
                           checked={item.checked}
                           money={item.money}
                           key={item.id}
                        />
                     ))}
                  </div>
               )}
               <div className={style.form__tags}>
                  <p className={style.form__text}>Что уменьшаем?</p>
                  <Tag tag="Платёж" activeTag={activeTag} setter={setActiveTag}>Платёж</Tag>
                  <Tag tag="Срок" activeTag={activeTag} setter={setActiveTag}>Срок</Tag>
               </div>
               <Button
                  background="full"
                  type="submit"
                  disabled={!isValid || !salary || !currentCompare}
                  onClick={e => onSubmit(e)}
               >
                  Добавить
               </Button>
            </div>
         </form>
      </div>
   )
}

export default Form