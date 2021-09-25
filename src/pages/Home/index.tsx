import React from 'react'
import { Button, Form } from '../../components'
import style from './style.module.scss'

const App: React.FC = () => {
  const [formActive, setFormActive] = React.useState(false)

  return (
    <div className={style.container}>
      <Button background="transparent" size="big" onClick={() => setFormActive(true)}>Налоговый вычет</Button>
      {formActive && <Form close={setFormActive} />}
    </div>
  )
}

export default App