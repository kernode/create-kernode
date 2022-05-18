import { EventListener } from '@kernode/core'
import EventController from 'Controller/Event/EventController'

EventListener.on('message', EventController.onMessage)
