import { Model } from '@kernode/core'

class User extends Model {
  tableName: string = 'users'

  id: string
  name: string
  email: string
  password: string
  created_at: string
  updated_at: string
}

export default new User()
