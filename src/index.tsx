import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Home } from './pages'
import './styles/index.scss'

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
)