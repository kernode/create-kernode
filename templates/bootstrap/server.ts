import 'dotenv/config'
import {
  Http,
  Config,
  SocketProvider,
  DatabaseProvider,
  EventProvider,
} from '@kernode/core'
import kernel from '../app/Kernel'

class Application {
  constructor() {
    EventProvider.register({
      routePath: process.cwd() + '/routes/event',
    })

    Http.register({
      apiRoutePath: process.cwd() + '/routes/api',
      webRoutePath: process.cwd() + '/routes/web',
      kernel: kernel,
      port: Config.AppConfig.serverPort,
    })

    SocketProvider.register({
      httpServer: Http.server,
      routePath: process.cwd() + '/routes/socket',
      kernel: kernel,
    })

    DatabaseProvider.register()
  }
}

export default Application
