import { configure, flow, observable, onBecomeObserved } from 'mobx'
import fetch from './helpers/fetch'
import { IStore } from './interfaces/store'
import { IUser } from './interfaces/user'

configure({ enforceActions: true })

export default class Store {
  @observable public user: IUser
  @observable public state: string = 'pending'

  public fetchUser = flow(function*(this: IStore, id: string): IterableIterator<Promise<IUser>> {
    this.state = 'pending'

    try {
      this.user = yield fetch<IUser>(`https://api.github.com/users/${id}`)
      this.state = 'done'
    } catch (error) {
      this.state = 'error'
    }
  })

  constructor(id: string) {
    onBecomeObserved(this, 'state', () => this.fetchUser(id))
  }
}
