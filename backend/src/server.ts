require('dotenv').config()
import express from 'express'
import { routes } from './routes'

const app = express()

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`server is running: http://localhost:${process.env.PORT}`)
})
