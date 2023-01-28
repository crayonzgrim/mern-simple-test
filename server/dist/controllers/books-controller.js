"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.addBook = exports.getById = exports.getAllBooks = void 0;
const model_1 = require("../model");
const getAllBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let books;
    try {
        books = yield model_1.Book.find();
    }
    catch (err) {
        console.error(err);
    }
    if (!books) {
        return res.status(404).json({ message: 'No products found' });
    }
    return res.status(200).json({ books });
});
exports.getAllBooks = getAllBooks;
const getById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    let book;
    try {
        book = yield model_1.Book.findById(id);
    }
    catch (err) {
        console.error(err);
    }
    if (!book) {
        return res.status(404).json({ message: 'No book found' });
    }
    return res.status(200).json({ book });
});
exports.getById = getById;
const addBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
        book = new model_1.Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        yield book.save();
    }
    catch (err) {
        console.error(err);
    }
    if (!book) {
        return res.status(500).json({ message: 'Unabel To Add Book' });
    }
    return res.status(201).json({ book });
});
exports.addBook = addBook;
const updateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
        book = yield model_1.Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        });
        if (book) {
            yield book.save();
        }
    }
    catch (err) {
        console.error(err);
    }
    if (!book) {
        return res.status(404).json({ message: 'Unable To Update By This ID' });
    }
    return res.status(200).json({ book });
});
exports.updateBook = updateBook;
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    let book;
    try {
        book = yield model_1.Book.findByIdAndRemove(id);
    }
    catch (err) {
        console.error(err);
    }
    if (!book) {
        return res.status(404).json({ message: 'Unable To DELTE By This ID' });
    }
    return res.status(200).json({ message: 'Product Successfully Deleted' });
});
exports.deleteBook = deleteBook;
