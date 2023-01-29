import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import { getAllRouter, addBookRouter, getBookRouter } from './routes'
import cors from 'cors'

const app: Express = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use('/books', getAllRouter)

mongoose.set('strictQuery', true)

mongoose
  .connect(
    'mongodb+srv://admin:uZflKsjWb2HGvsY4@cluster0.zhnsshv.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('Mongoose connected'))
  .then(() => {
    app.listen(PORT)
  })
  .catch((err) => console.log(err))
