import classNames from 'classnames'
import React from 'react'
import style from './style.module.scss'

interface FormProps {
   close: (value: boolean) => void
}

const Form: React.FC<FormProps> = ({ close }) => {
   const [error, setError] = React.useState(false)

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
                  
               </div>
            </div>
         </form>
      </div>
   )
}

export default Form