"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require('body-parser');
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./routes/todo"));
const app = (0, express_1.default)();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(todo_1.default);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
