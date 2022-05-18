import Env from '@kernode/core/Env'

export default {
  /** server configuration */
  socketEnable: Env.get('SOCKET', 'on') == 'on' ? true : false,
  serverPort: Env.get('PORT', 3000),
  rateLimit: Env.get('RATE_LIMIT' || 60),
}
