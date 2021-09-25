import React from 'react'
import style from './style.module.scss'

interface ButtonProps {
   text: string
   background: "full"
}

const Button: React.FC<ButtonProps> = ({ text }) => {
   return (
      <button className={style.button}>
         {text}
      </button>
   )
}

export default Button