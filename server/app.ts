import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import { getAllRouter, addBookRouter, getBookRouter } from './routes'

const app: Express = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/books', getAllRouter)
// app.use('/books/:id', getBookRouter)

mongoose.set('strictQuery', true)

//uZflKsjWb2HGvsY4
mongoose
  .connect(
    'mongodb+srv://admin:uZflKsjWb2HGvsY4@cluster0.zhnsshv.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('Mongoose connected'))
  .then(() => {
    app.listen(PORT)
  })
  .catch((err) => console.log(err))
