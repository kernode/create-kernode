import { View } from '@kernode/core'
import { NextFunction, Request, Response } from '@kernode/core/Types'

class WebController {
  public index(req: Request, res: Response, next: NextFunction) {
    new View(res).render('index.html')
  }
}

export default new WebController()
