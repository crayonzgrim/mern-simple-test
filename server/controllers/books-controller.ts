import { Request, Response, NextFunction } from 'express'
import { Book } from '../model'

export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let books

  try {
    books = await Book.find()
  } catch (err) {
    console.log(err)
  }

  if (!books) {
    return res.status(404).json({ message: 'No products found' })
  }
  return res.status(200).json({ books })
}

export const addBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, author, description, price, available } = req.body

  let book
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available
    })

    await book.save()
  } catch (err) {
    console.log(err)
  }

  if (!book) {
    return res.status(500).json({ message: 'Unabel To Add Book' })
  }

  return res.status(201).json({ book })
}
