# Kernode

- Slim Node js framework with typescript

`npm init kernode`

### Packages Used

- [Express js](https://expressjs.com/en/starter/hello-world.html)
- [Socket.io](https://socket.io/docs/v4/server-initialization/)
- [Knex](http://knexjs.org/)

### HTTP Routes

- routes/web.ts
- routes/api.ts

- api
```
import { ApiRouter as Router } from '@kernode/core'
import ApiController from 'Controller/Http/ApiController'

Router.get('/', ApiController.index)

```

- web
```
import { Router } from '@kernode/core'
import WebController from 'Controller/Http/WebController'

Router.get('/', WebController.index)

```

### Socket

- routes/socket.ts

```
import { SocketListener } from '@kernode/core'
import WebSocketController from 'Controller/Ws/WebSocketController'

SocketListener.on('message', WebSocketController.onMessage)

```

### Event Emitter

- routes/event.ts

```
import { EventListener } from '@kernode/core'
import EventController from 'Controller/Event/EventController'

EventListener.on('message', EventController.onMessage)

```

- Emit from Controller using AppEventEmitter

```
import { AppEventEmitter } from '@kernode/core'
AppEventEmitter.emit('message', { vehicle: 'car' })

```

### Database Migration

- for more information [Click Here](http://knexjs.org/)

#### Models 

```
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

```

```
let users = await User.query().where('id', 1)

```

### Authentication

#### Hash

- `Hash.make('plainPasswordText')` (string)

- `Hash.verify('plainPasswordText', hashedString)` (bool)

#### Jwt Auth

- `Auth.token(userObjectPayload)` (jwt token)

- `Auth.verify(userObjectPayload)` (User Object Payload | false)

#### Storage (support Local and AWS S3) 

- `Storage.store(file)` path(string)

- `Storage.getStream(path, res)` StreamObject

### TODO

- Mailer Class
  - SMTP
  - SES

