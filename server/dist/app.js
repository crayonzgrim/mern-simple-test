"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/books', routes_1.getAllRouter);
mongoose_1.default.set('strictQuery', true);
mongoose_1.default
    .connect('mongodb+srv://admin:uZflKsjWb2HGvsY4@cluster0.zhnsshv.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Mongoose connected'))
    .then(() => {
    app.listen(PORT);
})
    .catch((err) => console.log(err));
