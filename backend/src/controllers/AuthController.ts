import { Request, Response } from 'express'

const bcrypt = require('bcrypt')
const User = require('../models/User')

class AuthController {
  async signIn(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const user = await User.findOne({ email: email })
    if (!user) {
      res.status(401).json({ message: 'E-mail or password is incorrect' })
      return
    }

    const matchPassword = await bcrypt.compare(password, user.password)
    if (!matchPassword) {
      res.status(401).json({ message: 'E-mail or password is incorrect' })
      return
    }

    const payload = (Date.now() + Math.random()).toString()
    const token = await bcrypt.hash(payload, 10)

    user.token = token
    await user.save()

    return res.status(200).json({ token, email })
  }

  async signUp(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email: email })
    if (!!userExists) {
      res.status(403).json({ message: 'User already exists' })
      return
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const hash = (Date.now() + Math.random()).toString()
    const token = await bcrypt.hash(hash, 10)

    const user = new User({
      name,
      email,
      password: passwordHash,
      token
    })

    await user.save()

    res.status(200).json({ message: 'User created successfully', user })
  }
}

export { AuthController }
