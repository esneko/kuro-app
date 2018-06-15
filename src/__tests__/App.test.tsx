import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from '../App'
import { IStore } from '../interfaces/store'
import Store from '../store'

const store: IStore = new Store('ry')

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App store={store} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
