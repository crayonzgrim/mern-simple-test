import express, { NextFunction, Request, Response } from 'express'
import { Book } from '../model'
import { getAllBooks, addBook } from '../controllers'

const router = express.Router()

export const getBookRouter = router.get('/', getAllBooks)
export const addBookRouter = router.post('/', addBook)
