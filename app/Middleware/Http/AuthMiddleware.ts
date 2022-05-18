import {
  Request,
  Response,
  NextFunction,
  Middleware,
} from '@kernode/core/Types'

class AuthMiddleware implements Middleware {
  register(req: Request, res: Response, next: NextFunction) {
    // check auth here
    next()
  }
}

export default new AuthMiddleware()
