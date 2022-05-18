import { SocketMiddleware, Socket } from '@kernode/core/Types'

class SocketAuthMiddleware implements SocketMiddleware {
  register(socket: Socket, next: Function) {
    let token = socket.handshake.headers.authorization
    if (token) {
      /** check your authorization here */
      // if (Auth.verify(token)) {
      //   return next()
      // }
      // return next(new Error('Invalid JWT Token'))
      return next()
    }
    return next(new Error('Authorization Token Missing'))
  }
}

export default new SocketAuthMiddleware()
