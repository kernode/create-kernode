import Env from '@kernode/core/Env'

export default {
  rounds: Env.get('BCRYPT_ROUNDS', 10),
}
