import { body, checkSchema } from 'express-validator'

class UserValidator {
  async signUp(req, res, next) {
    body('name').isLength({ min: 5 })

    body('email').isEmail()

    body('password').isLength({ min: 25 })

    next()
  }
}

export { UserValidator }
