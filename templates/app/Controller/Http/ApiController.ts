import { AppEventEmitter } from '@kernode/core'
import { NextFunction, Request, Response } from '@kernode/core/Types'

class ApiController {
  public index(req: Request, res: Response, next: NextFunction) {
    AppEventEmitter.emit('message', { vehicle: 'car' })
    res.send('Welcome from @kernode API')
  }
}

export default new ApiController()
