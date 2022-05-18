import { ApiRouter as Router } from '@kernode/core'
import ApiController from 'Controller/Http/ApiController'

Router.get('/', ApiController.index)
