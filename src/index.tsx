import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { IStore } from './interfaces/store'
import Store from './store'
import './styles.css'

const store: IStore = new Store('ry')

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root') as HTMLElement
)
