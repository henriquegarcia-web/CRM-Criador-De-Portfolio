import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  res.json({ ping: 'pong' })
})

export { routes }
