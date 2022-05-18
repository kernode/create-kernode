import { Kernel } from '@kernode/core/Types'
import AuthMiddleware from 'Middleware/Http/AuthMiddleware'

let kernel: Kernel = {
  /** middleware for web and api route (not include socket) */
  global: [],

  /** middleware for web route */
  web: [AuthMiddleware],

  /** middleware for api(api/*) route */
  api: [],

  /** middleware for socket */
  socket: [],
}

export default kernel
