import { Router } from 'express'

import { AuthController } from './controllers/AuthController'
import { UsersController } from './controllers/UsersController'

import { UserValidator } from './validators/UserValidator'

const authController = new AuthController()
const usersController = new UsersController()

const userValidator = new UserValidator()

const routes = Router()

routes.get('/', (req, res) => {
  res.json({ ping: 'pong' })
})

routes.post('/users/signin', authController.signIn)

routes.post('/users', authController.signUp)
routes.get('/users', usersController.getAllUsers)

export { routes }
