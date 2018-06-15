import { IUser } from './user'

export interface IStore {
  state: string
  user: IUser,
  fetchUser(id: string): Promise<void>
}
