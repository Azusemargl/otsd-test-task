import React from 'react'
import classNames from 'classnames'
import style from './style.module.scss'
import { Minuend } from '../../models/Minuend'

interface TagProps {
   tag: Minuend
   activeTag: Minuend
   setter: (value: Minuend) => void
}

const Tag: React.FC<TagProps> = ({ tag, activeTag, setter, children }) => {
   return (
      <button
      className={classNames(style.tag, {
         [style.active]: activeTag === tag,
      })}
      onClick={() => setter(tag)}
      type="button"
      >
      {children}
   </button>
   )
}

export default Tag