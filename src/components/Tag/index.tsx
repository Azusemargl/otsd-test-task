import React from 'react'
import classNames from 'classnames'
import style from './style.module.scss'

type TagId = "1" | "2"

interface TagProps {
   id: TagId
   activeTag: TagId
   setter: (value: TagId) => void
}

const Tag: React.FC<TagProps> = ({ id, activeTag, setter }) => {
   return (
      <button
      className={classNames(style.tag, {
         [style.active]: activeTag === id,
      })}
      onClick={() => setter(id)}
      type="button"
      >
      Платёж
   </button>
   )
}

export default Tag