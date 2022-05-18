import { SocketListener } from '@kernode/core'
import WebSocketController from 'Controller/Ws/WebSocketController'

SocketListener.on('message', WebSocketController.onMessage)
