import React from 'react'
import style from './style.module.scss'

interface CalculateItemProps {
   yaer: string
   checked: boolean
   money: number
}

const CalculateItem: React.FC<CalculateItemProps> = ({ yaer, checked, money }) => {
   const [check, setCheck] = React.useState(checked)

   return (
      <div className={style.item}>
         <label className={style.item__checkbox_label}>
            <div className={style.item__row}>
               <p>{money} рублей</p>
               <p>{yaer}</p>
            </div>
            <input type="checkbox" checked={check} onChange={() => setCheck(!check)} />
            <span className={style.item__checkmark}></span>
         </label>
      </div>
   )
}

export default CalculateItem