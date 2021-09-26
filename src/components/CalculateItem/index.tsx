import React from 'react'
import { useActions } from '../../hooks'
import style from './style.module.scss'

interface CalculateItemProps {
   id: number
   yaer: number
   checked: boolean
   money: number
}

const CalculateItem: React.FC<CalculateItemProps> = ({ id, yaer, checked, money }) => {
   const { changeCheck } = useActions()

   const [check, setCheck] = React.useState(checked)

   const yearExpression = (yaer: number) => {
      if ([2].includes(yaer)) return `во ${yaer}-ой год`
      if ([3].includes(yaer)) return `в ${yaer}-ий год`
      if ([6, 7, 8].includes(yaer)) return `в ${yaer}-ой год`
      else return `в ${yaer}-ый год`
   }

   React.useEffect(() => {
      changeCheck({ id, check })
   }, [check])

   return (
      <div className={style.item}>
         <label className={style.item__checkbox_label}>
            <div className={style.item__row}>
               <p>{money} рублей</p>
               <p>{yearExpression(yaer)}</p>
            </div>
            <input type="checkbox" checked={check} onChange={() => setCheck(!check)} />
            <span className={style.item__checkmark}></span>
         </label>
      </div>
   )
}

export default CalculateItem