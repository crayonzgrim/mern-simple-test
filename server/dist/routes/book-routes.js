"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeBookRouter = exports.updateBookRouter = exports.getBookRouter = exports.addBookRouter = exports.getAllRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
exports.getAllRouter = router.get('/', controllers_1.getAllBooks);
exports.addBookRouter = router.post('/', controllers_1.addBook);
exports.getBookRouter = router.get('/:id', controllers_1.getById);
exports.updateBookRouter = router.put('/:id', controllers_1.updateBook);
exports.removeBookRouter = router.delete('/:id', controllers_1.deleteBook);
