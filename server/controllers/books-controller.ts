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
    console.error(err) }

  if (!books) {
    return res.status(404).json({ message: 'No products found' })
  }
  return res.status(200).json({ books })
}

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id

  let book

  try {
    book = await Book.findById(id)
  } catch (err) {
    console.error(err)
  }

  if (!book) {
    return res.status(404).json({ message: 'No book found' })
  }
  return res.status(200).json({ book })
}

export const addBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, author, description, price, available, image } = req.body

  let book
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available
      image
    })

    await book.save()
  } catch (err) {
    console.error(err)
  }

  if (!book) {
    return res.status(500).json({ message: 'Unabel To Add Book' })
  }

  return res.status(201).json({ book })
}

export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id

  const { name, author, description, price, available, image } = req.body

  let book

  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image
    })

    if (book) {
      await book.save()
    }
  } catch (err) {
    console.error(err)
  }

  if (!book) {
    return res.status(404).json({ message: 'Unable To Update By This ID' })
  }

  return res.status(200).json({ book })
}

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id
  let book
  try {
    book = await Book.findByIdAndRemove(id)
  } catch (err) {
    console.error(err)
  }

  if (!book) {
    return res.status(404).json({ message: 'Unable To DELTE By This ID' })
  }

  return res.status(200).json({ message: 'Product Successfully Deleted' })
}
