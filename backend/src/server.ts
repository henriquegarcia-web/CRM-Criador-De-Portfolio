require('dotenv').config()
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import { routes } from './routes'

try {
  mongoose.connect(process.env.DATABASE_URL, () => console.log('Mongoose is connected'))
} catch (error) {
  console.log(error)
}

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())

app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`server is running: http://localhost:${process.env.PORT}`)
})
