import React from 'react'
import classNames from 'classnames'
import style from './style.module.scss'

interface ButtonProps {
   background: "transparent" | "full"
   size?: "big" | "small"
   type?: "button" | "submit"
   disabled?: boolean
   onClick?: React.MouseEventHandler<HTMLElement>
}

const Button: React.FC<ButtonProps> = ({
   children, background, size = "small", type = "button", disabled = false, onClick
}) => {
   return (
      <button
         className={classNames(style.button, {
            [style.button__full]: background === "full",
            [style.button__transparent]: background === "transparent",
            [style.big]: size === "big",
            [style.small]: size === "small"
         })}
         onClick={onClick}
         type={type}
         disabled={disabled}
      >
         {children}
      </button>
   )
}

export default Button