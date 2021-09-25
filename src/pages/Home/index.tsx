import React from 'react'
import { Form } from '../../components'
import './style.module.scss'

const App: React.FC = () => {
  const [formActive, setFormActive] = React.useState(false)

  return (
    <div className="container">
      <button onClick={() => setFormActive(true)}>Налоговый вычет</button>
      {formActive && <Form />}
    </div>
  )
}

export default App