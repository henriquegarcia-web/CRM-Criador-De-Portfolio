import { Request, Response } from 'express'

const User = require('../models/User')

class UsersController {
  async getAllUsers(req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    res.status(200).json({ users })
  }

  async getUserInfo(req: Request, res: Response): Promise<Response> {}
}

export { UsersController }
