import Env from '@kernode/core/Env'

export default {
  secret: Env.get('JWT_TOKEN'),

  /** 24 hours */
  ttl: Env.get('JWT_TTL', 60 * 60 * 24),
}
