import { Request, Response } from 'express'

const { v4: uuid } = require('uuid')
const jimp = require('jimp')
const bcrypt = require('bcrypt')
const User = require('../models/User')

const addImage = async buffer => {
  const newName = `${uuid()}.jpg`
  const tmpImg = await jimp.read(buffer)
  tmpImg.cover(500, 500).quality(80).write(`../client/public/media/${newName}`)
  return newName
}

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

    let photoName
    if (req.files) {
      const { file } = req.files
      if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.mimetype)) {
        photoName = await addImage(file.data)
      }
    }

    const user = new User({
      name,
      email,
      password: passwordHash,
      photo: photoName,
      token
    })

    await user.save()

    res.status(200).json({ message: 'User created successfully', user })
  }
}

export { AuthController }
