import express, { NextFunction, Request, Response } from 'express'
import { Book } from '../model'
import {
  getAllBooks,
  addBook,
  getById,
  updateBook,
  deleteBook
} from '../controllers'

const router = express.Router()

export const getAllRouter = router.get('/', getAllBooks)
export const addBookRouter = router.post('/', addBook)
export const getBookRouter = router.get('/:id', getById)
export const updateBookRouter = router.put('/:id', updateBook)
export const removeBookRouter = router.delete('/:id', deleteBook)
