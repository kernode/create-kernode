import { Router } from '@kernode/core'
import WebController from 'Controller/Http/WebController'

Router.get('/', WebController.index)
