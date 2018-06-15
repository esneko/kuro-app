import { Profile } from '@theta/ui-kit'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import * as React from 'react'
import { branch, compose, renderNothing } from 'recompose'
import Theme from './components/Theme'
import { IStore } from './interfaces/store'

interface IProps {
  store: IStore
}

const App = ({ store: { user } }: IProps) => (
  <>
    <Theme>
      <Profile user={user} />
    </Theme>
    <DevTools />
  </>
)

export default compose<IProps, IProps>(
  observer,
  branch(
    ({ store: { state } }) => state === 'pending',
    renderNothing
  )
)(App)
